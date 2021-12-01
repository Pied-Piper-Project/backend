import { getDbConnection } from "../db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuid} from 'uuid';
import {sendEmail} from "../util/sendEmail";

export const signUpRoute = {
    path: '/api/ResearchU/SignUp',
    method: 'post',

    handler: async (req, res) => {

        const { email, password, signup } = req.body;
        console.log("signup is", signup)
        const db = getDbConnection("ResearchU");

        let user;
        let insertedID;
        let startingINFO;
        const verificationString = uuid();

        if (signup === "Student") {
            user = await db.collection('studentProfile').findOne({email});
            if (!user) {
            res.sendStatus(409);
            }

            const passwordHash = await bcrypt.hash(password, 10);

            const startingInfo = {
                school: '',
                major: '',
                minor: '',
                onCampus: false,
                year: '',
                gpa: 0.0,
                aboutThem: '',
            };
            const result = await db.collection('studentProfile').insertOne({
                email,
                passwordHash,
                info: startingInfo,
                isVerified: false,
                verificationString,
                appliedPosts: ['']
            });
            const { insertedId } = result;
            insertedID = insertedId
            startingINFO = startingInfo
        }
        else if (signup === "Professor") {
            console.log("PROFESSOR signupppp")
            user = await db.collection('professorProfile').findOne({email});
            if (!user) {
            res.sendStatus(409);
            }

            const passwordHash = await bcrypt.hash(password, 10);

            const startingInfo = {
                school: '',
                onCampus: false,
                department: '',
            };
            const result = await db.collection('professorProfile').insertOne({
                email,
                passwordHash,
                info: startingInfo,
                isVerified: false,
                verificationString,
                createdPosts: ['']
            });
            const { insertedId } = result;
            insertedID = insertedId
            startingINFO = startingInfo
        }
        else {
            user = await db.collection('adminProfile').findOne({email});
            if (!user) {
            res.sendStatus(409);
            }

            const passwordHash = await bcrypt.hash(password, 10);
            const verificationString = uuid();

            const startingInfo = {
                school: '',
                onCampus: false,
                department: '',
                aboutThem: ''
            };
            const result = await db.collection('adminProfile').insertOne({
                email,
                passwordHash,
                info: startingInfo,
                isVerified: false,
                verificationString,
                createdPosts: ['']
            });
            const { insertedId } = result;
            insertedID = insertedId
            startingINFO = startingInfo
        }


        try {
            await sendEmail({
                to: email,
                from: 'xqxqtang@gmail.com',
                subject: 'Please verify your email',
                text: `
                Thanks for signing up! To verify your email, click here:
                http://localhost:3000/ResearchU/verify-email/${verificationString}/${signup}
                `,
            });
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

        
        jwt.sign({
            id: insertedID,
            email,
            info: startingINFO,
            isVerified: false,
            appliedPosts: [''],
        },
        process.env.JWT_SECRET,
            {
                expiresIn: '2d',
            },
            (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({token})
            }
        );
    }
}

        // if (user) {
        //     res.sendStatus(409);
        // }

        // const passwordHash = await bcrypt.hash(password, 10);
        //
        // const verificationString = uuid();
        //
        // const startingInfo = {
        //     school: '',
        //     major: '',
        //     minor: '',
        //     onCampus: false,
        //     year: '',
        //     gpa: 0.0,
        //     aboutThem: '',
        // };
        // const result = await db.collection('studentProfile').insertOne({
        //     email,
        //     passwordHash,
        //     info: startingInfo,
        //     isVerified: false,
        //     verificationString,
        //     appliedPosts: ['']
        // });
        // const { insertedId } = result;
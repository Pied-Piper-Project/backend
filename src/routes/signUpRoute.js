import { getDbConnection } from "../db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUpRoute = {
    path: '/api/ResearchU/SignUp',
    method: 'post',

    handler: async (req, res) => {

        const { email, password } = req.body;

        const db = getDbConnection("ResearchU");
        const user = await db.collection('studentProfile').findOne({email});

        if (user) {
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
            isVerified: false
        });
        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            email,
            info: startingInfo,
            isVerified: false,
        },
        process.env.JWT_SECRET,
            {
                expiresIn: '2d',
            },
            (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({token});
            }
        );
    }
}
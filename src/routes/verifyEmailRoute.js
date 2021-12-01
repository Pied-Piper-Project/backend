import {ObjectID} from 'mongodb';
import jwt from 'jsonwebtoken';
import { getDbConnection} from "../db";

export const verifyEmailRoute = {
    path: '/api/ResearchU/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString, signup } = req.body;
        const db = getDbConnection('ResearchU');
        let result;
        if (signup === 'Student') {
            result = await db.collection('studentProfile').findOne({
            verificationString,
            });
        }
        else if (signup === 'Professor') {
            result = await db.collection('professorProfile').findOne({
            verificationString,
            });
        }
        else if (signup === 'Administrator') {
            result = await db.collection('adminProfile').findOne({
            verificationString,
            });
        }
        else {
            return res.status(401).json({message: 'The email verification code is incorrect'})
        }
        if (!result) return res.status(401).json({message: 'The email verification code is incorrect'})


        if (signup === 'Student') {
            const { _id:id, email, appliedPosts, info } = result;

            await db.collection('studentProfile').updateOne({ _id: id}, {
                $set: { isVerified: true}
            });

            jwt.sign({id, email, isVerified: true, appliedPosts, info}, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {
                if (err) return res.sendStatus(500);
                res.status(200).json({ token });
            })
        }

        else if (signup === 'Professor') {
            const { _id:id, email, createdPosts, info } = result;

            await db.collection('professorProfile').updateOne({ _id: id}, {
                $set: { isVerified: true}
            });

            jwt.sign({id, email, isVerified: true, createdPosts, info}, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {
                if (err) return res.sendStatus(500);
                res.status(200).json({ token });
            })
        }

        else {
            const { _id:id, email, createdPosts, info } = result;

            await db.collection('adminProfile').updateOne({ _id: id}, {
                $set: { isVerified: true}
            });

            jwt.sign({id, email, isVerified: true, createdPosts, info}, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {
                if (err) return res.sendStatus(500);
                res.status(200).json({ token });
            })
        }
        // const { _id:id, email, appliedPosts, info } = result;
        //
        // await db.collection('studentProfile').updateOne({ _id: id}, {
        //     $set: { isVerified: true}
        // });
        //
        // jwt.sign({id, email, isVerified: true, appliedPosts, info}, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {
        //     if (err) return res.sendStatus(500);
        //     res.status(200).json({ token });
        // })
    }
}
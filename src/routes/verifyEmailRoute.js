import {ObjectID} from 'mongodb';
import jwt from 'jsonwebtoken';
import { getDbConnection} from "../db";

export const verifyEmailRoute = {
    path: '/api/ResearchU/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req.body;
        const db = getDbConnection('ResearchU');
        const result = await db.collection('studentProfile').findOne({
            verificationString,
        });
        if (!result) return res.status(401).json({message: 'The email verification code is incorrect'})

        const { _id:id, email, appliedPosts, info } = result;

        await db.collection('studentProfile').updateOne({ _id: id}, {
            $set: { isVerified: true}
        });

        jwt.sign({id, email, isVerified: true, appliedPosts, info}, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {
            if (err) return res.sendStatus(500);
            res.status(200).json({ token });
        })
    }
}
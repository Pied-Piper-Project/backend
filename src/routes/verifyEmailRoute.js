import {ObjectID} from 'mongodb';
import jwt from 'jsonwebtoken';
import { getDbConnection} from "../db";

export const verifyEmailRoute = {
    path: '/api/ResearchU/verify-email',
    method: 'put',
    handler: async (req, res) => {

        const {verificationString} = req.body;
        const db = getDbConnection('ResearchU');
        let resultStudent;
        let resultProf;
        let resultAdmin;

        resultStudent = await db.collection('studentProfile').findOne({
            verificationString,
            });

        resultProf = await db.collection('professorProfile').findOne({
            verificationString,
            });

        resultAdmin = await db.collection('adminProfile').findOne({
            verificationString,
            });


        if (!resultStudent && !resultProf && !resultAdmin) {
            return res.status(401).json({message: 'The email verification code is incorrect'})
        }


        let payload;
        if (resultStudent) {

            const { _id:id, email, appliedPosts, info, signup } = resultStudent;

            await db.collection('studentProfile').updateOne({ _id: id}, {
                $set: { isVerified: true}
            });
            payload = {id, email, isVerified: true, appliedPosts, info, signup}
        }

        if (resultProf) {

            const { _id:id, email, createdPosts, info, signup } = resultProf;

            await db.collection('professorProfile').updateOne({ _id: id}, {
                $set: { isVerified: true}
            });
            payload = {id, email, isVerified: true, createdPosts, info, signup}
        }

        if (resultAdmin) {

            const { _id:id, email, createdPosts, info, signup } = resultAdmin;

            await db.collection('adminProfile').updateOne({ _id: id}, {
                $set: { isVerified: true}
            });

            payload = {id, email, isVerified: true, createdPosts, info, signup}
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {
            if (err) return res.sendStatus(500);
            res.status(200).json({ token });
        })
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
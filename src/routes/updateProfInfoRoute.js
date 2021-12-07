import jwt from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import { getDbConnection} from "../db";

export const updateProfInfoRoute = {
    path: '/api/ResearchU/ProfessorInfoPage/:userId',
    method: 'put',
    handler: async (req, res) => {
        const { authorization } = req.headers;
        const { userId } = req.params;

        const updates = (({
            school,
            onCampus,
            department,
        }) => ({
            school,
            onCampus,
            department,
        }))(req.body);

        if (!authorization) {
            return res.status(401).json({message: "no authorization header sent"});
        }
        //bearer lkj;lkj.
        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(401).json({message: 'Unable to verify token'});

            const { id, isVerified } = decoded;

            if (id != userId) return res.status(403).json({message: 'Not allowed to update that user\'s data'});
            if (!isVerified) return res.status(403).json({message: 'You need to verify your email before updating your profile.'})

            const db = getDbConnection('ResearchU');
            const result = await db.collection('professorProfile').findOneAndUpdate(
                { _id: ObjectID(id) },
                { $set: {info: updates}},
                { returnOriginal: false},
            );
            const { email, appliedPosts, info, signup} = result.value;
            jwt.sign({ id, email, appliedPosts, isVerified, info, signup}, process.env.JWT_SECRET, {expiresIn: '2d'}, (err, token) => {
                if (err) {
                    return res.status(200).json(err);
                }
                res.status(200).json({token});
            });
        })
    }
}

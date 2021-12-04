import { getDbConnection } from "../db";
import { ObjectID } from "bson";
import jwt from 'jsonwebtoken';

export const applyForPostRoute = {
    path: '/api/ResearchU/apply/:postId',
    method: 'put',
    handler: async (req, res) => {
        const{allId} = req.params;
        const {authorization} = req.headers;
        const db = getDbConnection('ResearchU');
        const studentID = req.body.studentID
        const appliedPostsU = req.body.appliedPosts
        const applicantsU = req.body.applicants
        const postID = req.body.postID

        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {

        const resultOne = await db.collection('studentProfile').findOneAndUpdate(
            {_id: ObjectID(studentID)}, {$push: {appliedPosts: appliedPostsU}}, { returnOriginal: false}
        );
        const {email, isVerified, appliedPosts, info} = resultOne.value;
        appliedPosts.push(postID)
        const id = studentID
        const resultTwo = await db.collection('research').updateOne(
            {_id: ObjectID(postID)}, {$push: {applicants: applicantsU}}
        );
        jwt.sign({id, email, isVerified, appliedPosts, info}, process.env.JWT_SECRET, {expiresIn: '2d'}, (err, token) => {
            if (err) {
                return res.status(200).json(err);
            }
            res.status(200).json({token});
        });
        //console.log("Why")
        //res.sendStatus(200);
     })
    }
}
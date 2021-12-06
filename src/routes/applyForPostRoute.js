import { getDbConnection } from "../db";
import { ObjectID } from "bson";
import jwt from "jsonwebtoken";

export const applyForPostRoute = {
    path: '/api/ResearchU/apply/:postId',
    method: 'put',
    handler: async (req, res) => {
        const{id} = req.params;
        const db = getDbConnection('ResearchU');
        const studentID = req.body.studentID
        const appliedPostsU = req.body.appliedPosts
        const applicantsU = req.body.applicants
        const postID = req.body.postID

        console.log("Here!")
        console.log(studentID)
        console.log(appliedPostsU)
        console.log(applicantsU)
        console.log(postID)

        const resultOne = await db.collection('studentProfile').updateOne(
            {_id: ObjectID(studentID)}, {$push: {appliedPosts: appliedPostsU}}
        );
        console.log("Got here!")
        const resultTwo = await db.collection('research').updateOne(
            {_id: ObjectID(postID)}, {$push: {applicants: applicantsU}}
        );


        const user = await db.collection('studentProfile').findOne({_id: ObjectID(studentID)});
        console.log("user id is found: ", user)
        if (!user) return res.sendStatus(401);
        const { _id: sid, email, isVerified, appliedPosts, info} = user;

        jwt.sign({
            id: sid,
            email,
            info,
            isVerified,
            appliedPosts,
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
        res.sendStatus(200);
    }
}
import { getDbConnection } from "../db";
import { ObjectID } from "bson";

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
            {_id: ObjectID(studentID)}, {$set: {appliedPosts: appliedPostsU}}
        );
        console.log("Got here!")
        const resultTwo = await db.collection('research').updateOne(
            {_id: ObjectID(postID)}, {$set: {applicants: applicantsU}}
        );
        res.sendStatus(200);
    }
}
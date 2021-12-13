import { getDbConnection } from "../db";
import { ObjectID } from "bson";
import jwt from "jsonwebtoken";

export const applicantManage = {
    path: '/api/ResearchU/applicantManage/:resultId',
    method: 'put',
    handler: async (req, res) => {
        const{id} = req.params;
        const db = getDbConnection('ResearchU');
        const studentID = req.body.studentID
        const number = req.body.number
        const post_id = req.body.post_id
        const studentArray = [studentID, number]

        const result = await db.collection('research').updateOne(
            {_id: ObjectID(post_id), applicants: [studentID, "1"]}, {$set: {"applicants.$": studentArray}}
        );
        if (number == 0){
            const resultTwo = await db.collection('research').updateOne(
                {_id: ObjectID(post_id), applicants: [studentID, "2"]}, {$set: {"applicants.$": studentArray}}
            );
        }
        else if (number == 2) {
            const resultZero = await db.collection('research').updateOne(
                {_id: ObjectID(post_id), applicants: [studentID, "0"]}, {$set: {"applicants.$": studentArray}}
            );
        }
        res.sendStatus(200);
    }
}
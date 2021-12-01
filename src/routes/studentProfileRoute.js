import { getDbConnection } from "../db";
import { ObjectID } from "bson";

export const studentProfileRoute = {
    path: '/api/ResearchU/StudentProfile/:StudentId',
    method: 'get',
    handler: async (req, res) => {
        const{StudentId} = req.params;
        const db = getDbConnection('ResearchU');

        var resultOne = await db.collection('studentProfile').find(
            {_id: ObjectID(StudentId)}
        ).toArray();
        res.status(200).json(resultOne);
    }
};
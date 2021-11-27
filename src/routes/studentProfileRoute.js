import { getDbConnection } from "../db";
import { ObjectID } from "bson";

export const studentProfileRoute = {
    path: '/api/ResearchU/StudentProfile/:StudentId',
    method: 'get',
    handler: async (req, res) => {
        const{StudentId} = req.params;
        const db = getDbConnection('ResearchU');
        console.log(StudentId)
        console.log(ObjectID(StudentId))

        var resultOne = await db.collection('studentProfile').find(
            {_id: ObjectID(StudentId)}
        ).toArray();
        console.log(resultOne)
        res.sendStatus(200).json(resultOne);
    }
};
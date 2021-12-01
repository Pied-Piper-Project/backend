import { getDbConnection } from "../db";

export const SearchwSchool = {
    path: '/api/searchschool/:school',
    method: 'get',

    handler: async (req, res) => {

        const db = getDbConnection("ResearchU");
        const schoolName = req.params.school;

        var result = await db.collection('research').find({school: schoolName}).toArray();
        res.status(200).json(result);
    }
};
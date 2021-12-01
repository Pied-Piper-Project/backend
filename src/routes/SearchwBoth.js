import { getDbConnection } from "../db";

export const SearchwBoth = {
    path: '/api/searchboth/:school/:keyword',
    method: 'get',

    handler: async (req, res) => {

        const db = getDbConnection("ResearchU");
        const schoolName = req.params.school;
        const keyword = req.params.keyword;

        
        //db.collection('research').createIndex({name: "text", professor: "text", department: "text", postBody: "text"});

        var result = await db.collection('research').find({school: schoolName, $text: {$search: keyword }}).toArray();
        res.status(200).json(result);
    }
};
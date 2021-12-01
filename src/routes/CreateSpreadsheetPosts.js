import { getDbConnection } from "../db";

export const CreateSpreadsheetPosts = {
    path: '/api/createspreadsheetposts',
    method: 'post',

    handler: async (req, res) => {

        const db = getDbConnection("ResearchU");
        const docs = req.body;
       
        const result = await db.collection('research').insertMany(docs);
    }
};
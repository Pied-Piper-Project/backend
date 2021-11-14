import { getDbConnection } from "../db";

export const CreatePostsRoute = {
    path: '/api/createpost',
    method: 'post',

    handler: async (req, res) => {

        const db = getDbConnection("ResearchU");
        const post = req.body;
       
        const result = await db.collection('research').insertOne(post);
    }
};
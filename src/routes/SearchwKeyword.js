import { getDbConnection } from "../db";

export const SearchwKeyword = {
    path: '/api/searchkeyword/:keyword',
    method: 'get',

    handler: async (req, res) => {

        const db = getDbConnection("ResearchU");
        const keyword = req.params.keyword;

        var result = await db.collection('research').find({$text: {$search: keyword }}).toArray();
        res.status(200).json(result);
    }
};
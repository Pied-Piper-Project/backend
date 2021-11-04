import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb+srv://username:pw@cluster0.gudfj.mongodb.net/ResearchU?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

// const withDB = async (operations, res) => {
//     try {
//         res.header('Access-Control-Allow-Origin', "*");
//         const client = await MongoClient.connect('mongodb+srv://aareva2:Lincoln1233@cluster0.gudfj.mongodb.net/ResearchU?retryWrites=true&w=majority');
//         const db = client.db('ResearchU');
//
//         await operations(db);
//
//         client.close();
//     } catch(error){
//         res.status(500).json({message: "Error connnecting to db", error});
//     }
// }
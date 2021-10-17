import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();

app.get('/api/research/:professor', async (req, res) => 
{
    try {
        const schoolName = req.params.professor;

        const client = await MongoClient.connect('mongodb+srv://aareva2:Lincoln1233@cluster0.gudfj.mongodb.net/ResearchU?retryWrites=true&w=majority');
        const db = client.db('ResearchU')
    
        const schoolInfo = await db.collection('research').findOne({professor: schoolName});
        res.status(200).json(schoolInfo);
    
        client.close()
    } catch(error){
        res.status(500).json({message: "Error connnecting to db", error});
    }
});

// useEffect(() => {
//     const fetchData = async () => {
//         const result = await fetch('http://localhost:8000/api/research/Fossati');
//         const body = await result.json();
//     }
// })

app.listen(8000, () => console.log('Listening on port 8000'));

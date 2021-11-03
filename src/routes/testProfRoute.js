//get example with research opportunity given prof name


// app.get('/api/research/:professor', async (req, res) =>
// {
//         withDB(async (db) => {
//             const professorName = req.params.professor;
//
//             const researchInfo = await db.collection('research').findOne({professor: professorName});
//             res.status(200).json(researchInfo);
//
//         }, res);
// });
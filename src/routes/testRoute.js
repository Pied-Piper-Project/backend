//test without db
export const testRoute = {
    path: '/api/test',
    method: 'get',
    handler: (req, res) => {

        res.status(200).send("It works");
    },
};
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
//
// //get example with student given student name
// app.get('/api/student/:studentName', async (req, res) =>
// {
//         withDB(async (db) => {
//             const studentName = req.params.studentName;
//
//             const studentInfo = await db.collection('studentProfile').findOne({name: studentName});
//             res.status(200).json(studentInfo);
//
//         }, res);
// });
//
// //get example with admin given admin name
// app.get('/api/admin/:adminName', async (req, res) =>
// {
//
//         withDB(async(db) => {
//             const adminName = req.params.adminName;
//
//             const adminInfo = await db.collection('adminProfile').findOne({name: adminName});
//             res.status(200).json(adminInfo);
//
//         }, res);
// });
//
// //post example to update student year given student name
// app.post('/api/studentProfile/:student/edit/year/:value', async(req, res) => {
//         withDB(async (db) => {
//             const studentName = req.params.student;
//             const newValue = req.params.value;
//
//             await db.collection('studentProfile').updateOne({name: studentName}, {
//                 '$set': {
//                     year: newValue,
//                 },
//             });
//             const updatednewField = await db.collection('studentProfile').findOne({name: studentName});
//
//         res.status(200).json(updatednewField);
//         }, res);
// });
// //post example to update student grad status given student name
// app.post('/api/studentProfile/:student/edit/isGrad', async(req, res) => {
//         withDB(async (db) => {
//             const studentName = req.params.student;
//             const studentInfo = await db.collection('studentProfile').findOne({name: studentName});
//             const oldValue = studentInfo.isGrad
//             const newValue = !oldValue
//             await db.collection('studentProfile').updateOne({name: studentName}, {
//                 '$set': {
//                     isGrad: newValue,
//                 },
//             });
//             const updatednewField = await db.collection('studentProfile').findOne({name: studentName});
//
//         res.status(200).json(updatednewField);
//         }, res);
// });
// //post example to update admin school given admin name
// app.post('/api/adminProfile/:admin/edit/school/:value', async(req, res) => {
//         withDB(async (db) => {
//             const adminName = req.params.admin;
//             const newValue = req.params.value;
//
//             await db.collection('adminProfile').updateOne({name: adminName}, {
//                 '$set': {
//                     school: newValue,
//                 },
//             });
//             const updatednewField = await db.collection('adminProfile').findOne({name: adminName});
//
//         res.status(200).json(updatednewField);
//         }, res);
// });
// //post example to add a language skill given student name
// // app.post('/api/studentProfile/:student/add/experience/language', async(req, res) => {
// //         const languages = req.body;
// //         withDB(async (db) => {
// //             const studentName = req.params.student;
// //             const studentInfo = await db.collection('studentProfile').findOne({name: studentName});
// //             await db.collection('studentProfile').updateOne({name: studentName}, {
// //                 '$set': {
// //                     experience : {language: studentInfo.experience.language.concat(languages)},
// //                 },
// //             });
// //             const updatedStudentInfo = await db.collection('studentProfile').findOne({name: studentName});
// //             res.status(200).json(updatedStudentInfo);
// //         }, res);
// //
// // });
//
// //get example on research opportunity
// // app.get('/api/research/:professor', async (req, res) =>
// // {
// //     try {
// //         const schoolName = req.params.professor;
// //         console.log(schoolName)
// //         const client = await MongoClient.connect('mongodb+srv://aareva2:Lincoln1233@cluster0.gudfj.mongodb.net/ResearchU?retryWrites=true&w=majority');
// //         const db = client.db('ResearchU')
// //
// //         // console.log(client)
// //         const schoolInfo = await db.collection('research').findOne({professor: schoolName});
// //         console.log(schoolInfo)
// //         res.status(200).json(schoolInfo);
// //
// //         client.close()
// //     } catch(error){
// //         res.status(500).json({message: "Error connnecting to db", error});
// //     }
// // });
//
//
//
// // useEffect(() => {
// //     const fetchData = async () => {
// //         const result = await fetch('http://localhost:8000/api/research/Fossati');
// //         const body = await result.json();
// //     }
// // })
//
// app.listen(8000, () => console.log('Listening on port 8000'));

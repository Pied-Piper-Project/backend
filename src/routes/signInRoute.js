import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection} from "../db";

export const signInRoute = {
    path: '/api/ResearchU/SignIn',
    method: 'post',
    handler: async (req, res) => {
        const {email, password, signin } = req.body;
        let user;

        const db = getDbConnection('ResearchU');
        if (signin === "Student") {
            user = await db.collection('studentProfile').findOne({email});
        }
        else if (signin === "Professor") {
            user = await db.collection('professorProfile').findOne({email});
        }
        else {
            user = await db.collection('adminProfile').findOne({email});
        }
        //const user = await db.collection('studentProfile').findOne({email});

        if (!user) return res.sendStatus(401);

        if (signin === "Student") {
            const { _id: id, isVerified, passwordHash, appliedPosts, info} = user;
            const isCorrect = await bcrypt.compare(password, passwordHash);
            if (isCorrect) {
                jwt.sign({ id, isVerified, email, appliedPosts, info},
                            process.env.JWT_SECRET, {expiresIn: '2d'},
                    (err, token) => {
                                if (err) {
                                    res.status(500).json(err);
                                }
                                res.status(200).json({token});
                             }
                );
            } else {
                res.sendStatus(401);
            }
        }
        else if (signin === "Professor") {
            const { _id: id, isVerified, passwordHash, createdPosts, info} = user;
            const isCorrect = await bcrypt.compare(password, passwordHash);
            if (isCorrect) {
                jwt.sign({ id, isVerified, email, createdPosts, info},
                            process.env.JWT_SECRET, {expiresIn: '2d'},
                    (err, token) => {
                                if (err) {
                                    res.status(500).json(err);
                                }
                                res.status(200).json({token});
                             }
                );
            } else {
                res.sendStatus(401);
            }
        }
        else {
            const { _id: id, isVerified, passwordHash, createdPosts, info} = user;
            const isCorrect = await bcrypt.compare(password, passwordHash);
            if (isCorrect) {
                jwt.sign({ id, isVerified, email, createdPosts, info},
                            process.env.JWT_SECRET, {expiresIn: '2d'},
                    (err, token) => {
                                if (err) {
                                    res.status(500).json(err);
                                }
                                res.status(200).json({token});
                             }
                );
            } else {
                res.sendStatus(401);
            }
        }

        //const { _id: id, isVerified, passwordHash, appliedPosts, info} = user;
        // const isCorrect = await bcrypt.compare(password, passwordHash);
        // if (isCorrect) {
        //     jwt.sign({ id, isVerified, email, appliedPosts, info},
        //                     process.env.JWT_SECRET, {expiresIn: '2d'},
        //             (err, token) => {
        //                         if (err) {
        //                             res.status(500).json(err);
        //                         }
        //                         res.status(200).json({token});
        //                      }
        //     );
        // } else {
        //     res.sendStatus(401);
        // }
    }
}
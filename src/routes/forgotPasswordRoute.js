import { v4 as uuid } from 'uuid';
import { sendEmail } from "../util/sendEmail";
import { getDbConnection } from "../db";

export const forgotPasswordRoute = {
    path: '/api/ResearchU/forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;

        const db = getDbConnection('ResearchU');
        const passwordResetCode = uuid();

        const result = await db.collection('studentProfile').updateOne( { email }, { $set: {passwordResetCode}});

        //if user with that email exists
        if (result.modifiedCount > 0) {
            try {
                await sendEmail({
                    to: email,
                    from: 'xqxqtang@gmail.com',
                    subject: 'Password Reset',
                    text: `
                        To reset your password, click this link:
                        http://localhost:3000/reset-password/${passwordResetCode}
                        `
                });
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }

        };
        res.sendStatus(200);
    }
}
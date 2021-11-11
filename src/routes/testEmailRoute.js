import { sendEmail} from "../util/sendEmail";

export const testEmailRoute = {
    path: '/api/ResearchU/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'xqxqtang+test1@gmail.com',
                from: 'xqxqtang@gmail.com',
                subject: 'Does this work?',
                text: 'if you are reading this! it works!',
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

    }
}
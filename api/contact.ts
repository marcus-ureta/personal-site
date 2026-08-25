import process from "node:process";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {

    console.log("CONTACT FUNCTION STARTED");
    console.log(
        "RESEND KEY EXISTS:",
        Boolean(process.env.RESEND_API_KEY)
    );

    if(req.method !== 'POST') {
        return res.status(405).json({
            error: 'Only accepting POST!',
        });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }

    try {
        await resend.emails.send({
            from: "From Personal Website <contact@marcusureta.dev>",
            to: ["marcustimothy.ureta@gmail.com"],
            replyTo: email,
            subject: subject,
            text: `
Name: ${name}
Email: ${email}

${message}
                `,
        });

        return res.status(200).json({
            success: true,
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                error: "Failed to send email",
            });
    }
}
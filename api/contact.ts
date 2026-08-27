import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    return emailRegex.test(email);
}

export default async function handler(req: any, res: any) {

    if(req.method !== 'POST') {
        return res.status(405).json({
            error: 'Only accepting POST!',
        });
    }

    const { name, email, subject, message, phone } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }

    if(phone !== '')
    {
        return res.status(400).json({
            error: "bad request!",
        });
    }

    // Email Validation
    if(!isValidEmail(email))
    {
        return res.status(400).json({
            error: "Email is not valid!",
        });
    }

    // Name Validation
    if(name.length < 2 || name.length >= 40)
    {
        return res.status(400).json({
            error: name.length < 2 ? "Name is too short!" : "Name is too long!",
        });
    }

    // Email Requirement
    if(message.length <= 10)
    {
        return res.status(400).json({
            error: "Email message is too short!",
        });
    }

    // Subject Requirement
    if(subject.length <= 5 || subject.length >= 50)
    {
        return res.status(400).json({
            error: subject.length <= 5 ? "Subject Email too short!" : "Subject Email too long!",
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
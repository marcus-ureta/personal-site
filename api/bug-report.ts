
export default async function handler(req: any, res: any) {

    if(req.method !== 'POST') {
        return res.status(405).json({
            error: 'Only accepting POST!',
        });
    }

    const { title, description, expectedOutput, stepsToReproduce, evidenceUrl, additionalInfo, email } = req.body;

    if(!title || !description || !expectedOutput || !stepsToReproduce || !evidenceUrl || !additionalInfo || !email) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }


    // temporary
    return res.status(200).json({
        success: true,
    });
}

export default async function handler(req: any, res: any) {

    if(req.method !== 'POST') {
        return res.status(405).json({
            error: 'Only accepting POST!',
        });
    }

    let { title, description, expectedOutput, stepsToReproduce, evidenceUrl, additionalInfo, email } = req.body;

    if(!title || !description || !expectedOutput || !stepsToReproduce) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }

    if(!evidenceUrl) evidenceUrl = "N/A";
    if(!additionalInfo) additionalInfo = "N/A";
    if(!email) email = "N/A";

    
    if(title.length < 5 || title.length > 100) {
        return res.status(400).json({
            error: title.length < 5 ? "title is too short!" : "title is too long!",
        });
    }

    if(description.length < 10 || description.length > 1000) {
        return res.status(400).json({
            error: description.length < 10 ? "description is too short!" : "description is too long!",
        });
    }

    if(expectedOutput.length < 10 || expectedOutput.length > 1000) {
        return res.status(400).json({
            error: expectedOutput.length < 10 ? "expected output is too short!" : "expected output is too long!",
        });
    }

    if(stepsToReproduce.length < 10 || stepsToReproduce.length > 1000) {
        return res.status(400).json({
            error: stepsToReproduce.length < 10 ? "steps to reproduce is too short!" : "steps to reproduce is too long!",
        });
    }


    const combinedDescription = `**Description:**\n${description}\n\n**Expected Output:**\n${expectedOutput}\n\n**Steps to Reproduce:**\n${stepsToReproduce}\n\n**Evidence URL:**\n${evidenceUrl}\n\n**Additional Information:**\n${additionalInfo}\n\n**Email:**\n${email}`;

    try{
        await fetch('https://api.github.com/repos/marcus-ureta/personal-site/issues', {
            method: 'POST',
            headers: {  
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
                'User-Agent': 'personal-site-bug-report',
            },
            body: JSON.stringify({
                title: title,
                body: combinedDescription,
                labels: ['bug']
            })
        });

        return res.status(200).json({
            success: true,
        });

    }catch(e){
        return res.status(500).json({
            error: "Internal server error",
        });
    }
}
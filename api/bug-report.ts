
export default async function handler(req: any, res: any) {

    if(req.method !== 'POST') {
        return res.status(405).json({
            error: 'Only accepting POST!',
        });
    }

    const { title, description, expectedOutput, stepsToReproduce, evidenceUrl, additionalInfo, email } = req.body;

    if(!title || !description || !expectedOutput || !stepsToReproduce) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }

    // INPUT VALIDATION HERE

    const combinedDescription = `**Description:**\n${description}\n\n**Expected Output:**\n${expectedOutput}\n\n**Steps to Reproduce:**\n${stepsToReproduce}\n\n**Evidence URL:**\n${evidenceUrl}\n\n**Additional Information:**\n${additionalInfo}\n\n**Email:**\n${email}`;

    try{
        const response = await fetch('https://api.github.com/repos/marcus-ureta/personal-site/issues', {
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

        const data = await response.json();
        console.log('Issue created successfully:', data.html_url);
        return res.status(200).json({
            success: true,
        });

    }catch(e){
        console.error(e);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
}
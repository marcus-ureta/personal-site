
import { Link } from 'react-router-dom'

function BugReportPage(){

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const response = await fetch("/api/bug-report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: formData.get("title"),
                description: formData.get("description"),
                expectedOutput: formData.get("expectedOutput"),
                stepsToReproduce: formData.get("stepsToReproduce"),
                evidenceUrl: formData.get("evidenceUrl"),
                additionalInfo: formData.get("additionalInfo"),
                email: formData.get("email"),
                tos: formData.get("tos_acceptance")
            }),
        });

        if(response.ok) console.log('Bug report submitted successfully!');
        else console.error('Failed to submit bug report.');

        console.log(formData);
    }

    return(
        <>
            <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
                <div className='flex flex-col justify-center items-center py-[3%]'>
                    <h1 className="font-['Jost'] text-[clamp(24px,3.5vw,48px)]">so... you found a bug eh?</h1>
                    <h2 className="font-['Jost'] text-[clamp(18px,3vw,30px)]">well, let's report it!</h2>
                    <Link to="/" className='mt-[16px] text-blue-400 underline hover:cursor-pointer'>return to site</Link>
                
                    <form className='flex flex-col w-[80%] max-w-[720px] overflow-auto mt-[5%] sm:mt-[2%]' onSubmit={handleSubmit}>
                        <h3>Bug Report Title</h3>
                        <input className='base-input' placeholder='Bug Title' required name='title'/>

                        <h3>Bug Description</h3>
                        <textarea className='base-input' placeholder='What Happened?' required name='description'/>

                        <h3>Expected Output</h3>
                        <textarea className='base-input' placeholder='What Should Happen?' required name='expectedOutput'/>

                        <h3>Steps to Reproduce the Bug</h3>
                        <textarea className='base-input' placeholder='How to Reproduce?' required name='stepsToReproduce'/>

                        <h3>Video or Screenshot Evidence (Optional!)</h3>
                        <input className='base-input' placeholder='Video/Screenshot URL' name='evidenceUrl'/>

                        <h3>Additional Information (Optional!)</h3>
                        <textarea className='base-input' placeholder='Additional Information' name='additionalInfo'/>

                        <h3>Email (Optional!)</h3>
                        <input className='base-input' placeholder='Email' name='email' type='email'/>

                        <input className='absolute left-[-9999px]' name="tos_acceptance"/>

                        <button className='bg-primary-blue hover:cursor-pointer w-fit mx-auto px-[3%] py-[0.5%] border-secondary-blue border-2 rounded-xl hover:bg-secondary-blue hover:border-primary-blue hover:text-hover-white transition-all' type="submit">Submit Report</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BugReportPage
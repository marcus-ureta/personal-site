
import { useState } from 'react'
import { Link } from 'react-router-dom'

import LoadingScreen from '@/components/loading_screen/LoadingScreen'

function BugReportPage(){

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showMessage, setShowMessage] = useState<boolean | null>(null);

    const [errorMessage, setErrorMessage] = useState<string>('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        setIsLoading(true);
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

        setIsLoading(false);

        if(response.ok) {
            console.log('Bug report submitted successfully!');
            setShowMessage(true);
        } else {
            console.error('Failed to submit bug report.');
            setErrorMessage((await response.json()).error || 'An error occurred while submitting the bug report.');
            setShowMessage(false);
        }

        console.log(formData);
    }

    return(
        <>
            {isLoading && <LoadingScreen activateLoad={isLoading} />}

            <div className={`fixed top-0 left-0 w-full h-full bg-black/50 z-[999] flex justify-center items-center transition-all ${showMessage === true ? '' : 'hidden'}`}>
                <div className='bg-[#BDEEC4] w-[80%] max-w-[400px] h-fit p-[2%] rounded-xl border-4 border-[#A8D8B9] flex flex-col gap-y-4'>
                    <h1 className='text-[clamp(18px,3vw,24px)] text-center'>bug report submitted!</h1>
                    <p className='text-[clamp(14px,2.5vw,18px)] text-center'>thank you for your report! i'll look into it as soon as possible.</p>
                    <button className='bg-[#80b369] hover:cursor-pointer w-fit mx-auto px-[5%] py-[2%] border-[#37562F] border-2 rounded-xl hover:bg-[#37562F] hover:border-[#80b369] hover:text-hover-white transition-all' onClick={() => setShowMessage(null)}>Close Message</button>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full bg-black/50 z-[999] flex justify-center items-center transition-all ${showMessage === false ? '' : 'hidden'}`}>
                <div className='bg-[#FB9D9D] w-[80%] max-w-[400px] h-fit p-[2%] rounded-xl border-4 border-[#8D5656] flex flex-col gap-y-4'>
                    <h1 className='text-[clamp(18px,3vw,24px)] text-center'>could not submit report :c</h1>
                    <p className='text-[clamp(14px,2.5vw,18px)] text-center'>{errorMessage}</p>
                    <button className='bg-[#874747] hover:cursor-pointer w-fit mx-auto px-[5%] py-[2%] border-[#562F2F] border-2 rounded-xl hover:bg-[#562F2F] hover:border-[#874747] hover:text-hover-white transition-all' onClick={() => setShowMessage(null)}>Close Message</button>
                </div>
            </div>


            <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
                <div className='flex flex-col justify-center items-center py-[3%]'>
                    <h1 className="font-['Jost'] text-[clamp(24px,3.5vw,48px)]">so... you found a bug eh?</h1>
                    <h2 className="font-['Jost'] text-[clamp(18px,3vw,30px)]">well, let's report it!</h2>
                    <Link to="/" className='mt-[16px] text-blue-400 underline hover:cursor-pointer'>return to site</Link>
                
                    <form className='flex flex-col w-[80%] max-w-[720px] overflow-auto mt-[5%] sm:mt-[2%]' onSubmit={handleSubmit}>
                        <h3>Bug Report Title</h3>
                        <input className='base-input' placeholder='Bug Title' required name='title'/>

                        <h3>Bug Description</h3>
                        <textarea className='base-input resize-none' placeholder='What Happened?' required name='description'/>

                        <h3>Expected Output</h3>
                        <textarea className='base-input resize-none' placeholder='What Should Happen?' required name='expectedOutput'/>

                        <h3>Steps to Reproduce the Bug</h3>
                        <textarea className='base-input resize-none' placeholder='How to Reproduce?' required name='stepsToReproduce'/>

                        <h3>Video or Screenshot Evidence (Optional!)</h3>
                        <input className='base-input' placeholder='Video/Screenshot URL' name='evidenceUrl'/>

                        <h3>Additional Information (Optional!)</h3>
                        <textarea className='base-input resize-none' placeholder='Additional Information' name='additionalInfo'/>

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
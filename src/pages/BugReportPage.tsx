


function BugReportPage(){
    return(
        <>
            <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
                <div className='flex flex-col justify-center items-center py-[3%]'>
                    <h1 className="font-['Jost'] text-[clamp(24px,3.5vw,48px)]">so... you found a bug eh?</h1>
                    <h2 className="font-['Jost'] text-[clamp(18px,3vw,30px)]">well, let's report it!</h2>
                    <h4 className='mt-[16px] text-blue-400 underline hover:cursor-pointer'>return to site</h4>

                    <form className='flex flex-col w-[80%] max-w-[720px] overflow-auto mt-[5%] sm:mt-[2%]'>
                        <h3>Bug Report Title</h3>
                        <input className='base-input' placeholder='Bug Title' required/>

                        <h3>Bug Description</h3>
                        <textarea className='base-input' placeholder='What Happened?' required/>

                        <h3>Expected Output</h3>
                        <textarea className='base-input' placeholder='What Should Happen?' required/>

                        <h3>Steps to Reproduce the Bug</h3>
                        <textarea className='base-input' placeholder='How to Reproduce?' required/>

                        <h3>Video or Screenshot Evidence (Optional!)</h3>
                        <input className='base-input' placeholder='Video/Screenshot URL'/>

                        <h3>Additional Information (Optional!)</h3>
                        <textarea className='base-input' placeholder='Additional Information'/>

                        <h3>Email (Optional!)</h3>
                        <input className='base-input' placeholder='Email'/>

                        <button className='bg-primary-blue hover:cursor-pointer w-fit mx-auto px-[3%] py-[0.5%] border-secondary-blue border-2 rounded-xl hover:bg-secondary-blue hover:border-primary-blue hover:text-hover-white transition-all'>Submit Report</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BugReportPage
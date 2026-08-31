


function BugReportPage(){
    return(
        <>
            <div className='w-full h-full flex flex-col items-center my-[3%]'>
                <h1 className="font-['Jost'] text-[clamp(24px,3.5vw,48px)]">so... you found a bug eh?</h1>
                <h2 className="font-['Jost'] text-[clamp(18px,3vw,30px)]">well, let's report it!</h2>

                <form className='flex flex-col w-[80%] max-w-[720px] overflow-auto'>
                    <h3>Bug Report Title</h3>
                    <input className='base-input' placeholder='Bug Title'/>

                    <h3>Bug Description</h3>
                    <textarea className='base-input' placeholder='What Happened?'/>

                    <h3>Expected Output</h3>
                    <textarea className='base-input' placeholder='What Should Happen?'/>

                    <h3>Steps to Reproduce the Bug</h3>
                    <textarea className='base-input' placeholder='How to Reproduce?'/>

                    <h3>Video or Screenshot Evidence</h3>
                    <input className='base-input' placeholder='Video/Screenshot URL'/>

                    <h3>Additional Information</h3>
                    <textarea className='base-input' placeholder='Additional Information'/>

                    <h3>Email (Optional!)</h3>
                    <input className='base-input' placeholder='Email'/>
                    <button className='bg-primary-blue hover:cursor-pointer'>Submit Report</button>
                </form>
            </div>
        </>
    )
}

export default BugReportPage
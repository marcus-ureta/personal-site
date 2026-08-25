
import tab_icon from '@icons/tab/contact.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"
import './Contact.css'

function Contact() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'contact'
    }

    const tabDetails : TabDetails = {
        width: 44,
        height: 51,
        leftPos: 20,
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <TabTemplate thisTab={Tabs.Contact} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <div className='mx-[20px] sm:mx-[5%] mt-[2.5%]'>
                    <h1 className='text-secondary-blue text-[clamp(40px,3.5vw,60px)] leading-normal'>want to get in touch?</h1>
                    <h2 className="font-['Arial'] text-secondary-blue text-[clamp(24px,2.5vw,32px)] wrap-break-word">work email: <span className="font-bold">marcustimothy.ureta@gmail.com</span></h2>

                    <form onSubmit={onSubmit} className='flex flex-col bg-[#F3FAFF] border-secondary-blue border-2 mt-[3%] w-full mb-[2%]'>
                        <div className='flex flex-col gap-y-2 md:flex-row md:ml-[2%] mt-[2%]'>
                            <div className='flex flex-col gap-y-2 flex-1'>
                                <input className='contact-input' placeholder='your name' name='name'/>
                                <input className='contact-input' placeholder='your email' name='email'/>
                                <input className='contact-input' placeholder='email subject' name='e_subject'/>
                            </div>

                            <input className='contact-input flex-1' placeholder='email details' name='e_details'/>
                        </div>

                        <div className='flex flex-col md:flex-row gap-y-2 justify-between mx-[3%] my-[2%] items-center'>
                            <button type='submit' className="bg-[#567C8D] border-2 border-[#C8D9E6] text-white font-bold font-['Jost'] py-2 px-3 tracking-wider rounded-[16px] hover:bg-[#C8D9E6] hover:border-white hover:text-[#567C8D] transition-all mr-[3%]">Submit Message</button>
                            <h3 className="font-['Jost'] text-secondary-blue text-[clamp(16px,2.5vw,26px)] italic select-none text-center">expect a response within 2-3 business days!</h3>
                        </div>
                    </form>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Contact
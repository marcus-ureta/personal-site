
import { useShowPopup } from '@/features/desktop/popupManager/popupUtils'
import { PopupTabs } from '@/features/desktop/popupManager/popupManager'

import tab_icon from '@icons/tab/contact.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"
import './Contact.css'
import { useState } from 'react'

function Contact() {

    const [isEmailReq, setEmailReq] = useState<boolean | null>(null);
    const showPopUp = useShowPopup();

    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'contact'
    }

    const tabDetails : TabDetails = {
        width: 44,
        height: 51,
        leftPos: 20,
    }

    async function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
        setEmailReq(true);
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                subject: formData.get("e_subject"),
                message: formData.get("e_details"),
                phone: formData.get("phone"),
            }),
        });

        setEmailReq(null);

        if (response.ok) {
            showPopUp(PopupTabs.Success);
            console.log('Went ok!');
            form.reset();
        } else {
            showPopUp(PopupTabs.Failure);
            console.log('Something went wrong!');
        }
    }

    return(
        <TabTemplate thisTab={Tabs.Contact} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <div className={`${isEmailReq !== null ? '' : 'hidden'} absolute inset-0 bg-gray-500/50 h-[100%] w-[100%] grid place-items-center`}>
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"/>
                </div>

                <div className='mx-[20px] sm:mx-[5%] mt-[2.5%]'>
                    <h1 className='text-secondary-blue text-[clamp(40px,3.5vw,60px)] leading-normal'>want to get in touch?</h1>
                    <h2 className="font-['Arial'] text-secondary-blue text-[clamp(24px,2.5vw,32px)] wrap-break-word">work email: <span className="font-bold hover:text-accent-teal hover:[-webkit-text-stroke:0.25px_#2F4156] transition-all duration-200">
                        <a href="mailto:marcustimothy.ureta@gmail.com">marcustimothy.ureta@gmail.com</a>
                    </span></h2>

                    <form onSubmit={handleSubmit} className='flex flex-col bg-[#F3FAFF] border-secondary-blue border-2 mt-[3%] w-full mb-[2%]'>
                        <div className='flex flex-col gap-y-2 md:flex-row md:ml-[2%] mt-[2%]'>
                            <div className='flex flex-col gap-y-2 flex-1'>
                                <input className='contact-input' placeholder='your name' name='name' required/>
                                <input type='email' className='contact-input' placeholder='your email' name='email' required/>
                                <input className='contact-input' placeholder='email subject' name='e_subject' required/>
                                <input className='contact-input absolute left-[-9999px] -z-10' placeholder='your number' name='phone' aria-hidden="true"/>
                            </div>

                            <textarea className='contact-input flex-1 min-h-[180px] sm:min-h-[120px] resize-none' placeholder='email details' name='e_details' required/>
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

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
        height: 50,
        leftPos: 20,
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <TabTemplate thisTab={Tabs.Contact} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <h1>want to get in touch?</h1>
                <h2 className="font-['Arial']">work email: <span className="font-bold">marcustimothy.ureta@gmail.com</span></h2>
                <div>
                    <form onSubmit={onSubmit}>
                        <input className='contact-input' placeholder='your name' name='name'/>
                        <input className='contact-input' placeholder='your email' name='email'/>
                        <input className='contact-input' placeholder='email subject' name='e_subject'/>
                        <input className='contact-input' placeholder='email details' name='e_details'/>
                        <button type='submit'>Submit Message</button>
                    </form>
                </div>
                <h3>expect a response within 2-3 business days!</h3>
            </div>
        </TabTemplate>
    )
}

export default Contact
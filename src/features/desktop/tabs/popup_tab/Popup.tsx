
import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import failure from '@/assets/popup-images/failure.webp'
import success from '@/assets/popup-images/success.webp'
import warning from '@/assets/popup-images/warning.webp'

import "@/features/desktop/Desktop.css"
import './Popup.css'

import { usePopupManager } from '../../popupManager/popupManagerContext'
import { PopupTabs, State } from '../../popupManager/popupManager'

function WarningPopup() {
    console.log('Failure!');

    return(
        <>
            <img className="w-[150px] h-auto object-contain" src={warning}/>
            <h1 className="heading">be responsible!</h1>
            <p className="detail-text">messages are automatically reviewed before submission. i trust you but please play nice! c:</p>
        </>
    )
}

function FailurePopup() {
    console.log('Failure!');

    return(
        <>
            <h1 className="heading">failed to send email :c</h1>
            <img src={failure}/>
            <p className="detail-text">error message</p>
        </>
    )
}

function SuccessPopup() {
    console.log('Success!');

    return(
        <>
            <h1 className="heading">your email has been sent!</h1>
            <img src={success}/>
            <p className="detail-text">i'll reach out as soon as possible, thank you!</p>
        </>
    )
}

function Popup() {

    const { popupState } = usePopupManager();
    let activeTab = popupState.find(popup => popup.State === State.Active);


    const headerDetails : HeaderDetails = {
        icon: activeTab?.Icon!,
        name: activeTab?.Tab.toString().toLowerCase()!
    }

    const tabDetails : TabDetails = {
        width: 29,
        height: 42,
        leftPos: 20,
    }

    const successStylingTab = 'bg-[#BDEEC4] shadow-[inset_0_0_0_4px_#678D56,0_15px_20px_-9px_rgba(0,0,0,0.5)]';
    const successStylingHeader = 'bg-[#37562F] hover:bg-[#548548] border-none';

    return(
        <TabTemplate thisTab={Tabs.Popup} headerDetails={headerDetails} tabDetails={tabDetails} 
        cssStyling={successStylingTab}
        headerStyling={successStylingHeader}>
            <div className="tab-scrollable">
                <div className='flex flex-col justify-center items-center mx-[5%] my-[3%] '>
                    {activeTab?.Tab === PopupTabs.Success ? <SuccessPopup/> : ''}
                    {activeTab?.Tab === PopupTabs.Warning ? <WarningPopup/> : ''}
                    {activeTab?.Tab === PopupTabs.Failure ? <FailurePopup/> : ''}
                </div>
            </div>
        </TabTemplate>
    )
}

export default Popup
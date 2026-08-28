
import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"
import { usePopupManager } from '../../popupManager/popupManagerContext'
import { PopupTabs, State } from '../../popupManager/popupManager'

function WarningPopup() {
    console.log('Failure!');

    return(
        <>
            <h1>be responsible!</h1>
            <p>messages are automatically reviewed before submission. i trust you but please play nice! c:</p>
        </>
    )
}

function FailurePopup() {
    console.log('Failure!');

    return(
        <h1>This is a failure!</h1>
    )
}

function SuccessPopup() {
    console.log('Success!');

    return(
        <>
            <h1>your email has been sent!</h1>
            <p>i'll reach out as soon as possible, thank you!</p>
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
        height: 39,
        leftPos: 20,
    }

    return(
        <TabTemplate thisTab={Tabs.Popup} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                {activeTab?.Tab === PopupTabs.Success ? <SuccessPopup/> : ''}
                {activeTab?.Tab === PopupTabs.Warning ? <WarningPopup/> : ''}
                {activeTab?.Tab === PopupTabs.Failure ? <FailurePopup/> : ''}
            </div>
        </TabTemplate>
    )
}

export default Popup
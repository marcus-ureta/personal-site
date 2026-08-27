
import tab_icon from '@icons/tab/social.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"
import { usePopupManager } from '../../popupManager/popupManagerContext'
import { PopupTabs, State } from '../../popupManager/popupManager'

function WarningPopup() {
    console.log('Failure!');

    return(
        <h1>This is a warning!</h1>
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
        <h1>This is a success!</h1>
    )
}

function Popup() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'popup name'
    }

    const tabDetails : TabDetails = {
        width: 29,
        height: 39,
        leftPos: 20,
    }

    const { popupState } = usePopupManager();


    let activeTab = popupState.find(popup => popup.State === State.Active);

    return(
        <TabTemplate thisTab={Tabs.Popup} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <h1>header shit</h1>
                <p>booyah</p>

                {activeTab?.Tab === PopupTabs.Success ? <SuccessPopup/> : ''}
                {activeTab?.Tab === PopupTabs.Warning ? <WarningPopup/> : ''}
                {activeTab?.Tab === PopupTabs.Failure ? <FailurePopup/> : ''}
            </div>
        </TabTemplate>
    )
}

export default Popup
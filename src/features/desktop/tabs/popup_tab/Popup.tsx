
import tab_icon from '@icons/tab/social.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"

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

    return(
        <TabTemplate thisTab={Tabs.Popup} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <h1>header shit</h1>
                <p>booyah</p>
            </div>
        </TabTemplate>
    )
}

export default Popup
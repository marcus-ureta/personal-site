
import tab_icon from '@icons/tab/contact.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"


function Contact() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'contact'
    }

    const tabDetails : TabDetails = {
        width: 36,
        height: 50,
        leftPos: 20,
    }

    return(
        <TabTemplate thisTab={Tabs.Contact} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <h1>penis</h1>
            </div>
        </TabTemplate>
    )
}

export default Contact
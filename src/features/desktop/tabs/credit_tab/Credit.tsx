

import tab_icon from '@icons/tab/credit.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"


function Credit() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'credit'
    }

    const tabDetails : TabDetails = {
        width: 43,
        height: 53,
        leftPos: 8,
    }

    return(
        <TabTemplate thisTab={Tabs.Credit} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <h1>hey</h1>
            </div>
        </TabTemplate>
    )
}

export default Credit
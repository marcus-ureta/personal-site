
import icon from '@icons/tab/social.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"


function Social() {
    const headerDetails : HeaderDetails = {
        icon: icon,
        name: 'social'
    }

    const tabDetails : TabDetails = {
        width: 36,
        height: 50,
        leftPos: 20,
    }

    return(
        <TabTemplate thisTab={Tabs.Social} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <p>cum</p>
            </div>
        </TabTemplate>
    )
}

export default Social
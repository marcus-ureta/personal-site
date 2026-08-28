
import tab_icon from '@icons/tab/board.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"


function Board() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'social'
    }

    const tabDetails : TabDetails = {
        width: 36,
        height: 50,
        leftPos: 20,
    }

    return(
        <TabTemplate thisTab={Tabs.Board} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <h1>hey</h1>
            </div>
        </TabTemplate>
    )
}

export default Board
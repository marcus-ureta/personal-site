
import tab_icon from '@icons/tab/board.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"
import './Board.css'


function Board() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'board'
    }

    const tabDetails : TabDetails = {
        width: 62,
        height: 65,
        leftPos: 10,
        topPos: 20
    }

    return(
        <TabTemplate thisTab={Tabs.Board} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <div className="my-[3%] mx-[5%]">
                    <div className="flex flex-col bg-container-blue px-[2%] py-[2%] place-items-start gap-y-2 border-2 border-secondary-blue">
                        <h3 className="font-['Jost'] font-bold text-secondary-blue text-[clamp(14px,2vw,22px)]">name:</h3>
                        <input className="input-styling input-boxes" placeholder='your name'/>
                        <h3 className="font-['Jost'] font-bold text-secondary-blue text-[clamp(14px,2vw,22px)]">message:</h3>
                        <textarea className="input-styling input-boxes resize-none" placeholder='your message'/>
                        <button className="input-styling px-[1.5%] mt-[1.5%] rounded-[5px] font-['Arial'] font-bold text-secondary-blue">
                            send!
                        </button>
                    </div>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Board
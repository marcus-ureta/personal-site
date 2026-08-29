
import tab_icon from '@icons/tab/board.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'
import { writeBoardMessage } from '@/services/board'

import "@/features/desktop/Desktop.css"
import './Board.css'

const tryBoardMessage = await writeBoardMessage('test', 'my message');

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
                        <input className="input-styling input-boxes" placeholder='your name' name='name'/>

                        <h3 className="font-['Jost'] font-bold text-secondary-blue text-[clamp(14px,2vw,22px)]">message:</h3>
                        <textarea className="input-styling input-boxes resize-none" placeholder='your message' name='message'/>

                        <button onClick={() => tryBoardMessage} className="input-styling px-[1.5%] mt-[1.5%] rounded-[5px] font-['Arial'] font-bold text-secondary-blue hover:bg-secondary-blue/15 hover:text-accent-teal transition-all">
                            send!
                        </button>
                    </div>
                </div>

                <div className='mx-[5%] bg-container-blue flex flex-col py-[12px] border-2 border-secondary-blue'>
                    <div className='flex flex-row justify-between mb-[8px] mx-[0.5%]'>
                        <h2 className="font-bold font-['Jost'] text-[clamp(8px,1.5vw,18px)] text-secondary-blue">~signed guestbook name</h2>
                        <h4 className="mr-[1.5%] font-['Jost'] text-[clamp(8px,1.5vw,18px)] text-secondary-blue">TIME OF DATE SUBMITTED</h4>
                    </div>

                    <p className="mx-[1.5%] font-['Arial'] text-secondary-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas ipsum dolor, ut semper nulla eleifend ac. Morbi quis odio est. Suspendisse rutrum scelerisque justo. Sed vel nisi id elit suscipit porttitor in quis ante. Etiam bibendum vitae quam sagittis laoreet.</p>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Board
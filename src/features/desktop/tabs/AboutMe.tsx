
import icon from '@icons/tab/about.svg'
import TabHeader from "../TabHeader"
import {getTabContainerStyle, getTabStyle} from '../tabUtils'
import "../Desktop.css"

import { useRef } from 'react';
import Draggable from 'react-draggable'

function AboutMe() {
    const nodeRef = useRef(null);
    return(
        <>
            {/* GRAY BACKGROUND FOR MOBILE */}
            <div className='block sm:hidden fixed w-screen h-screen bg-[#525252]/40 top-0'/>

            <Draggable handle=".handle-bar" nodeRef={nodeRef} allowAnyClick={false}>
                <div className={`w-screen h-[60vh] sm:w-[58vw] ${getTabStyle()} z-1 overflow-x-hidden`} ref={nodeRef}>
                    <TabHeader icon={icon} name='about' isDraggable={true}/>
                    <p>penis</p>
                </div>
            </Draggable>
        </>
    )
}

export default AboutMe
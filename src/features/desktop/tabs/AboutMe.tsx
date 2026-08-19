
import icon from '@icons/tab/about.svg'
import TabHeader from "../TabHeader"
import {getTabContainerStyle, getTabStyle} from '../tabUtils'
import "../Desktop.css"

import { useRef } from 'react';
import Draggable from 'react-draggable'

function AboutMe() {
    const nodeRef = useRef(null);

    return(
            <div className={`${getTabContainerStyle()}`}>
                <Draggable handle=".handle-bar" nodeRef={nodeRef}>
                    <div className={`w-[95vw] h-auto sm:w-[60vw] ${getTabStyle()} z-3`} ref={nodeRef}>
                        <TabHeader icon={icon} name='about' isDraggable={true}/>
                        <p>penis</p>
                    </div>
                </Draggable>
            </div>
    )
}

export default AboutMe
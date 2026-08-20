
import icon from '@icons/tab/about.svg'
import TabHeader from "../TabHeader"
import {getTabStyle} from '../tabUtils'

import "./AboutMe.css"
import "../Desktop.css"

import { useRef } from 'react';
import Draggable from 'react-draggable'

function AboutMe() {
    const nodeRef = useRef(null);
    
    return(
        <>
            {/* GRAY BACKGROUND FOR MOBILE */}
            <div className='block sm:hidden fixed w-screen h-screen bg-[#525252]/40 top-0'/>

            <Draggable handle=".handle-bar" nodeRef={nodeRef} allowAnyClick={false} bounds="body">
                <div className={`w-screen h-[92vh] sm:h-[60vh] sm:w-[58vw] ${getTabStyle()} z-1 overflow-x-hidden items-start`} ref={nodeRef}>
                    <TabHeader icon={icon} name='about' isDraggable={true}/>

                    {/* GENERAL INFORMATION SECTION */}
                    <div className='mx-[4%] mt-[2%] max-w-[75%]'>
                        <h2 className="header-text">GENERAL INFORMATION</h2>
                        <p className="paragraph">hi! i’m Marcus Timothy Ureta, a computer science student currently studying at De La Salle University.  i do...</p>
                        <ul className="list-disc list-inside -space-y-0.5 paragraph">
                            <li>game development</li>
                            <li>web development</li>
                            <li>application development</li>
                        </ul>
                        <p className="paragraph">i never start a project that i don’t love. that’s my number one rule when I develop projects. if you’re ever interested in working with me, feel free to contact me through my contacts page!</p>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default AboutMe
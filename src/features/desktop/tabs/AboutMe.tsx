
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
                <div className={`w-screen h-full sm:h-[60vh] sm:w-[58vw] ${getTabStyle()} z-1 overflow-x-hidden items-start`} ref={nodeRef}>
                    <TabHeader icon={icon} name='about' isDraggable={true}/>

                    {/* GENERAL INFORMATION SECTION */}
                    <div className='section-style'>
                        <h2 className="header-text">GENERAL INFORMATION</h2>
                        <p className="paragraph">hi! i'm Marcus Timothy Ureta, a computer science student currently studying at De La Salle University.  i do...</p>
                        <ul className="list-disc list-inside -space-y-0.5 paragraph">
                            <li>game development</li>
                            <li>web development</li>
                            <li>application development</li>
                        </ul>
                        <p className="paragraph">i never start a project that i don’t love. that’s my number one rule when I develop projects. if you’re ever interested in working with me, feel free to contact me through my contacts page!</p>
                    </div>

                    {/* EDUCATION SECTION */}
                    <div className='section-style'>
                        <h2 className="header-text">EDUCATION</h2>
                        
                        <div className="border-l-4 border-secondary-blue mb-[4%] ml-1 mt-[1.5%]">
                            <h3 className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue font-bold ml-5">De La Salle University - Manila</h3>
                            <p className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue ml-5">Computer Science - Software Technology (2026-2030)</p>
                        </div>

                        <div className="border-l-4 border-secondary-blue ml-1">
                            <h3 className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue font-bold ml-5">CIIT Senior High School Inc.</h3>
                            <p className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue ml-5">TVL-ICT Strand (2024-2026 - Consistent Honors with Awards)</p>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default AboutMe
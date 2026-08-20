
import icon from '@icons/tab/about.svg'
import TabHeader from "../TabHeader"
import {getTabStyle} from '../tabUtils'

import "./AboutMe.css"
import "../Desktop.css"

import { useRef } from 'react';
import Draggable from 'react-draggable'

import dlsu from '@/assets/dlsu.webp'
import ciit from '@/assets/ciit.webp'

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
                        
                        <div className="border-l-4 border-secondary-blue mb-[4%] ml-1 mt-[1.5%] group hover:bg-[#087830]/75 w-full pr-5 transition-colors hover:border-[#065d24] flex justify-between gap-x-10">
                            <div className="flex flex-col">
                                <h3 className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue font-bold ml-5 group-hover:text-hover-white">De La Salle University - Manila</h3>

                                <p className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue ml-5 group-hover:text-[#e4e2e2]">Computer Science - Software Technology (2026-2030)</p>
                            </div>

                            <div className="relative z-10 aspect-square h-auto w-[64px]">
                                <img src={dlsu} className="ml-auto h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline"/>
                            </div>
                        </div>

                        <div className="border-l-4 border-secondary-blue mb-[4%] ml-1 mt-[1.5%] group hover:bg-[#00364D]/75 w-full pr-5 transition-colors hover:border-[#47C8F5] flex justify-between gap-x-10">
                            <div className="flex flex-col">
                                <h3 className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue font-bold ml-5 group-hover:text-hover-white">CIIT Senior High School Inc.</h3>

                                <p className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue ml-5 group-hover:text-[#e4e2e2]">TVL-ICT Strand (2024-2026 - Consistent Honors with Awards)</p>
                            </div>

                            <div className="relative z-10 aspect-square h-auto w-[86px]">
                                <img src={ciit} className="ml-auto h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline"/>
                            </div>
                        </div>
                    </div>

                    {/* SKILLS SECTION */}
                    <div className='section-style'>
                        <h2 className="header-text">SKILLS</h2>
                    </div>

                    {/* INTERESTS & FUN FACTS */}
                    <div className='section-style'>
                        <h2 className="header-text">INTERESTS & FUN FACTS</h2>
                        <ul className="list-disc list-inside -space-y-0.5 paragraph my-[2%]">
                            <li>programming silly things</li>
                            <li>listening to music 🎶</li>
                            <li>the batman is the best batman film</li>
                            <li>bnd is the best peter parker spiderman film</li>
                            <li>i LOVE hollow knight and silksong</li>
                        </ul>
                        <p className="paragraph mt-[1%]">just a couple of interesting details you may want to know! c:</p>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default AboutMe
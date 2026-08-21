
import icon from '@icons/tab/about.svg'
import TabHeader from "../TabHeader"
import {getTabStyle} from '../tabUtils'
import Chip from '@/components/chip/Chip.tsx'

import "./AboutMe.css"
import "../Desktop.css"

import { useRef } from 'react';
import Draggable from 'react-draggable'

import dlsu from '@/assets/dlsu.webp'
import ciit from '@/assets/ciit.webp'

function AboutMe() {

    const goURL = (link : string) => {
        window.open(link);
    }

    const nodeRef = useRef(null);

    return(
        <>
            {/* GRAY BACKGROUND FOR MOBILE */}
            <div className='block sm:hidden fixed w-screen h-screen bg-[#525252]/40 top-0'/>

            <Draggable handle=".handle-bar" nodeRef={nodeRef} allowAnyClick={false} bounds="body">
                <div className={`flex flex-col w-screen sm:w-[58vw] h-[100dvh] sm:h-[60vh] ${getTabStyle()} overflow-hidden z-3 left-[10%]`} ref={nodeRef}>
                    <TabHeader icon={icon} name='about' isDraggable={true}/>


                    {/* SCROLLABLE CONTENT */}
                    <div className="tab-scrollable">
                        
                        {/* GENERAL INFORMATION SECTION */}
                        <div className='section-style'>
                            <h2 className="header-text">GENERAL INFORMATION</h2>
                            <p className="paragraph">hi! i'm Marcus Timothy Ureta, a computer science student currently studying at <span className="text-[#087830] font-semibold">De La Salle University</span>.  i do...</p>
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

                                    <p className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue ml-5 group-hover:text-[#e4e2e2]">TVL-ICT Strand (2024-2026 : Consistent Honors with Awards)</p>
                                </div>

                                <div className="relative z-10 aspect-square h-auto w-[86px]">
                                    <img src={ciit} className="ml-auto h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline"/>
                                </div>
                            </div>
                        </div>

                        {/* SKILLS SECTION */}
                        <div className='section-style'>
                            <h2 className="header-text">SKILLS</h2>
                            
                            <h3 className="skills-header">Programming Languages:</h3>
                            <div className="flex flex-wrap gap-5 w-[90%] mb-[7%] sm:mb-[3.5%]">
                                <Chip text='C#' onClick={() => goURL("https://dotnet.microsoft.com/en-us/languages/csharp")}/>
                                <Chip text='C++' onClick={() => goURL("https://isocpp.org/")}/>
                                <Chip text='Javascript' onClick={() => goURL("https://www.w3schools.com/js/")}/>
                                <Chip text='QML' onClick={() => goURL("https://doc.qt.io/qt-6/qmlreference.html")}/>
                                <Chip text='HTML' onClick={() => goURL("https://www.w3schools.com/html/")}/>
                                <Chip text='CSS' onClick={() => goURL("https://www.w3schools.com/css/")}/>
                                <Chip text='TypeScript' onClick={() => goURL("https://www.typescriptlang.org/")}/>
                                <Chip text='PHP' onClick={() => goURL("https://www.php.net/")}/>
                                <Chip text='SQL' onClick={() => goURL("https://www.mysql.com/")}/>
                                <Chip text='Tailwind' onClick={() => goURL("https://tailwindcss.com/")}/>
                            </div>

                            <h3 className="skills-header">Development Tools:</h3>
                            <div className="flex flex-wrap gap-5 w-[90%] mb-[7%] sm:mb-[3.5%]">
                                <Chip text='Unity' onClick={() => goURL("https://unity.com/")}/>
                                <Chip text='Qt' onClick={() => goURL("https://www.qt.io/")}/>
                                <Chip text='React' onClick={() => goURL("https://react.dev/")}/>
                                <Chip text='Firebase' onClick={() => goURL("https://firebase.google.com/")}/>
                                <Chip text='WinForm' onClick={() => goURL("https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/")}/>
                                <Chip text='WPF' onClick={() => goURL("https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/")}/>
                                <Chip text='Visual Studio' onClick={() => goURL("https://visualstudio.microsoft.com/")}/>
                                <Chip text='GitHub' onClick={() => goURL("https://github.com/")}/>
                                <Chip text='Arduino IDE' onClick={() => goURL("https://docs.arduino.cc/software/ide/")}/>
                                <Chip text='NodeJS' onClick={() => goURL("https://nodejs.org/en")}/>
                            </div>

                            <h3 className="skills-header">Creative Tools:</h3>
                            <div className="flex flex-wrap gap-5 w-[90%] mb-[7%] sm:mb-[3.5%]">
                                <Chip text='Figma' onClick={() => goURL("https://figma.com/")}/>
                                <Chip text='Milanote' onClick={() => goURL("https://milanote.com/")}/>
                                <Chip text='Trello' onClick={() => goURL("https://trello.com/")}/>
                                <Chip text='Canva' onClick={() => goURL("https://www.canva.com/")}/>
                                <Chip text='Lucidchart' onClick={() => goURL("https://lucid.co/lucidchart")}/>
                            </div>
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
                </div>
            </Draggable>
        </>
    )
}

export default AboutMe
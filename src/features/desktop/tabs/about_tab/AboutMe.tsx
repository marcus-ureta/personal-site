
import icon from '@icons/tab/about.svg'
import Chip from '@/components/chip/Chip.tsx'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'
import { goURL } from '@/utils/webUtils'

import "./AboutMe.css"
import "@/features/desktop/Desktop.css"

import dlsu from '@/assets/tab-specific/about/dlsu.webp'
import ciit from '@/assets/tab-specific/about/ciit.webp'

import { useState } from 'react';


function AboutMe() {
    enum BackgroundTheme {
        Batman,
        HollowKnight,
    }

    const [activeTheme, setTheme] = useState<BackgroundTheme | null>(null);
    const [showBackground, setShowBackground] = useState(false);

    const handleMouseEnter = (theme : BackgroundTheme) => {
        setTheme(theme);
        setShowBackground(true);
    };

    const handleMouseLeave = () => {
        setTheme(null);
    };

    const handleAnimationEnd = () => {
        if (activeTheme === null) {
            setShowBackground(false);
        }
    };

    const ThemeBackground = ({ theme } : {theme : BackgroundTheme}) => {
        switch (theme) {
            case BackgroundTheme.Batman:
                return <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXB2YmRnNTczaXN1ZTFuaWVuYjUwdHM2cWV3Zm41dWF5d2lyNTRhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3T4oJvjGDuaX6exxMA/giphy.gif' width='100%' height='100%' className='object-cover'/>;

            case BackgroundTheme.HollowKnight:
                return <img src='https://media1.tenor.com/m/krjbCFr5U_QAAAAC/hollow-knight.gif' width='100%' height='100%' className='object-cover'/>;

            default:
                return null;
        }
    };


    const headerDetails : HeaderDetails = {
        icon: icon,
        name: 'about'
    }

    const tabDetails : TabDetails = {
        width: 58,
        height: 60,
        leftPos: 10,
    }

    return(
        <TabTemplate thisTab={Tabs.About} headerDetails={headerDetails} tabDetails={tabDetails} headerStyling={`${showBackground ? 'opacity-50' : ''}`}>
            <div className={`tab-scrollable ${activeTheme === BackgroundTheme.Batman ? 'batman-theme' : activeTheme === BackgroundTheme.HollowKnight ? 'hollow-knight-theme' : ''}`}>
                {/* FUN SECTION */}
                {showBackground && (
                    <div onAnimationEnd={handleAnimationEnd} 
                    className={`${activeTheme !== null ? 'animate-fade-in-tab' : 'animate-fade-out-tab'} fixed bg-gray-500/50 left-0 h-full w-[100%] top-0 z-[-1] transition-all duration-200`}>
                        <ThemeBackground theme={activeTheme!} />
                    </div>
                )}


                {/* GENERAL INFORMATION SECTION */}

                <div className='section-style'>
                    <h2 className="header-text">GENERAL INFORMATION</h2>
                    <p className="paragraph">hi! i'm Marcus Timothy Ureta, a computer science student currently studying at {" "}
                        <span className="text-[#087830] font-semibold transition-all duration-300 hover:bg-linear-to-br hover:from-[#33A65B] hover:to-[#7CB35F] hover:bg-clip-text hover:text-transparent">De La Salle University</span>.  
                    i do...</p>
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
                            <img src={dlsu} className="ml-auto h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" loading="lazy"/>
                        </div>
                    </div>

                    <div className="border-l-4 border-secondary-blue mb-[4%] ml-1 mt-[1.5%] group hover:bg-[#00364D]/75 w-full pr-5 transition-colors hover:border-[#47C8F5] flex justify-between gap-x-10">
                        <div className="flex flex-col">
                            <h3 className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue font-bold ml-5 group-hover:text-hover-white">CIIT Senior High School Inc.</h3>

                            <p className="font-['Arial'] text-[clamp(20px,5vw,28px)] text-secondary-blue ml-5 group-hover:text-[#e4e2e2]">TVL-ICT Strand (2024-2026 : Consistent Honors with Awards)</p>
                        </div>

                        <div className="relative z-10 aspect-square h-auto w-[86px]">
                            <img src={ciit} className="ml-auto h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" loading="lazy"/>
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
                    <h2 className='header-text'>INTERESTS & FUN FACTS</h2>
                    <ul className='list-disc list-inside -space-y-0.5 paragraph my-[2%] transition-all duration-500'>
                        <li className='w-fit'>programming silly things</li>
                        <li className='w-fit'>listening to music 🎶</li>
                        <li className='w-fit' onMouseEnter={() => handleMouseEnter(BackgroundTheme.Batman)} onMouseLeave={handleMouseLeave}>
                            the batman (2022) is the best batman film
                        </li>
                        <li className='w-fit'>bnd is the best peter parker spiderman film</li>
                        <li className='w-fit' onMouseEnter={() => handleMouseEnter(BackgroundTheme.HollowKnight)} onMouseLeave={handleMouseLeave}>
                            i LOVE hollow knight and silksong
                        </li>
                    </ul>
                    <p className='paragraph mt-[1%]'>just a couple of interesting details you may want to know! c:</p>
                </div>
            </div>
        </TabTemplate>
    )
}

export default AboutMe
import pfp from '@/assets/tab-specific/home/pfp.webp'

import icon from '@icons/tab/home.svg'

import TabHeader from "../TabHeader"
import {getTabStyle, useUpdatePage} from '../../tabUtils'
import { Tabs } from '@/features/desktop/tabManager/tabManager'
import {useTabManager} from '@/features/desktop/tabManager/TabManagerContext'
import { goURL } from '@/utils/webUtils'

import "@/features/desktop/Desktop.css"
import './HomeTab.css'

import about_icon from '@icons/home ref/about.svg'
import socials_icon from '@icons/home ref/share.svg'
import portfolio_icon from '@icons/home ref/portfolio.svg'
import board_icon from '@icons/home ref/board.svg'
import blog_icon from '@icons/home ref/blog.svg'
import contact_icon from '@icons/home ref/contact.svg'


import { useState } from 'react';


function HomeTab(){

    // Click Animation
    const [buttonClicked, setButtonClick] = useState<number | null>(null);

    const [hoverName, setHover] = useState<boolean>(false);
    const { tabState } = useTabManager();
    const updatePage = useUpdatePage();

    const homeTabIndex : number = tabState.find(tab => tab.Tab === Tabs.Home)?.zIndex!;

    return(
            <div className={`w-[95vw] h-auto sm:w-[70vw] ${getTabStyle()} top-1/2 left-1/2 -translate-x-1/2 -translate-y-[49%] sm:-translate-y-[54%] animate-fade-in-up z-[var(--tabIndex-value)]`}
                style={{
                    '--tabIndex-value': `${homeTabIndex}`
            } as React.CSSProperties}>
                    
                <TabHeader icon={icon} name='home' isDraggable={false}/>

                {/* TAB COMPONENTS */}
                <div className="sm:grid sm:grid-cols-3 mt-[2.5%] justify-between w-full h-full">
                    {/* TEXT COMPONENTS */}
                    <div className="flex flex-col col-span-2 text-center sm:text-start mx-[7%]">
                        <h1 className="text-secondary-blue text-[clamp(64px,5vw,96px)] mt-3 transition-all">welcome!</h1>
                        <h1 className="text-secondary-blue text-[clamp(64px,5vw,96px)] leading-none transition-all">i'm{" "}
                            <span className="inline-grid" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                <span className={`[grid-area:1/1] ${hoverName ? 'animate-disable-home-text' : 'animate-enable-home-text'}`} style={{ color: "#F39A5A" }}>Marcus</span>
                                <span className={`[grid-area:1/1] ${hoverName ? 'animate-enable-home-text' : 'animate-disable-home-text'}`} style={{ color: "#F39A5A" }}>Macky</span>
                            </span>
                        </h1>
                        <h2 className="text-secondary-blue text-[clamp(32px,2.5vw,40px)] italic font-['Arial'] font-[550] tracking-[-0.06em] leading-loose mt-4 hidden sm:block transition-all duration-300 hover:bg-linear-to-br hover:from-[#2F4156] hover:to-[#5e6d7e] hover:bg-clip-text hover:text-transparent hover:scale-105 hover:translate-x-[2.5%]">college student and programmer</h2>
                    </div>

                    {/* PFP IMAGE */}
                    <div className="flex justify-center sm:justify-start items-center col-span-1 mt-[3%] sm:mt-0 mb-[2.5%] sm:mb-0 mr-0 sm:mr-5">
                        <img src={pfp} className="w-32 h-auto sm:w-[clamp(320px,15%,320px)] rounded-full bg-secondary-blue/85 overflow-hidden object-fit border-accent-teal border-5 select-none translate-x-0 sm:-translate-x-2.5 transition-all duration-300 hover:border-primary-blue hover:bg-accent-teal/85 hover:shadow-lg hover:shadow-accent-teal/90" draggable={false}/>
                    </div>
                    
                    <h2 className="text-secondary-blue text-[clamp(26px,2.5vw,38px)] italic font-['Arial'] font-[550] tracking-[-0.06em] block sm:hidden text-center mx-2">college student and programmer</h2>
                </div>

                {/*  ICONS */}
                <div className="flex justify-between w-full h-full px-[5%] mt-[3%] mb-[2.5%] flex-col sm:flex-row gap-y-4">
                    <div className="grid grid-cols-3 gap-x-3 sm:w-[50%] w-full place-items-center sm:place-items-start">
                        <div className={`home-icon-styling ${buttonClicked === 0 ? 'animate-open-icon' : ''}`} onClick={() => {setButtonClick(0); updatePage(Tabs.About)}}
                        onAnimationEnd={() => setButtonClick(null)}>
                            <img src={about_icon} className="icon-style"/>
                            <p className="icon-text">about</p>
                        </div>

                        <div className="home-icon-styling" onClick={() => updatePage(Tabs.Social)}>
                            <img src={socials_icon} className="icon-style"/>
                            <p className="icon-text">socials</p>
                        </div>

                        <div className="home-icon-styling" onClick={() => goURL('https://marcusureta-portfolio.vercel.app')}>
                            <img src={portfolio_icon} className="icon-style"/>
                            <p className="icon-text">portfolio</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-x-3 gap-y-0 sm:w-[50%] w-full ml-auto place-items-center sm:place-items-end">
                        <div className="home-icon-styling">
                            <img src={board_icon} className="icon-style"/>
                            <p className="icon-text">board</p>
                        </div>

                        <div className="home-icon-styling">
                            <img src={blog_icon} className="icon-style"/>
                            <p className="icon-text">blogs</p>
                        </div>

                        <div className="home-icon-styling">
                            <img src={contact_icon} className="icon-style"/>
                            <p className="icon-text">contact</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HomeTab
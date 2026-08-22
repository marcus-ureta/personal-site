import pfp from '@/assets/pfp.webp'

import icon from '@icons/tab/home.svg'

import TabHeader from "./TabHeader"
import {getTabStyle} from './tabUtils'
import "./Desktop.css"

import about_icon from '@icons/home ref/about.svg'
import socials_icon from '@icons/home ref/share.svg'
import portfolio_icon from '@icons/home ref/portfolio.svg'
import board_icon from '@icons/home ref/board.svg'
import blog_icon from '@icons/home ref/blog.svg'
import contact_icon from '@icons/home ref/contact.svg'

import {useTabManager} from '@/features/desktop/tabManager/TabManagerContext'
import { Tabs, TabStatus} from '@/features/desktop/tabManager/tabManager'

function HomeTab(){
    const { setTabStates } = useTabManager();

    const goPortfolioPage = () => {
        window.open('https://marcusureta-portfolio.vercel.app', '_blank');
    }

    const openPage = (Tab : Tabs) => {
        setTabStates((previousTabs) => {
            return previousTabs.map((tab) => {
                if (tab.Tab === Tab) {
                    return {
                        ...tab,
                        Status: TabStatus.Open,
                    };
                }

                return tab;
            });
        })
    }

    return(
            <div className={`w-[95vw] h-auto sm:w-[70vw] ${getTabStyle()} z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] animate-fade-in-up`}>
                <TabHeader icon={icon} name='home' isDraggable={false}/>

                {/* TAB COMPONENTS */}
                <div className="sm:grid sm:grid-cols-3 mt-[2.5%] justify-between w-full h-full">
                    {/* TEXT COMPONENTS */}
                    <div className="flex flex-col col-span-2 text-center sm:text-start mx-[7%]">
                        <h1 className="text-secondary-blue text-[clamp(64px,5vw,96px)] mt-3">welcome!</h1>
                        <h1 className="text-secondary-blue text-[clamp(64px,5vw,96px)] leading-none">i'm <span style={{ color: "#F39A5A" }}>Marcus</span></h1>
                        <h2 className="text-secondary-blue text-[clamp(32px,2.5vw,40px)] italic font-['Arial'] font-[550] tracking-[-0.06em] leading-loose mt-4 hidden sm:block">college student and programmer</h2>
                    </div>

                    {/* PFP IMAGE */}
                    <div className="flex justify-center sm:justify-start items-center col-span-1 mt-[3%] sm:mt-0 mb-[2.5%] sm:mb-0 mr-0 sm:mr-5">
                        <img src={pfp} className="w-32 h-auto sm:w-[clamp(320px,15%,320px)] rounded-full bg-secondary-blue/85 overflow-hidden object-fit border-accent-teal border-5 select-none translate-x-0 sm:-translate-x-2.5" draggable={false}/>
                    </div>
                    
                    <h2 className="text-secondary-blue text-[clamp(26px,2.5vw,38px)] italic font-['Arial'] font-[550] tracking-[-0.06em] block sm:hidden text-center mx-2">college student and programmer</h2>
                </div>

                {/*  ICONS */}
                <div className="flex justify-between w-full h-full px-[5%] mt-[3%] mb-[2.5%] flex-col sm:flex-row gap-y-4">
                    <div className="grid grid-cols-3 gap-x-3 sm:w-[50%] w-full place-items-center sm:place-items-start" onClick={() => openPage(Tabs.About)}>
                        <div className="flex flex-col items-center gap-y-2 cursor-pointer w-fit group hover:-translate-y-1 transition-all">
                            <img src={about_icon} className="icon-style"/>
                            <p className="icon-text">about</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-2 cursor-pointer w-fit group hover:-translate-y-1 transition-all">
                            <img src={socials_icon} className="icon-style"/>
                            <p className="icon-text">socials</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-2 cursor-pointer w-fit group hover:-translate-y-1 transition-all" onClick={goPortfolioPage}>
                            <img src={portfolio_icon} className="icon-style"/>
                            <p className="icon-text">portfolio</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-x-3 gap-y-0 sm:w-[50%] w-full ml-auto place-items-center sm:place-items-end">
                        <div className="flex flex-col items-center gap-y-2 cursor-pointer w-fit group hover:-translate-y-1 transition-all">
                            <img src={board_icon} className="icon-style"/>
                            <p className="icon-text">board</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-2 cursor-pointer w-fit group hover:-translate-y-1 transition-all">
                            <img src={blog_icon} className="icon-style"/>
                            <p className="icon-text">blogs</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-2 cursor-pointer w-fit group hover:-translate-y-1 transition-all">
                            <img src={contact_icon} className="icon-style"/>
                            <p className="icon-text">contact</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HomeTab
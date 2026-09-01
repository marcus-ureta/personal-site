
import { useState, useEffect } from "react"
import { useUpdatePage } from '@/features/desktop/tabUtils'
import { Tabs, TabStatus } from '@/features/desktop/tabManager/tabManager'

import { Link } from 'react-router-dom'

import {useTabManager} from '@/features/desktop/tabManager/TabManagerContext'

import bug_icon from '@/assets/icons/bug/bug icon.svg'
import bug_hover from '@/assets/icons/bug/bug icon-hover.svg'

import sound_icon from '@/assets/icons/sound/sound.svg'
import sound_hover from '@/assets/icons/sound/sound-hover.svg'

import home_icon from '@/assets/icons/taskbar ref/home.svg'
import about_icon from '@/assets/icons/taskbar ref/about.svg'
import social_icon from '@/assets/icons/taskbar ref/social.svg'
import board_icon from '@/assets/icons/taskbar ref/board.svg'
import blog_icon from '@/assets/icons/taskbar ref/blog.svg'
import contact_icon from '@/assets/icons/taskbar ref/contact.svg'

import home_hover from '@/assets/icons/taskbar ref/house-hover.svg'
import about_hover from '@/assets/icons/taskbar ref/about-hover.svg'
import social_hover from '@/assets/icons/tab/social.svg'
import board_hover from '@/assets/icons/tab/board.svg'
import blog_hover from '@/assets/icons/tab/blog.svg'
import contact_hover from '@/assets/icons/tab/contact.svg'

import './Taskbar.css'
import { useSFX } from "@/utils/webUtils"


function Taskbar(){

    const { tabState } = useTabManager();

    const now: Date = new Date();

    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
    const [soundHover, setSoundHover] = useState<boolean>(false);
    const [bugHover, setBugHover] = useState<boolean>(false);

    const updatePage = useUpdatePage();
    const { playIconClick } = useSFX();

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [currentTime, setCurrentTime] = useState<Date>(now);

    return(
        <footer className="hidden sm:flex animate-fade-in-up">
            <div className="flex flex-1 ml-[1.5%] gap-x-[2%] select-none">
                <img src={hoveredIcon === 0 ? home_hover : home_icon} className="icon-styling active-window" 
                    onMouseEnter={() => setHoveredIcon(0)} onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => {updatePage(Tabs.Home); playIconClick();}} loading='eager'/>
                <img src={hoveredIcon === 1 ? about_hover : about_icon} className={`icon-styling cursor-pointer 
                    ${tabState.find(tab => tab.Tab === Tabs.About && tab.Status === TabStatus.Open) ? 'active-window' : ''}`}
                    onMouseEnter={() => setHoveredIcon(1)} onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => {updatePage(Tabs.About); playIconClick();}} loading='eager'/>
                <img src={hoveredIcon === 2 ? social_hover : social_icon} className={`icon-styling cursor-pointer
                    ${tabState.find(tab => tab.Tab === Tabs.Social && tab.Status === TabStatus.Open) ? 'active-window' : ''}`}
                    onMouseEnter={() => setHoveredIcon(2)} onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => {updatePage(Tabs.Social); playIconClick();}} loading='eager'/>
                <img src={hoveredIcon === 3 ? board_hover : board_icon} className={`icon-styling cursor-pointer
                    ${tabState.find(tab => tab.Tab === Tabs.Board && tab.Status === TabStatus.Open) ? 'active-window' : ''}`}
                    onMouseEnter={() => setHoveredIcon(3)} onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => {updatePage(Tabs.Board); playIconClick();}} loading='eager'/>
                <img src={hoveredIcon === 4 ? blog_hover : blog_icon} className={`icon-styling cursor-pointer 
                    ${tabState.find(tab => tab.Tab === Tabs.Blogs && tab.Status === TabStatus.Open) ? 'active-window' : ''}`}
                    onMouseEnter={() => setHoveredIcon(4)} onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => {updatePage(Tabs.Blogs); playIconClick();}} loading='eager'/>
                <img src={hoveredIcon === 5 ? contact_hover : contact_icon} className={`icon-styling cursor-pointer
                    ${tabState.find(tab => tab.Tab === Tabs.Contact && tab.Status === TabStatus.Open) ? 'active-window' : ''}`}
                    onMouseEnter={() => setHoveredIcon(5)} onMouseLeave={() => setHoveredIcon(null)}
                    onClick={() => {updatePage(Tabs.Contact); playIconClick();}} loading='eager'/>
            </div>
    
            <div className="flex items-center gap-4 mr-8 mx-auto sm:ml-auto min-h-18.75">
                <Link to="/bug-report">
                    <img src={bugHover ? bug_hover : bug_icon} alt="Bug Icon" onMouseEnter={() => 
                    setBugHover(true)} onMouseLeave={() => setBugHover(false)} loading='eager'/>
                </Link>
                <img src={soundHover ? sound_hover : sound_icon} alt="Sound Icon" 
                    onMouseEnter={() => setSoundHover(true)} onMouseLeave={() => setSoundHover(false)} loading='eager'/>
                <div className="flex flex-col -gap-y-1 hover:text-hover-white">
                <p className="border-b">{currentTime.toLocaleTimeString([], {
                    hour: '2-digit', minute: '2-digit'
                })}</p>
                <p className="text-sm">{currentTime.toLocaleDateString()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Taskbar
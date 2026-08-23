
import { useState, useEffect } from "react"

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

function Taskbar(){

    const now: Date = new Date();

    const [soundHover, setSoundHover] = useState<boolean>(false);
    const [bugHover, setBugHover] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [currentTime, setCurrentTime] = useState<Date>(now);

    return(
        <footer className="hidden sm:flex">
            <div className="flex-1 hidden ml-[1.5%] sm:flex gap-x-8 select-none">
                <img src={home_icon} className="w-[32px] h-auto cursor-pointer"/>
                <img src={about_icon} className="w-[32px] h-auto cursor-pointer"/>
                <img src={social_icon} className="w-[32px] h-auto cursor-pointer"/>
                <img src={board_icon} className="w-[32px] h-auto cursor-pointer"/>
                <img src={blog_icon} className="w-[32px] h-auto cursor-pointer"/>
                <img src={contact_icon} className="w-[32px] h-auto cursor-pointer"/>
            </div>
    
            <div className="flex items-center gap-4 mr-8 mx-auto sm:ml-auto min-h-18.75">
                <img src={bugHover ? bug_hover : bug_icon} alt="Bug Icon" onMouseEnter={() => 
                    setBugHover(true)} onMouseLeave={() => setBugHover(false)}/>
                <img src={soundHover ? sound_hover : sound_icon} alt="Sound Icon" 
                    onMouseEnter={() => setSoundHover(true)} onMouseLeave={() => setSoundHover(false)}/>
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
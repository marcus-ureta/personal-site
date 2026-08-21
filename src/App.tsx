import Background from './components/moving_background/Background.tsx'
import './App.css'
import { useState, useEffect } from "react"

import bug_icon from './assets/icons/bug/bug icon.svg'

import sound_icon from './assets/icons/sound/sound.svg'
import sound_hover from './assets/icons/sound/sound-hover.svg'

import HomeTab from './features/desktop/HomeTab.tsx'
import AboutMe from './features/desktop/tabs/AboutMe.tsx'

import DesktopView from './features/desktop/DesktopView.tsx'

function App() {

  const now: Date = new Date();
  const [soundHover, setSoundHover] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [currentTime, setCurrentTime] = useState<Date>(now);


  return (
    <>
      <Background/>

      <h1 className="relative font-['Arial'] mt-2 text-right mr-3 z-5 pointer-events-none">© 2026 Marcus Ureta</h1>

      <DesktopView/>

      {/* DESKTOP TASKBAR */}
      <footer className="hidden sm:flex">
        <div className="flex-1 hidden ml-4 sm:block">
          <p>[Opened Desktop Tabs]</p>
        </div>

        <div className="flex items-center gap-4 mr-8 mx-auto sm:ml-auto min-h-18.75">
          <img src={bug_icon} alt="Bug Icon"/>
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
    </>
  )
}

export default App

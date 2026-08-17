import Background from './components/moving_background/Background.tsx'
import './App.css'
import { useState, useEffect } from "react"

import bug_icon from './assets/icons/bug/bug icon.svg'
import sound_icon from './assets/icons/sound/sound.svg'

function App() {

  const now: Date = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [currentTime, setCurrentTime] = useState<Date>(now);


  return (
    <>
      <h1 className="font-['Arial'] mt-2 text-right mr-3">© 2026 Marcus Ureta</h1>


      <Background/>
      
      {/* DESKTOP TASKBAR */}
      <footer>
        <div className="flex-1 hidden ml-4 sm:block">
          <p>[Opened Desktop Tabs]</p>
        </div>

        <div className="flex items-center gap-4 mr-4 mx-auto sm:ml-auto min-h-18.75">
          <img src={bug_icon} alt="Bug Icon"/>
          <img src={sound_icon} alt="Sound Icon"/>
          <div className="flex flex-col -gap-1">
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

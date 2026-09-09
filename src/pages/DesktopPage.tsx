
import Background from '@/components/moving_background/Background.tsx'

import Crosshair from '@/assets/crosshair.svg'

import DesktopView from '@/features/desktop/DesktopView.tsx'
import { TabManagerProvider } from '@/features/desktop/tabManager/TabManagerContext.tsx'
import Taskbar from '@/features/taskbar/Taskbar.tsx'
import { useState, useEffect } from 'react'


function DesktopPage(){

    const [mouseClick, setMouseClick] = useState(false);
    const [mousePos, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseClick = (e : MouseEvent) => {
            console.log(e.clientX + ' ' + e.clientY);
            setPosition({x: e.clientX, y: e.clientY});
            setMouseClick(true);
        };
        window.addEventListener('click', handleMouseClick);

        return () => window.removeEventListener('click', handleMouseClick);
    }, []);

    return(
        <>
            <Background/>

            <h1 className="relative font-['Arial'] mt-2 text-right mr-3 z-1 pointer-events-none text-sm sm:text-[18px]">© 2026 Marcus Ureta</h1>

            <TabManagerProvider>
                <DesktopView/>
                <Taskbar/>
            </TabManagerProvider>

            <img src={Crosshair} className={`fixed scale-60 pointer-events-none ${mouseClick ? 'block' : 'hidden'} z-50`}
            style={{
                top: mousePos.y,
                left: mousePos.x,
                transform: `translate(-80%, -75%)`,
            }}/>
        </>
    )
}

export default DesktopPage
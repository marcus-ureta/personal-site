
import Background from '@/components/moving_background/Background.tsx'

import Crosshair from '@/assets/crosshair.svg'

import DesktopView from '@/features/desktop/DesktopView.tsx'
import { TabManagerProvider } from '@/features/desktop/tabManager/TabManagerContext.tsx'
import Taskbar from '@/features/taskbar/Taskbar.tsx'
import { useState, useEffect } from 'react'


function DesktopPage(){

    const [mouseClick, setMouseClick] = useState(false);
    const [mousePos, setPosition] = useState({ x: 0, y: 0 });
    const [imageRot, setImgRot] = useState(0);

    useEffect(() => {
        const handleMouseClick = (e : MouseEvent) => {
            console.log(e.clientX + ' ' + e.clientY);
            setPosition({x: e.clientX, y: e.clientY});
            setImgRot(Math.floor(Math.random() * (360 - 0 + 1) + 1));
            setMouseClick(true);
        };
        window.addEventListener('click', handleMouseClick);

        return () => window.removeEventListener('click', handleMouseClick);
    }, []);

    const handleAnimationEnd = (): void => {
        setMouseClick(false);
    };

    return(
        <>
            <Background/>

            <h1 className="relative font-['Arial'] mt-2 text-right mr-3 z-1 pointer-events-none text-sm sm:text-[18px]">© 2026 Marcus Ureta</h1>

            <TabManagerProvider>
                <DesktopView/>
                <Taskbar/>
            </TabManagerProvider>

            <img onAnimationEnd={handleAnimationEnd} src={Crosshair} className={`origin-center fixed w-[24px] h-auto pointer-events-none ${mouseClick ? 'animate-click-effect' : 'hidden'} z-50 transition-all`}
            style={{
                top: mousePos.y,
                left: mousePos.x,
                '--rotation': `${imageRot}deg`,
            } as React.CSSProperties}/>
        </>
    )
}

export default DesktopPage
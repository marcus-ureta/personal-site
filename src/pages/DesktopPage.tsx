
import Background from '@/components/moving_background/Background.tsx'

import Crosshair from '@/assets/crosshair.webp'

import DesktopView from '@/features/desktop/DesktopView.tsx'
import { TabManagerProvider } from '@/features/desktop/tabManager/TabManagerContext.tsx'
import Taskbar from '@/features/taskbar/Taskbar.tsx'
import { useState, useEffect } from 'react'

import credit_icon from '@icons/home ref/credit.svg'
import credit_hover from '@icons/tab/credit.svg'


function DesktopPage(){

    const [mouseClick, setMouseClick] = useState(false);
    const [mousePos, setPosition] = useState({ x: 0, y: 0 });
    const [imageRot, setImgRot] = useState(0);

    const [creditHover, setCreditHover] = useState(0);

    useEffect(() => {
        const handleMouseClick = (e : MouseEvent) => {
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

            <img onAnimationEnd={handleAnimationEnd} src={Crosshair} className={`origin-center fixed w-[24px] h-auto pointer-events-none ${mouseClick ? 'animate-click-effect' : 'hidden'} z-50 transition-all drop-shadow-5xl`}
            style={{
                top: mousePos.y,
                left: mousePos.x,
                '--rotation': `${imageRot}deg`,
            } as React.CSSProperties}/>

            <div className='fixed top-1 left-8 z-2 sm:block hidden w-fit h-fit'>
                <div className='flex flex-col items-center justify-center group hover:bg-accent-teal/50 cursor-pointer px-1' onMouseEnter={() => setCreditHover(1)} onMouseLeave={() => setCreditHover(0)}>
                    <img src={creditHover === 0 ? credit_icon : credit_hover} className='w-10 h-auto '/>
                    <h2 className="font-['Jost'] text-[clamp(14px,1.75vw,16px)] text-secondary-blue group-hover:text-hover-white">credits.txt</h2>
                </div>
            </div>
        </>
    )
}

export default DesktopPage
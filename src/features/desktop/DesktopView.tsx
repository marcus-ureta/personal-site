
import { useState, useEffect } from 'react';
import { PopupManagerProvider } from '@/features/desktop/popupManager/popupManagerContext.tsx';

import AboutMe from "./tabs/about_tab/AboutMe.tsx"
import HomeTab from "./tabs/home_tab/HomeTab.tsx"
import Social from "./tabs/social_tab/Social.tsx"
import Contact from "./tabs/contact_tab/Contact.tsx"
import Board from './tabs/board_tab/Board.tsx';
import Popup from './tabs/popup_tab/Popup.tsx';

import "./Desktop.css"
import { getTabContainerStyle, useResetPage } from "./tabUtils.ts"

import { useMediaQuery } from '@/utils/webUtils.ts'

function DesktopView(){

    // Screen Check
    const [screenReset, setScreenReset] = useState<boolean>(false);
    const screenCheck = useMediaQuery('(max-width: 639px)');
    const resetPage = useResetPage();

    useEffect(() => {
        if(!screenReset && screenCheck) {
            setScreenReset(true);
            resetPage();
        }

        if(screenReset && !screenCheck) {
            setScreenReset(false);
        }
    }, [screenCheck, resetPage])

    return(
        <div className={getTabContainerStyle()}>

            <PopupManagerProvider>
                <Popup/>
                <Board/>
                <Contact/>
            </PopupManagerProvider>
            
            <Social/>
            <AboutMe/>
            <HomeTab/>
        </div>
    )
}

export default DesktopView
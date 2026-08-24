
import { useState, useEffect } from 'react';

import AboutMe from "./tabs/about_tab/AboutMe.tsx"
import HomeTab from "./HomeTab.tsx"
import Social from "./tabs/social_tab/Social.tsx"

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
            <Social/>
            <AboutMe/>
            <HomeTab/>
        </div>
    )
}

export default DesktopView
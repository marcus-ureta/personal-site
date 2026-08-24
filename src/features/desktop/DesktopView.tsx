
import AboutMe from "./tabs/about_tab/AboutMe.tsx"
import HomeTab from "./HomeTab.tsx"
import Social from "./tabs/social_tab/Social.tsx"

import "./Desktop.css"
import { getTabContainerStyle } from "./tabUtils.ts"

function DesktopView(){
    
    return(
        <div className={getTabContainerStyle()}>
            <Social/>
            <AboutMe/>
            <HomeTab/>
        </div>
    )
}

export default DesktopView
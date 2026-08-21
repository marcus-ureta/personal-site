
import AboutMe from "./tabs/AboutMe.tsx"
import HomeTab from "./HomeTab.tsx"

import "./Desktop.css"
import { getTabContainerStyle } from "./tabUtils.ts"

function DesktopView(){

    return(
        <div className={getTabContainerStyle()}>
            <HomeTab/>
            <AboutMe/>
        </div>
    )
}

export default DesktopView
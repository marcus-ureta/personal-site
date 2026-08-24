
import Icon from '@/components/icon/Icon'
import tab_icon from '@icons/tab/social.svg'

import instagram from '@/assets/icons/socials/instagram.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"


function Social() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'social'
    }

    const tabDetails : TabDetails = {
        width: 36,
        height: 50,
        leftPos: 20,
    }

    return(
        <TabTemplate thisTab={Tabs.Social} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="grid grid-cols-3 gap-x-16 justify-center items-center h-full">
                <Icon name='instagram' icon={instagram}/>
                <p>cum</p>
                <p>cum</p>
                <p>cum</p>
                <p>cum</p>
                <p>cum</p>
            </div>
        </TabTemplate>
    )
}

export default Social
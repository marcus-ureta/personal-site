
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
            <div className="tab-scrollable">
                <div className="grid grid-cols-3 gap-x-16 h-full pt-[2%] min-w-0 max-w-[80%] mx-auto">
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Social

import Icon from '@/components/icon/Icon'
import tab_icon from '@icons/tab/social.svg'

import github from '@/assets/icons/socials/github.svg'
import instagram from '@/assets/icons/socials/instagram.svg'
import youtube from '@/assets/icons/socials/youtube.svg'
import linkedin from '@/assets/icons/socials/linkedin.svg'
import facebook from '@/assets/icons/socials/facebook.svg'
import discord from '@/assets/icons/socials/discord.svg'

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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 h-[95%] pt-[2%] min-w-0 max-w-[80%] mx-auto">
                    <Icon name='github' icon={github} url='https://github.com/marcus-ureta'/>
                    <Icon name='instagram' icon={instagram} url='https://www.instagram.com/marcus__uretaah/'/>
                    <Icon name='youtube' icon={youtube} url='https://www.youtube.com/@marcusssuhreta'/>
                    <Icon name='linkedin' icon={linkedin} url='https://ph.linkedin.com/in/marcus-ureta-858607382'/>
                    <Icon name='facebook' icon={facebook} url='https://www.facebook.com/macky.ureta'/>

                    {/* odd one out until i figure out what to do with you */}
                    <div className="group flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all">
                        <img src={discord} alt={'discord'} className="w-[70%] h-auto min-w-[48px] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] transition-all"/>
                        <h4 className="text-[clamp(18px,2vw+1rem,28px)] w-fit font-['Arial'] text-secondary-blue group-hover:text-accent-teal transition-colors duration-100 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">discord</h4>
                    </div>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Social
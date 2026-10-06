

import tab_icon from '@icons/tab/credit.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import { goURL } from '@/utils/webUtils'

import "@/features/desktop/Desktop.css"


function Credit() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'credit'
    }

    const tabDetails : TabDetails = {
        width: 43,
        height: 53,
        leftPos: 8,
    }

    return(
        <TabTemplate thisTab={Tabs.Credit} headerDetails={headerDetails} tabDetails={tabDetails} cssStyling='bg-[#F4F5F6]'>
            <div className="tab-scrollable">

                <div className='p-6 sm:px-10 sm:py-6'>
                    <p className='text-[clamp(16px,2vw,18px)] mb-6 '>this page is dedicated to all the supporting figures which made this project feasible in the first place.</p>


                    <div className='mb-8'>
                        <h1 className='text-[clamp(40px,3.75vw,48px)] mb-0 font-bold'>MAIN INSPIRATION:</h1>
                        <p className='text-[clamp(14px,2vw,16px)] mb-4'>This website is mainly inspired by <span className='font-bold'>sharyap’s own personal website.</span> When I first saw her video on how she made her site, I was left feeling really inspired. For the longest time, i always thought that web development was something really mundane and uninteresting.</p>

                        <p className='text-[clamp(14px,2vw,16px)] mb-4'>If you haven't yet, please check her channel out! She primarly creates animation storytime content.</p>

                        <ul className='list-disc list-inside -space-y-0.5 mb-4 marker:black'>
                            <li onClick={() => goURL('https://www.youtube.com/@shar/videos')} className='cursor-pointer text-black! hover:text-[18px] transition-all duration-150 hover:text-accent-teal! hover:font-[550] w-fit'>Shar's Youtube</li>

                            <li onClick={() => goURL('https://www.sharyap.com')} className='cursor-pointer text-black! hover:text-[18px] transition-all duration-150 hover:text-accent-teal! hover:font-[550] w-fit'>Shar's Site</li>

                            <li onClick={() => goURL('https://www.bsky.app/profile/sharyap.com')} className='cursor-pointer text-black! hover:text-[18px] transition-all duration-150 hover:text-accent-teal! hover:font-[550] w-fit'>Shar's Bluesky</li>

                            <li onClick={() => goURL('https://www.instagram.com/_yapsharlene')} className='cursor-pointer text-black! hover:text-[18px] transition-all duration-150 hover:text-accent-teal! hover:font-[550] w-fit'>Shar's Instagram</li>
                        </ul>
                    </div>

                    <div className='mb-8'>
                        <h1 className='text-[clamp(40px,3.75vw,48px)] mb-0 font-bold'>SOUND EFFECTS:</h1>
                        <p className='text-[clamp(14px,2vw,16px)] mb-4'>I got my sound effects from <span className='font-bold'>Cyberleaf Studio's SFX Package titled 'Modern UI SFX'</span>. It's not a free asset pack and you must purchase it from their itch.io page</p>

                        <p onClick={() => goURL('https://cyberleaf.itch.io/modern-ui-sfx')} className='cursor-pointer text-black hover:text-[18px] transition-all duration-150 hover:text-accent-teal hover:font-[550] w-fit'><span className='font-bold'>{'> '}</span>Modern UI SFX Package</p>
                    </div>

                    <div className='mb-8'>
                        <h1 className='text-[clamp(40px,3.75vw,48px)] mb-0 font-bold'>CREATIVE DECISIONS:</h1>
                        <p className='text-[clamp(14px,2vw,16px)] mb-4'>In terms of creative decisions, I sought out help from one of my friends, <span className='font-bold'>Arjan Jhames Manzano</span>, who helped me out with ironing key creative decisions. Without him, the site would not look as pretty as it does right now. In particular, he helped me pick out the color palette, typography, and background design. While this might not seem big on paper, he managed to save me so much time on the long-run.</p>
                    </div>
                </div>

            </div>
        </TabTemplate>
    )
}

export default Credit
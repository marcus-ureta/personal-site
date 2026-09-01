import tab_icon from '@icons/tab/blog.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"


function Blog() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'blog'
    }

    const tabDetails : TabDetails = {
        width: 36,
        height: 50,
        leftPos: 20,
    }

    return(
        <TabTemplate thisTab={Tabs.Blogs} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <div className='text-center mx-[5%] my-[8%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="font-['Jost'] text-3xl mb-[3%]">hey! sorry but this page is not available to view yet :C</h1>
                        <p className="font-['Jost'] text-xl mb-[3%]">i'll let you guys know when the blogs page is finished, thanks!</p>
                        <img src='https://i.pinimg.com/736x/be/9c/50/be9c504adfed5ea3a3ad0279a85c9dae.jpg' className='h-auto w-40' loading="lazy"/>
                    </div>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Blog
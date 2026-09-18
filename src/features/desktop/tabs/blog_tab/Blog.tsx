import tab_icon from '@icons/tab/blog.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"

import { useState } from 'react'

function BlogPost() {
    return(
        <div className='py-3 bg-container-blue border-2 border-secondary-blue my-[24px] px-4 cursor-pointer'>
            <div className='w-[75%]'>
                <h1 className="font-['Arial'] text-xl text-secondary-blue font-bold">Article Title</h1>
                <p className="font-['Arial']  mt-2">Article Description</p>

                <div className='flex flex-row gap-x-4 mt-2'>
                    <h3 className="font-['Arial'] text-sm">#1.</h3>
                    <h3 className="font-['Arial'] text-sm">AUGUST 3, 2026.</h3>

                    <h4 className="bg-[#6A848F] text-white px-3 font-['Arial'] text-sm rounded-2xl">web-dev</h4>
                </div>
            </div>

            {/* BLOG IMAGE HERE */}
        </div>
    )
}

function Blog() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'blog'
    }

    const tabDetails : TabDetails = {
        width: 48,
        height: 57,
        leftPos: 20,
    }

    const [selectedValue, setSelectedValue] = useState("");


    return(
        <TabTemplate thisTab={Tabs.Blogs} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <div className='mx-[5%] my-[6%]'>
                    <div className='flex flex-col justify-center items-start'>

                        <div className='w-[95%] sm:w-[70%]'>
                            <h1 className="font-['Jost'] text-5xl mb-[3%] text-secondary-blue font-semibold">~my diary!</h1>
                            <p className="font-['Arial] text-xl text-secondary-blue">i write posts about any topics that pique my interests. there is a total of <span className='font-bold'>X</span> blog posts currently! </p>

                            <div className='flex flex-row my-[16px] justify-between'>
                                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} className="bg-container-blue border-2 border-secondary-blue px-4 py-0.5 w-[45%]">
                                    <option value="" disabled hidden>
                                        Search by Tag
                                    </option>
                                    
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                </select>

                                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} className="bg-container-blue border-2 border-secondary-blue px-4 py-0.5 w-[45%]">
                                    <option value="" disabled hidden>
                                        Search by No.
                                    </option>
                                    
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                </select>
                            </div>

                            <input placeholder='Search by Title' className="bg-container-blue border-2 border-secondary-blue px-4 py-0.5 w-full"/>
                        </div>

                        <div className='w-[95%] border-t border-secondary-blue mt-6'>
                            {BlogPost()}
                        </div>
                    </div>
                </div>
            </div>
        </TabTemplate>
    )
}

export default Blog
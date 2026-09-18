import tab_icon from '@icons/tab/blog.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import { Tags } from '@/features/posts/blogTags'

import "@/features/desktop/Desktop.css"

import article from '@/assets/tab-specific/blog/list.svg'
import search from '@/assets/tab-specific/blog/search.svg'
import tag from '@/assets/tab-specific/blog/tag.svg'

import { useState } from 'react'
import { map } from 'firebase/firestore/pipelines'


function BlogPost() {
    return(
        <div className='bg-container-blue border-2 border-secondary-blue my-[24px] cursor-pointer flex flex-row w-full'>
            <div className='w-[75%] py-3 px-4 '>
                <h1 className="font-['Arial'] text-xl text-secondary-blue font-bold">Article Title</h1>
                <p className="font-['Arial']  mt-2">Article Description</p>

                <div className='flex flex-row gap-x-4 mt-2'>
                    <h3 className="font-['Arial'] text-sm">#1.</h3>
                    <h3 className="font-['Arial'] text-sm">AUGUST 3, 2026.</h3>

                    <h4 className="bg-[#6A848F] text-white px-3 font-['Arial'] text-sm rounded-2xl">web-dev</h4>
                </div>
            </div>

            <div className='bg-gray-400 w-[40%] rounded-tl-4xl rounded-bl-4xl'/>
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

    const [tagSelectedValue, setTagSelectedValue] = useState("");
    const [articleSelectedValue, setArticleSelectedValue] = useState("");


    return(
        <TabTemplate thisTab={Tabs.Blogs} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <div className='mx-[5%] my-[6%]'>
                    <div className='flex flex-col justify-center items-start'>

                        <div className='w-[95%] sm:w-[70%]'>
                            <h1 className="font-['Jost'] text-5xl mb-[3%] text-secondary-blue font-semibold">~my diary!</h1>
                            <p className="font-['Arial] text-xl text-secondary-blue">i write posts about any topics that pique my interests. there is a total of <span className='font-bold'>X</span> blog posts currently! </p>

                            <div className='flex flex-row my-[16px] justify-between'>

                                <div className='relative w-[45%]'>
                                    <img src={tag} className='w-5 h-auto absolute top-1/2 -translate-y-1/2 left-2'/>

                                    <select value={tagSelectedValue} onChange={(e) => setTagSelectedValue(e.target.value)} className="bg-container-blue border-2 border-secondary-blue px-8 py-0.5 w-full">
                                        <option value="" disabled hidden>
                                            Search by Tag
                                        </option>

                                        {Tags.map((tag, i) => (
                                            <option key={i} value={tag}>{tag}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='relative w-[45%]'>
                                    <img src={article} className='w-5 h-auto absolute top-1/2 -translate-y-1/2 left-2'/>

                                    <select value={articleSelectedValue} onChange={(e) => setArticleSelectedValue(e.target.value)} disabled={true} className="bg-gray-300 border-2 border-secondary-blue px-8 py-0.5 w-full">
                                        <option value="" disabled hidden>
                                            Search by No.
                                        </option>
                                        
                                        <option value="apple">Apple</option>
                                        <option value="banana">Banana</option>
                                    </select>
                                </div>
                            </div>

                            <div className='relative w-full'>
                                <img src={search} className='w-5 h-auto absolute top-1/2 -translate-y-1/2 left-2'/>

                                <input placeholder='Search by Title' className="bg-container-blue border-2 border-secondary-blue px-8 py-0.5 w-full"/>
                            </div>
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
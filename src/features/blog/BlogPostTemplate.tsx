
import tab_icon from '@icons/tab/blog.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '@/features/desktop/tabs/TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"

import { useBlogContext } from '@/features/blog/BlogContext.tsx';
import { BlogDetails } from './blogDetails';
import { useEffect } from 'react';


function BlogPostTemplate() {
    
    const { openedBlogPost } = useBlogContext();

    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: BlogDetails[openedBlogPost].title
    }

    const tabDetails : TabDetails = {
        width: 48,
        height: 57,
        leftPos: 20,
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [openedBlogPost]);

    const BlogComponent = BlogDetails[openedBlogPost].blogComponent;



    return(
        <TabTemplate thisTab={Tabs.BlogPost} headerDetails={headerDetails} tabDetails={tabDetails} cssStyling='bg-[#F4F5F6]'>
            <div className="tab-scrollable">

                <div className='mx-[5%] w-[85%] my-8'>

                    <div className='flex flex-col gap-y-4 justify-center border-b border-secondary-color px-5 py-2 mb-6'>
                        <h1 className="items-center flex flex-col text-secondary-blue font-bold text-[clamp(32px,1.5vw,64px)]">{BlogDetails[openedBlogPost].title}</h1>

                        <div className='flex justify-between'>
                            <h2 className="text-secondary-blue font-['Arial']">{BlogDetails[openedBlogPost].date}</h2>
                            <h4 className="bg-[#6A848F] text-white px-3 font-['Arial'] text-sm rounded-2xl group-hover:bg-primary-blue self-center">{BlogDetails[openedBlogPost].tag}</h4>
                        </div>
                    </div>

                    <BlogComponent/>
                </div>
            </div>
        </TabTemplate>
    )
}

export default BlogPostTemplate
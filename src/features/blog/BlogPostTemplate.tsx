
import tab_icon from '@icons/tab/blog.svg'

import {TabTemplate, type HeaderDetails, type TabDetails} from '@/features/desktop/tabs/TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'

import "@/features/desktop/Desktop.css"

import { useBlogContext } from '@/features/blog/BlogContext.tsx';
import { BlogDetails } from './blogDetails';
import { useEffect } from 'react';


function BlogPostTemplate() {
    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'blog'
    }

    const tabDetails : TabDetails = {
        width: 48,
        height: 57,
        leftPos: 20,
    }

    const { openedBlogPost } = useBlogContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [openedBlogPost]);

    const BlogComponent = BlogDetails[openedBlogPost].blogComponent;



    return(
        <TabTemplate thisTab={Tabs.BlogPost} headerDetails={headerDetails} tabDetails={tabDetails} cssStyling='bg-[#F4F5F6]'>
            <div className="tab-scrollable">
                <BlogComponent/>
            </div>
        </TabTemplate>
    )
}

export default BlogPostTemplate
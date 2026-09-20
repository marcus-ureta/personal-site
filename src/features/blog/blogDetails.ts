import { type ComponentType } from "react";
import { Tags } from "./blogTags"


import BlogPost_1 from "./posts/1-10/BlogPost_1";
import BlogPost_2 from "./posts/1-10/BlogPost_2";

export type BlogDetail = {
    title: string,
    description: string,
    date: string,
    tag: Tags,

    blogImage: string,
    blogComponent: ComponentType,
}

export const BlogDetails : BlogDetail[] = [
    {
        title: "Article Title #2",
        description: "Article Description #2",
        date: "August 3, 2026",
        tag: Tags.webDev,

        blogImage: '',
        blogComponent: BlogPost_2
    },

    {
        title: "Article Title #1",
        description: "Article Description #1",
        date: "August 3, 2026",
        tag: Tags.webDesign,

        blogImage: '',
        blogComponent: BlogPost_1
    }
]
import { type ComponentType } from "react";
import { Tags } from "./blogTags"



import BlogPost_1 from "./posts/1-10/BlogPost_1";
// import BlogPost_2 from "./posts/1-10/BlogPost_2";

export type BlogDetail = {
    title: string,
    description: string,
    date: string,
    tag: Tags,

    blogImage: string,
    blogComponent: ComponentType,
}

export const BlogDetails : BlogDetail[] = [
    // {
    //     title: "How to Code Your Personal Site 401!",
    //     description: "Article Description #2",
    //     date: "August 3, 2026",
    //     tag: Tags.webDev,

    //     blogImage: '',
    //     blogComponent: BlogPost_2
    // },

    {
        title: "The Process of Designing My Personal Site!",
        description: "Designing a website can be extremely tedious and tricky, especially if you're just starting out in web development. This blog post serves as a beginner-friendly guide to help you started with creating your own website by showing how I designed my personal site!",
        date: "August 3, 2026",
        tag: Tags.webDesign,

        blogImage: '',
        blogComponent: BlogPost_1
    }
]
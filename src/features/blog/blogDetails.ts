import { type ComponentType } from "react";
import { Tags } from "./blogTags"

import BlogPostTemplate from "./BlogPostTemplate";

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
        title: "Article Title #1",
        description: "Article Description #2",
        date: "August 3, 2026",
        tag: Tags.webDesign,

        blogImage: '',
        blogComponent: BlogPostTemplate
    },

    {
        title: "Article Title #2",
        description: "Article Description #2",
        date: "August 3, 2026",
        tag: Tags.webDev,

        blogImage: '',
        blogComponent: BlogPostTemplate
    },

    {
        title: "Article Title #3",
        description: "Article Description #2",
        date: "August 3, 2026",
        tag: Tags.gameDev,

        blogImage: '',
        blogComponent: BlogPostTemplate
    },
]
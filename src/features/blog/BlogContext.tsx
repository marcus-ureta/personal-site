import { createContext, useContext, useState, type PropsWithChildren } from "react";

type BlogContextType = {
    openedBlogPost: number;
    setOpenBlogPost: (post: number) => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

export function BlogProvider({ children }: PropsWithChildren) {
    const [openedBlogPost, setOpenBlogPost] = useState(0);

    return (
        <BlogContext.Provider value={{ openedBlogPost, setOpenBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
}

export function useBlogContext() {
    const context = useContext(BlogContext);

    if (!context) {
        throw new Error(
            "useBlogContext must be used inside SoundProvider"
        );
    }

    return context;
}

export const Tabs = {
    About: "About",
    Social: "Social",
    Board: "Board",
    Blogs: "Blogs",
    Contact: "Contact"
} as const

export type Tabs = typeof Tabs[keyof typeof Tabs];

export const TabStatus = {
    Open: "OPEN",
    Closing: "CLOSING",
    Closed: "CLOSED"
}

export type TabStatus = typeof TabStatus[keyof typeof TabStatus];


export interface TabState{
    Tab: Tabs;
    Status: TabStatus;
    zIndex: number;
}

export const InitialTabStates: TabState[] = [
    {
        Tab: Tabs.About,
        Status: TabStatus.Closed,
        zIndex: 3
    },

    {
        Tab: Tabs.Social,
        Status: TabStatus.Closed,
        zIndex: 3 
    },

    {
        Tab: Tabs.Board,
        Status: TabStatus.Closed,
        zIndex: 3 
    },

    {
        Tab: Tabs.Blogs,
        Status: TabStatus.Closed,
        zIndex: 3 
    },

    {
        Tab: Tabs.Contact,
        Status: TabStatus.Closed,
        zIndex: 3 
    },
]
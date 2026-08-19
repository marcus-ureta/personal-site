
export function getTabContainerStyle(): string{
    return [
        "flex", 
        "justify-center",
        "h-[88vh]", 
        "items-center"
    ].join(" ");
}

export function getTabStyle(): string {
    return [
        "bg-primary-blue",
        "flex",
        "flex-col",
        "justify-start",
        "items-center",
        "shadow-[inset_0_0_0_4px]",
        "shadow-accent-teal",
        "rounded-[9px]",
    ].join(" ");
}
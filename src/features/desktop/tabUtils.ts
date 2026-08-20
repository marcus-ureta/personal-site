
export function getTabContainerStyle(): string{
    return [
        "fixed",
        "inset-0",
        "flex", 
        "justify-center",
        "h-[95vh]", 
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
        "rounded-[11px]",
    ].join(" ");
}
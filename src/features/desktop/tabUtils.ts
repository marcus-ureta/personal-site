
export function getTabContainerStyle(): string{
    return [
        "justify-center",
        "h-[95vh]", 
        "relative", 
        "w-screen",
        "items-center",
        "pointer-events-none"
    ].join(" ");
}

export function getTabStyle(): string {
    return [
        "fixed",
        "bg-primary-blue",
        "flex",
        "flex-col",
        "justify-start",
        "items-center",
        "shadow-[inset_0_0_0_4px]",
        "shadow-accent-teal",
        "rounded-[11px]",
        "pointer-events-auto"
    ].join(" ");
}
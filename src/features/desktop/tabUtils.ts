
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
        "shadow-[inset_0_0_0_4px_theme(colors.accent-teal),0_15px_20px_-9px_rgba(0,0,0,0.5)]",
        "rounded-[11px]",
        "pointer-events-auto",
    ].join(" ");
}
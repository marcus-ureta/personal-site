
interface HeaderProps{
    icon: string;
    name: string;
    isDraggable?: boolean;
};

export const TabHeader = ({icon, name, isDraggable = true}: HeaderProps) => {
    
    
    return(
        <div className="flex">
            <img src={icon} className="w-[48px] h-[48px]"/>
            <h2>{name}</h2>
        </div>
    )
}

export default TabHeader
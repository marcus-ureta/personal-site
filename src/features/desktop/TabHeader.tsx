
interface HeaderProps{
    icon: string;
    name: string;
    isDraggable?: boolean;
};

export const TabHeader = ({icon, name, isDraggable = true}: HeaderProps) => {
    
    if(isDraggable) console.log('do something');
    
    return(
        <div className="flex w-full bg-secondary-blue h-fit py-2 rounded-tl-2xl rounded-tr-2xl">
            <img src={icon} className="w-[40px] h-[40px] object-cover mx-4"/>
            <h2 className="text-white">{name}</h2>
        </div>
    )
}

export default TabHeader
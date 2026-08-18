
interface HeaderProps{
    icon: string;
    name: string;
    isDraggable?: boolean;
};

export const TabHeader = ({icon, name, isDraggable = true}: HeaderProps) => {
    
    if(isDraggable) console.log('do something');
    
    return(
        <div className="flex w-full bg-secondary-blue h-fit py-3 rounded-t-[9px] items-center">
            <img src={icon} className="w-[38px] h-[38px] object-cover ml-[6.65%] sm:ml-[2.65%] mr-[1.5%]"/>
            <h2 className="text-white font-['Arial'] text-2xl translate-y-0.5">{name}</h2>
        </div>
    )
}

export default TabHeader
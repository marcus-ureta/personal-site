
interface HeaderProps{
    icon: string;
    name: string;
    isDraggable?: boolean;
};

export const TabHeader = ({icon, name, isDraggable = true}: HeaderProps) => {

    const closeTab = () => {
        console.log("tab closed!");
    }

    return(
        isDraggable ? 
            <div className="flex w-full bg-secondary-blue h-fit py-2 sm:py-3 rounded-t-[9px] items-center">
                <img src={icon} className="w-[30px] sm:w-[38px] h-auto object-cover ml-[6.65%] sm:ml-[2.65%] mr-[1.5%]"/>
                <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5">{name}</h2>
                <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5 ml-auto mr-[3%]" onClick={closeTab}>[x]</h2>
            </div>
        : 
            <div className="flex w-full bg-secondary-blue h-fit py-2 sm:py-3 rounded-t-[9px] items-center">
                <img src={icon} className="w-[30px] sm:w-[38px] h-auto object-cover ml-[6.65%] sm:ml-[2.65%] mr-[1.5%]"/>
                <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5">{name}</h2>
            </div>
    )
}

export default TabHeader
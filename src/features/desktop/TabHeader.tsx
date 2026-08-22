
import {useTabManager} from '@/features/desktop/tabManager/TabManagerContext'
import { Tabs, TabStatus} from '@/features/desktop/tabManager/tabManager'

interface HeaderProps{
    icon: string;
    name: string;
    isDraggable?: boolean;
    tab?: Tabs;
};

export const TabHeader = ({icon, name, isDraggable = true, tab}: HeaderProps) => {
    const { setTabStates } = useTabManager();
    
    const closeTab = (Tab? : Tabs) => {

        setTabStates((previousTabs) => {
            return previousTabs.map((tab) => {
                if (tab.Tab === Tab) {
                    return {
                        ...tab,
                        Status: TabStatus.Closed,
                    };
                }

                return tab;
            });
        })
    }

    return( 
        isDraggable ?
            <>
                <div className="handle-bar hidden sm:flex w-full bg-secondary-blue h-fit py-2 sm:py-3 rounded-t-[9px] items-center cursor-grab border-[#2c3d50] border-t-2 border-l-2 border-r-2">
                    <img src={icon} className="w-[30px] sm:w-[38px] h-auto object-cover ml-[6.65%] sm:ml-[2.65%] mr-[1.5%] select-none pointer-events-none"/>
                    <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5 select-none pointer-events-none">{name}</h2>
                    <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5 ml-auto mr-[3%] cursor-pointer" onClick={() => closeTab(tab)}>[x]</h2>
                </div>

                <div className="flex sm:hidden w-full bg-secondary-blue h-fit py-2 sm:py-3 rounded-t-[9px] items-center cursor-grab border-[#2c3d50] border-2">
                    <img src={icon} className="w-[30px] sm:w-[38px] h-auto object-cover ml-[6.65%] sm:ml-[2.65%] mr-[1.5%] select-none pointer-events-none"/>
                    <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5 select-none pointer-events-none">{name}</h2>
                    <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5 ml-auto mr-[3%] cursor-pointer" onClick={() => closeTab(tab)}>[x]</h2>
                </div>
            </>
        : 
            <div className="flex w-full bg-secondary-blue h-fit py-2 sm:py-3 rounded-t-[9px] items-center">
                <img src={icon} className="w-[30px] sm:w-[38px] h-auto object-cover ml-[6.65%] sm:ml-[2.65%] mr-[1.5%]"/>
                <h2 className="text-white font-['Arial'] text-xl sm:text-2xl translate-y-0.5">{name}</h2>
            </div>
    )
}

export default TabHeader
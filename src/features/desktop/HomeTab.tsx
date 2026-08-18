
import icon from '@icons/tab/home.svg'

import TabHeader from "./TabHeader"

function HomeTab(){
    return(
        <div className="flex justify-center h-[88vh] items-center">
            <div className='w-[95vw] h-[88vh] sm:w-[70vw] sm:h-[67vh] bg-primary-blue flex flex-col justify-start items-center shadow-[inset_0_0_0_4px] shadow-accent-teal rounded-[9px] z-2'>
                <TabHeader icon={icon} name='home' isDraggable={false}/>
                <h1>welcome!</h1>
                <h1>i'm Marcus</h1>
            </div>
        </div>
    )
}

export default HomeTab

import icon from '@icons/tab/home.svg'

import TabHeader from "./TabHeader"

function HomeTab(){
    return(
        <div className='w-[70vw] h-[60vh] bg-primary-blue flex flex-col justify-start items-center shadow-[inset_0_0_0_4px] shadow-accent-teal rounded-[9px]'>
            <TabHeader icon={icon} name='home' isDraggable={false}/>
            <h1>welcome!</h1>
            <h1>i'm Marcus</h1>
        </div>
    )
}

export default HomeTab
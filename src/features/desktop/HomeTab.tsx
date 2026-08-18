
import icon from '@icons/tab/home.svg'

import TabHeader from "./TabHeader"

function HomeTab(){
    return(
        <div className="flex justify-center h-[88vh] items-center">
            <div className='w-[95vw] h-[88vh] sm:w-[70vw] sm:h-[67vh] bg-primary-blue flex flex-col justify-start items-center shadow-[inset_0_0_0_4px] shadow-accent-teal rounded-[9px] z-2'>
                <TabHeader icon={icon} name='home' isDraggable={false}/>

                <div className="">

                </div>

                <h1 className="text-secondary-blue text-[92px]">welcome!</h1>
                <h1 className="text-secondary-blue text-[92px]">i'm <span style={{ color: "#F39A5A" }}>Marcus</span></h1>
                <h2 className="text-secondary-blue text-[40px] italic font-['Arial'] font-[550]">college student and programmer</h2>

                <div className="w-96 h-96 rounded-full bg-secondary-blue flex items-center justify-center text-[#2c384b] text-[3100%] font-bold overflow-hidden"><p className="translate-y-2 font-['Arial']">X</p></div>
            </div>
        </div>
    )
}

export default HomeTab
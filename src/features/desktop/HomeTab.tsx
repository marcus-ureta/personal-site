
import icon from '@icons/tab/home.svg'

import TabHeader from "./TabHeader"

function HomeTab(){
    return(
        <div className="flex justify-center h-[88vh] items-center">
            <div className='w-[95vw] h-[88vh] sm:w-[70vw] sm:h-[67vh] bg-primary-blue flex flex-col justify-start items-center shadow-[inset_0_0_0_4px] shadow-accent-teal rounded-[9px] z-2'>
                <TabHeader icon={icon} name='home' isDraggable={false}/>

                {/* TAB COMPONENTS */}
                <div className="sm:grid sm:grid-cols-3 gap-x-3 mt-[2.5%] justify-between w-full h-full">
                    <div className="flex flex-col col-span-2 text-center sm:text-start mx-[7%]">
                        <h1 className="text-secondary-blue text-[92px] mt-3">welcome!</h1>
                        <h1 className="text-secondary-blue text-[92px] leading-none">i'm <span style={{ color: "#F39A5A" }}>Marcus</span></h1>
                        <h2 className="text-secondary-blue text-[40px] italic font-['Arial'] font-[550] tracking-[-0.06em] leading-loose mt-4 hidden sm:block">college student and programmer</h2>
                    </div>

                    <div className="w-32 h-32 sm:w-88 sm:h-88 rounded-full bg-secondary-blue flex items-center justify-center text-[#2c384b] text-[3100%] font-bold overflow-hidden"><p className="translate-y-2 font-['Arial']">X</p></div>
                    <h2 className="text-secondary-blue text-[40px] italic font-['Arial'] font-[550] tracking-[-0.06em] block sm:hidden text-center">college student and programmer</h2>
                </div>

                {/*  ICONS */}
                <div className="grid grid-cols-6 gap-x-3 gap-y-0 mt-[2.5%]">
                    <p>icon 1</p>
                    <p>icon 2</p>
                    <p>icon 3</p>

                    <p>icon 4</p>
                    <p>icon 5</p>
                    <p>icon 6</p>
                </div>
            </div>
        </div>
    )
}

export default HomeTab
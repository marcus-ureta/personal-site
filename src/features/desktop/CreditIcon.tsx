
import { useState } from 'react'

import credit_icon from '@icons/home ref/credit.svg'
import credit_hover from '@icons/tab/credit.svg'
import { useUpdatePage } from '@/features/desktop/tabUtils'
import { Tabs } from '@/features/desktop/tabManager/tabManager'

function CreditIcon(){

    const [creditHover, setCreditHover] = useState(0);
    const updatePage = useUpdatePage();
    
    return(
        <div className='fixed top-1 left-8 z-2 sm:block hidden w-fit h-fit'>
            <div className='flex flex-col items-center justify-center group hover:bg-accent-teal/50 cursor-pointer px-1' onMouseEnter={() => setCreditHover(1)} onMouseLeave={() => setCreditHover(0)} onClick={() => updatePage(Tabs.Credit)}>
                <img src={creditHover === 0 ? credit_icon : credit_hover} className='w-10 h-auto '/>
                <h2 className="font-['Jost'] text-[clamp(14px,1.75vw,16px)] text-secondary-blue group-hover:text-hover-white">credits.txt</h2>
            </div>
        </div>
    )
}

export default CreditIcon

import {type PropsWithChildren} from 'react';

import { goURL } from "@/utils/webUtils"
import quote from "@/assets/icons/blog/quotes.svg"

function Quotation({ children, author, year, source }: PropsWithChildren & { author: string, year: string, source?: string }) {
    return (
        <div className='border-l-2 border-secondary-blue ml-0.5 pl-4 my-6 hover:border-primary-blue transition-all group cursor-pointer' onClick={() => goURL(source || "#")}>

            <div className='bg-primary-blue pl-4 py-5 group-hover:bg-container-blue transition-all'>

                <img src={quote} alt="Quote" className="w-8 h-8 mb-4 select-none pointer-events-none" />

                <p className="w-[90%]">{children}</p>

                <div className='flex flex-row items-start gap-2 w-fit'>
                    <p className="text-secondary-blue relative pl-7 before:absolute before:h-[0.1rem] group-hover:before:h-[0.15rem] before:w-4 before:bg-secondary-blue before:left-[0%] before:top-3 mb-0! group-hover:font-bold transition-all duration-200">{author}, {year}</p>

                    <a className="text-secondary-blue after:content-['↗']"/>
                </div>
            </div>

        </div>
    )
}

export default Quotation;
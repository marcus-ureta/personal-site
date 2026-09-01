
import { goURL } from "@/utils/webUtils";

interface IconProps{
    name: string;
    icon: string;
    url: string;
}

function Icon({name, icon, url} : IconProps){
    return(
        <div className="group flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all select-none" onClick={() => goURL(url)}>
            <img src={icon} alt={name} className="w-[70%] h-auto min-w-[48px] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] transition-all" loading="lazy"/>
            <h4 className="text-[clamp(18px,2vw+1rem,28px)] w-fit font-['Arial'] text-secondary-blue group-hover:text-accent-teal transition-colors duration-100 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">{name}</h4>
        </div>
    )
}

export default Icon
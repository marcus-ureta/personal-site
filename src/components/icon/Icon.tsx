
import { goURL } from "@/utils/webUtils";

interface IconProps{
    name: string;
    icon: string;
    url: string;
}

function Icon({name, icon, url} : IconProps){
    return(
        <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => {window.open(url)}}>
            <img src={icon} alt={name} className="w-[80%] h-auto min-w-[48px]"/>
            <h4 className="text-[clamp(18px,2vw+1rem,28px)] w-fit font-['Arial'] text-secondary-blue">{name}</h4>
        </div>
    )
}

export default Icon
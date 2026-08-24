
interface IconProps{
    name: string;
    icon: string;
}

function Icon({name, icon} : IconProps){
    return(
        <div>
            <img src={icon} alt={name}/>
            <h1>{name}</h1>
        </div>
    )
}

export default Icon
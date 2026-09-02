
import './Chip.css'

interface ChipProps{
    text: string;
    onClick?: () => void;
}

function Chip({text, onClick = () => {}} : ChipProps){
    return(
        <>
            <h1 className="chip" onClick={onClick}>{text}</h1>
        </>
    )
}

export default Chip

interface ChipProps{
    text: string;
    onClick?: () => void;
}

function Chip({text, onClick = () => {}} : ChipProps){
    return(
        <>
            <h1 className="font-['Arial'] text-[clamp(18px,5vw,28px)] bg-secondary-blue w-fit py-2 px-4 rounded-[14px] text-white border-[3px] border-accent-teal hover:scale-110 hover:bg-accent-teal hover:text-secondary-blue hover:border-white transition-all hover:drop-shadow-2xl cursor-pointer" onClick={onClick}>{text}</h1>
        </>
    )
}

export default Chip

interface ChipProps{
    text: string
}

function Chip({text} : ChipProps){
    return(
        <>
            <h1 className="font-['Arial'] text-[clamp(16px,5vw,24px)] bg-secondary-blue w-fit py-2 px-3 rounded-[14px] text-white border-[3px] border-accent-teal hover:scale-110 hover:bg-accent-teal hover:text-secondary-blue hover:border-white transition-all hover:drop-shadow-2xl cursor-pointer">{text}</h1>
        </>
    )
}

export default Chip
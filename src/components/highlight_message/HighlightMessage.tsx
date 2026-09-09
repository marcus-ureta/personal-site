
function HighlightMessage({message} : {message : string}) {

    const letters: string[] = [...message];
    
    return(
        <>
            {letters.map((letter, i) => (
                <span key={i} className='text-secondary-blue hover:text-accent-teal transition-all duration-200'>{letter}</span>
            ))}
        </>
    )
}

export default HighlightMessage
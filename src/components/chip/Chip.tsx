
import './Chip.css'

import { useSFX } from '@/utils/webUtils';

interface ChipProps{
    text: string;
    onClick?: () => void;
}

function Chip({text, onClick = () => {}} : ChipProps){
    const { playNoteSound_1, playNoteSound_2, playNoteSound_3, playNoteSound_4 } = useSFX();

    const handleMultipleSFX = () => {
        const sounds = [
            playNoteSound_1,
            playNoteSound_2,
            playNoteSound_3,
            playNoteSound_4,
        ];

        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        randomSound();
    }

    return(
        <>
            <h1 onMouseEnter={handleMultipleSFX} className="chip" onClick={onClick}>{text}</h1>
        </>
    )
}

export default Chip
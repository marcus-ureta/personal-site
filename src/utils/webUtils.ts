
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { useSoundSettings } from "@/features/soundContext/SoundContext";

export const goURL = (link : string) => {
    window.open(link);
}

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);

        media.addEventListener('change', listener);
        
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
}

export function useSFX(){
    const { enabled } = useSoundSettings();
    let randPitch = Math.random() * (1.1 - 0.85) + 0.85;

    const [playIconClick] = useSound("/sfx/icon_click.wav", {
        playbackRate: randPitch,
        volume: 0.25,
        interrupt: false,
    });

    const [playStartDrag] = useSound("/sfx/start_drag.wav", {
        playbackRate: randPitch,
        volume: 0.05,
        interrupt: false,
    });

    const [playEndDrag] = useSound("/sfx/end_drag.wav", {
        playbackRate: randPitch,
        volume: 0.05,
        interrupt: false,
    });

    const [playCloseTab] = useSound("/sfx/close.wav", {
        playbackRate: randPitch,
        volume: 0.1,
        interrupt: false,
    });

    const [playNoteSound_1] = useSound("/sfx/note_sound_1.mp3", {
        playbackRate: randPitch,
        volume: 0.015,
        interrupt: false,
    });

    const [playNoteSound_2] = useSound("/sfx/note_sound_2.mp3", {
        playbackRate: randPitch,
        volume: 0.015,
        interrupt: false,
    });

    const [playNoteSound_3] = useSound("/sfx/note_sound_3.mp3", {
        playbackRate: randPitch,
        volume: 0.015,
        interrupt: false,
    });

    const [playNoteSound_4] = useSound("/sfx/note_sound_4.mp3", {
        playbackRate: randPitch,
        volume: 0.015,
        interrupt: false,
    });

    return {
        playIconClick: () => {
            if(enabled) playIconClick();
        },
        playStartDrag: () => {
            if(enabled) playStartDrag();
        },
        playEndDrag: () => {
            if(enabled) playEndDrag();
        },
        playCloseTab: () => {
            if(enabled) playCloseTab();
        },

        playNoteSound_1: () => {
            if(enabled) playNoteSound_1();
        },
        playNoteSound_2: () => {
            if(enabled) playNoteSound_2();
        },
        playNoteSound_3: () => {
            if(enabled) playNoteSound_3();
        },
        playNoteSound_4: () => {
            if(enabled) playNoteSound_4();
        }
    };
}

import { useState, useEffect } from 'react';
import useSound from 'use-sound';

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

    return {
        playIconClick,
        playStartDrag,
        playEndDrag,
        playCloseTab
    };
}
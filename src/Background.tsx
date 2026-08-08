import stroked_star from './assets/single stroke star.svg'
import filled_star from './assets/filled star.svg'

import {generateStarCount, generateStarLocation, generateStarRot} from './backgroundUtils'   
import { useState, useEffect } from "react"
import React from "react"

const spacing = 96;

function Background() {
    const [starCount, setStarCount] = useState<number>(generateStarCount(spacing, window.innerWidth, window.innerHeight));
    const [starHover, setHover] = useState<number | null>(null);


    useEffect(() => {
        const handleResize = () => {
            setStarCount(generateStarCount(spacing, window.innerWidth, window.innerHeight));
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let stars: (React.JSX.Element[]) = [];

    for(let i = 0; i < starCount; i++)
    {
        let starRotation = 'rotate-[' + Math.ceil(generateStarRot()) + 'deg]';
        console.log(starRotation);

        stars.push(
            <img key={i} className="animate-[spin_45s_infinite] my-10 mx-8" 
            style={{ transform: `rotate(${Math.ceil(generateStarRot())}deg)`}} src={starHover == i ? filled_star : stroked_star}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}/>
        )
    }

    return(
        <>
            <div className="absolute w-screen h-screen overflow-hidden">
                <div className="absolute min-w-[125%] min-h-[125%] flex flex-wrap justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {stars}
                </div>
            </div>
        </>
    )
}

export default Background

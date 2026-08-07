import Star from './assets/single stroke star.svg'
import {generateStarCount, generateStarLocation} from './backgroundUtils'   
import { useState, useEffect } from "react"

const spacing = 96;

function Background() {
    const [starCount, setStarCount] = useState(generateStarCount(spacing, window.innerWidth, window.innerHeight));

    useEffect(() => {
        const handleResize = () => {
            setStarCount(generateStarCount(spacing, window.innerWidth, window.innerHeight));
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let stars = [];

    for(let i = 0; i < starCount; i++)
    {
        stars.push(
            <img key={i} src={Star}/>
        )
    }

    return(
        <>
            <p>i will generate {starCount} stars</p>
            <div className="absolute top-0 flex gap-[2%] z-[-1] min-w-full flex-wrap gap-y-9 select-none">
                {stars}
            </div>
        </>
    )
}

export default Background

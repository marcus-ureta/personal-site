import stroked_star from './assets/single stroke star.svg'
import filled_star from './assets/filled star.svg'

import './Background.css'
import {generateStarCount, generateStarLocation, generateStarRot} from './backgroundUtils'   
import { useState, useEffect } from "react"

const spacing = 96;

type StarData = {
    starRotation : number,
    starX : number,
    starY : number
}

function Background() {
    const [starCount, setStarCount] = useState<number>(generateStarCount(spacing, window.innerWidth, window.innerHeight));
    const [starHover, setHover] = useState<number | null>(null);
    const [stars, setStars] = useState(() => {
        let allStars : StarData[] = [];
        let prevStarX : number = 0;
        let prevStarY : number = 0;

        for(let i = 0; i < starCount; i++)
        {
            let starRotNumber = Math.ceil(generateStarRot());
            
            let starPos = generateStarLocation(window.innerWidth, spacing, prevStarX, prevStarY);
            prevStarX = i == 0 ? 0 : starPos.star_x;
            prevStarY = i == 0 ? 0 : starPos.star_y;

            let t_starData : StarData = {
                starRotation: starRotNumber, 
                starX: i == 0 ? 0 : starPos.star_x, 
                starY: i == 0 ? 0 : starPos.star_y
            };

            allStars.push(t_starData);
        }

        return allStars;
    })

    useEffect(() => {
        const handleResize = () => {
            let starCount = generateStarCount(spacing, window.innerWidth, window.innerHeight)
            setStarCount(starCount);

            setStars(prevStars => {
                if(starCount > prevStars.length)
                {
                    const newStars : StarData[] = [...prevStars];
                    let missingStars : number = starCount - prevStars.length;

                    for(let i = 0; i < missingStars; i++)
                    {
                        let prevStarPos : number[] = [prevStars[prevStars.length - 1].starX, prevStars[prevStars.length - 1].starY]
                        let newStarPos = generateStarLocation(window.innerWidth, spacing, prevStarPos[0], prevStarPos[1]);

                        let newStar : StarData = {
                            starRotation: Math.ceil(generateStarRot()),
                            starX: newStarPos.star_x,
                            starY: newStarPos.star_y
                        }
                        newStars.push(newStar);
                    }

                    return newStars;
                }
                else if(starCount < prevStars.length)
                {
                    return prevStars.slice(0, starCount);
                }

                return prevStars;
            })
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <>
            <div className="absolute w-screen h-screen overflow-hidden top-0">
                {stars.map((star, i) => (
                    <img
                        key={i} className="animate-[spin_45s_infinite_alternate] my-10 mx-8" 
                        style={{
                            position: `absolute`,
                            transform: `rotate(${star.starRotation}deg)`,
                            top: `${star.starY}px`,
                            left: `${star.starX}px`
                        }} 
                        src={starHover == i ? filled_star : stroked_star}
                        onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                    />
                ))}
            </div>
        </>
    )
}

export default Background

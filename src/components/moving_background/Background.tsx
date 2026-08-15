import stroked_star from '../../assets/single stroke star.svg'
import filled_star from '../../assets/filled star.svg'

import './Background.css'
import {generateStarCount, generateStarLocation, generateStarRot} from './backgroundUtils'   
import { useState, useEffect, useRef } from "react"

const spacing = 96;

type StarData = {
    starRotation : number,
    starX : number,
    starY : number
}

function Background() {

    const generateStars = () : StarData[] => {
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
    }

    const starClick = (index: number) => {
        const findExistingNo = starsClicked.includes(index) ? starsClicked.indexOf(index) : null;

        if(findExistingNo === null)
        {
            setClicked(prev => [...prev, index]);
        }
        else
        {
            setClicked((prevStars) => prevStars.filter((num) => num !== index));
        }
    }

    const [starCount, _setStarCount] = useState<number>(generateStarCount(spacing, window.innerWidth, window.innerHeight));
    const [starsClicked, setClicked] = useState<number[]>([]);
    const [stars, setStars] = useState<StarData[]>(() => {
        return generateStars();
    })
    const starsRef = useRef<StarData[]>(stars);

    const starElementsRef = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        let resizeFrameID: number | null = null;
        let animFrameID : number;

        const handleAnim = () => {
            starsRef.current.forEach((star, i) => {
                let isMargined = star.starY / spacing;

                if(star.starX > window.innerWidth + ((spacing + 32) / 2) && isMargined % 2 !== 0)
                    star.starX = -spacing + 32;
                else if(star.starX > window.innerWidth - ((spacing + 32) / 2) && isMargined % 2 === 0)
                    star.starX = -spacing + 32;
                
                star.starX += 0.1;

                // Rotate the star
                star.starRotation += 0.1;

                const element = starElementsRef.current[i];

                if (!element) return;
                
                element.style.transform =
                    `translate3d(
                        ${star.starX}px,
                        ${star.starY}px,
                        0
                    )
                    rotate(${star.starRotation}deg)`;
            });

            animFrameID = requestAnimationFrame(handleAnim);
        }

        const handleResize = () => {
            if(resizeFrameID !== null) return;
            resizeFrameID = requestAnimationFrame(() => {
                resizeFrameID = null;

                const newStars = generateStars();

                starsRef.current = newStars;
                starElementsRef.current = [];

                setClicked([]);
                setStars(newStars);
            })
        };

        animFrameID = requestAnimationFrame(handleAnim);
        window.addEventListener("resize", handleResize);
        return () => {
            cancelAnimationFrame(animFrameID);
            window.removeEventListener("resize", handleResize);

            if (resizeFrameID !== null) {
                cancelAnimationFrame(resizeFrameID);
            }
        };
    }, []);

    return(
        <>
            <div className="absolute w-screen h-screen overflow-hidden top-0 -z-1">
                {stars.map((_star, i) => (
                    <img    
                        key={i} className="mx-8 select-none opacity-65 hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]
                            hover:w-12 hover:h-12 hover:opacity-100 hover:cursor-pointer" 
                        ref={(element) => {starElementsRef.current[i] = element; }} 
                        style={{ position: `absolute`, willChange: "transform"}} 
                        src={starsClicked.includes(i) ? filled_star : stroked_star}
                        onClick={() => starClick(i)}
                    />
                ))}
            </div>
        </>
    )
}

export default Background

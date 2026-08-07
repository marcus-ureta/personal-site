import Star from './assets/single stroke star.svg'
import {generateStarCount, generateStarLocation} from './backgroundUtils'

function Background() {

    let stars = [];

    for(let i = 0; i < generateStarCount(); i++)
    {
        stars.push(
            <img src={Star}/>
        )
    }

    return(
        <>
            <p>i will generate {generateStarCount()} stars</p>
            <div className="absolute top-0 flex gap-[2%] z-[-1] min-w-full flex-wrap gap-y-9">
                {stars}
            </div>
        </>
    )
}

export default Background

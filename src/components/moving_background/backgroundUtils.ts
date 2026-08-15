
const starWidth = 32;

type starPos = {
    star_x: number,
    star_y: number,
}

// Find the Star Count for the Background
export function generateStarCount(spacing: number, windowWidth:number, windowHeight: number): number{
    let finalStarCount = (windowWidth * windowHeight) / (spacing * spacing); 

    return Math.ceil(finalStarCount);
}

// Initial Star Position & Rotation
export function generateStarLocation(windowWidth:number, spacing: number, prevStarX: number, prevStarY: number): starPos{
    let starPos_X = prevStarX + (starWidth + (spacing));
    let starPos_Y = prevStarY;

    if(starPos_X >= windowWidth)
    {
        starPos_Y += spacing;
        starPos_X = 0;

        // Check if we should apply a slight margin
        let yMarginCheck = starPos_Y / spacing;
        if(yMarginCheck % 2 != 0)
        {
            starPos_X -= (spacing + starWidth) / 2;
        }
    }
    
    return {
        star_x: starPos_X,
        star_y: starPos_Y,
    }
}

export function generateStarRot(){
    return (Math.random() * 180);
}
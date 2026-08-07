
type starData = {
    star_x: number,
    star_y: number,
    rotation: number
}

// Find the Star Count for the Background
export function generateStarCount(spacing: number, windowWidth:number, windowHeight: number): number{
    let finalStarCount = (windowWidth * windowHeight) / (spacing * spacing); 

    return Math.ceil(finalStarCount);
}

// Initial Star Position & Rotation
export function generateStarLocation(): starData{
    
    let starPos_X = 0;
    let starPos_Y = 0;
    let starRot = 0;
    
    return {
        star_x: starPos_X,
        star_y: starPos_Y,
        rotation: starRot
    }
}
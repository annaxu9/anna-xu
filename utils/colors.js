function getFirstColor(valence, danceability, energy, speechiness) {
    
    // HAPPIEST
    if (valence > .9) {
        return [(valence - .9) * 35 + 30, 100, 60]
    }

    // HAPPY
    if (valence > .7) {
        return [(valence - .7) * 75 + 15, 100, 50]
    }

    // SAD
    if (valence <= .3) {
        return [valence * 133 + 220, 75, energy * 10 + 15]
    }

    // Maybe a love song? If danceability, energy, and valence are all 0.35-0.75
    if (valence > .35 && valence < .70 && danceability > .35 && danceability < .70 && energy > .35 && energy < .75) {
        return [0, 100, (valence - .35) * 142 + 15]
    }

    // danceable rappy song?
    if (speechiness > .15 && danceability > .7) {
        return [(1 - danceability) * 133 + 290, 100, 65]
    }
    
    // cool song?
    if (danceability > .65 && speechiness < .15) {
        return [180 - speechiness * 333, 85, 35]
    }

    if (energy > .7) {
        return [(energy - .7) * 83 + 60, 100, 60]
    }

    return [0, 0, 0]
}

function getSecondColor(firstColor, energy) {
    return [firstColor[0], 100, energy * 100]
} 

function getThirdColor(index) {
    console.log(index)
    const keys = [
        { key: "C Major", hsl: 60 },    // Bright Yellow
        { key: "C-sharp/D-flat Major", hsl: 180 },  // Teal
        { key: "D Major", hsl: 210 },   // Sky Blue
        { key: "D-sharp/E-flat Major", hsl: 190 },  // Cyan
        { key: "E Major", hsl: 240 },   // Royal Blue
        { key: "F Major", hsl: 350 },   // Light Pink
        { key: "F-sharp/G-flat Major", hsl: 270 },  // Purple
        { key: "G Major", hsl: 120 },   // Grass Green
        { key: "G-sharp/A-flat Major", hsl: 30 },   // Warm Orange
        { key: "A Major", hsl: 50 },    // Gold
        { key: "A-sharp/B-flat Major", hsl: 20 },   // Coral
        { key: "B Major", hsl: 300 }    // Magenta
    ];
    return [keys[index].hsl, 100, 50]
}

export {getFirstColor, getSecondColor, getThirdColor}
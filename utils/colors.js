function getFirstColor(valence, danceability, energy, speechiness) {

    // danceable rappy song?
    if (speechiness > .15 && danceability > .7) {
        return [[(1 - danceability) * 133 + 290, 100, 65], "because this seems like a song for a bad b*tch like yourself ;)"]
    }
    
    // cool song?
    if (danceability > .65 && speechiness < .15) {
        return [[180 - speechiness * 333, 85, 35], "because it gives ocean or a cool/chill vibe?"]
    }
    
    // HAPPIEST
    if (valence > .9) {
        return [[(valence - .9) * 35 + 30, 100, 60], "because this is such a happy song!"]
    }

    // HAPPY
    if (valence > .7) {
        return [[(valence - .7) * 75 + 15, 100, 50], "because this is a pretty happy song!"]
    }

    // SAD
    if (valence <= .3) {
        return [[valence * 133 + 220, 75, energy * 10 + 15], "because this is a sad/depressing song"]
    }

    // Maybe a love song? If danceability, energy, and valence are all 0.35-0.75
    if (valence > .35 && valence < .70 && danceability > .35 && danceability < .70 && energy > .35 && energy < .75) {
        return [[0, 100, (valence - .35) * 142 + 15], "because this seems like a love song"]
    }



    if (energy > .7) {
        return [[(energy - .7) * 83 + 60, 100, 60], "because it's bright"]
    }

    return [[0, 0, 0], "because we don't really know the vibes but think black would fit"]
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
    return [[keys[index].hsl, 100, 50], keys[index].key]
}

function energyComment(energy) {
    if (energy < 0.3) {
        return "low"
    } else if (energy < .7) {
        return "pretty good"
    } else {
        return "high"
    }
}

export {getFirstColor, getSecondColor, getThirdColor, energyComment}
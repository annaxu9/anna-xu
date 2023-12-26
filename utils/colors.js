function getHue(valence) {
    return (1 - valence) * 280
}

function getSaturation(danceability) {
    return danceability * 100
}

function getLightness(energy) {
    energy = energy - .25
    if (energy < 0) {
        energy = 0.01
    }
    return energy * 100
}

function getHueTempo(tempo) {
    if (tempo > 500) {
        return 360; // Red
    }
    if (tempo > 300) {
        return mapToRange(tempo, 300, 500, 40, 60); // Orange to Lime Green
    }
    if (tempo > 200) {
        return mapToRange(tempo, 200, 300, 300, 360); // Purple to Red
    }
    if (tempo > 100) {
        return mapToRange(tempo, 100, 200, 120, 180); // Lime Green to Cyan
    }
    return mapToRange(tempo, 0, 100, 200, 275); // Blue to Purple
}

function mapToRange(input, inputMin, inputMax, outputMin, outputMax) {
    const slope = (outputMax - outputMin) / (inputMax - inputMin);
    return outputMin + slope * (input - inputMin);
}

function getHueKey(key) {
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
    return keys[key].hsl
}
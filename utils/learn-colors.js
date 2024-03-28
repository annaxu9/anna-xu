export function categorizeColor(hexCode) {
    // Remove '#' if present
    if (hexCode.startsWith('#')) {
        hexCode = hexCode.substring(1);
    }

    // Convert hex code to RGB
    let r = parseInt(hexCode.substring(0, 2), 16);
    let g = parseInt(hexCode.substring(2, 4), 16);
    let b = parseInt(hexCode.substring(4, 6), 16);

    // Define thresholds
    let highThreshold = 200;
    let lowThreshold = 50;
    let closeThreshold = 30;

    // Categorize color
    if (r < lowThreshold && g < lowThreshold && b < lowThreshold) {
        return 'Black';
    } else if (r > highThreshold && g > highThreshold && b > highThreshold) {
        return 'White';
    } else if (Math.abs(r - g) < closeThreshold && r > highThreshold && b < lowThreshold) {
        return 'Yellow';
    } else if (Math.abs(r - g) < closeThreshold && r > highThreshold) {
        return 'Orange';
    } else if (r > highThreshold && g < lowThreshold && b < lowThreshold) {
        return 'Red';
    } else if (g > highThreshold && r < lowThreshold && b < lowThreshold) {
        return 'Green';
    } else if (b > highThreshold && r < lowThreshold && g < lowThreshold) {
        return 'Blue';
    } else if (Math.abs(r - b) < closeThreshold && g < lowThreshold) {
        return 'Purple';
    } else if (r > lowThreshold && g > lowThreshold && b < highThreshold) {
        return 'Brown';
    } else {
        return 'Other';
    }
}
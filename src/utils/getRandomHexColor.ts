export function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Pad the hex string with leading zeros if necessary to ensure 6 characters
    return "#" + randomColor.padStart(6, '0') + '33';
    // return "white";
}

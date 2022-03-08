export const generateRandomColor = () => {
    // The letters array contains all possible characters that can be in a hex color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      /*
        - Math.random() returns a random number between 0 and 1
        - Math.floor() rounds the number down to the nearest integer
        - Math.random() * letters.length returns a random number between 0 and the length of the letters array (ie : 16)
        - Math.floor() returns the largest integer less than or equal to the random number
      */
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
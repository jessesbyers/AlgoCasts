// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
    // placeholder object to hold counts of characters
    let counts = {}

    // loop through each character in the string, check if there is a key for that character, 
    // add 1 if yes, set equal to one if no
    for (i=0; i<string.length; i++) {
        counts[string[i]] ? counts[string[i]] = counts[string[i]] + 1 : counts[string[i]] = 1
    }

    // get max value by making array of all values, sorting descending, and pulling index 0
    let maxValue = Object.values(counts).sort((a, b) => a<b ? 1 : -1)[0]

    // get key for that value by making array of keys, then find the key that has a value of maxValue
    var maxKey = Object.keys(counts).find(count => counts[count] === maxValue)

    return maxKey
}


module.exports = maxChar;

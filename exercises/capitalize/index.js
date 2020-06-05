// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// SOLUTION 1: USES MAP FUNCTION
// function capitalize(str) {
//     return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
// }

// SOLUTION 2: USES FOR OF LOOP
// function capitalize(str) {
//     const words = []

//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }

//     return words.join(' ')
// }

// SOLUTION 3: WEAKNESS - DOESN'T WORK WELL WITH FIRST CHARACTER - NEEDS EDGE CASE
function capitalize(str) {
    let result = str[0].toUpperCase()

    for (let i=1; i<str.length; i++) {
        if (str[i-1] === " ") {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }

    return result
}



module.exports = capitalize;

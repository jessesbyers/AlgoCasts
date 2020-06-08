// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



// SOLUTION 1: Uses for loop and checks for equality for each character
// function vowels(str) {
//     let counter = 0
//     let string = str.toLowerCase()

//     for (let i=0; i<string.length; i++) {
//         if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//             counter += 1
//         }
//     }
//     return counter
// }

// SOLUTION 2: uses includes method with array of vowels instead of regex
// function vowels(str) {
//     let counter = 0
//     const vowelList = ["a", "e", "i", "o", "u"]

//     for (let element of str.toLowerCase()) {
//         if (vowelList.includes(element)) {
//             counter += 1
//         }
//     }
//     return counter
// }


// SOLUTION 3: Using regex and match method
function vowels(str) {
    const matches = str.match(/[aeiou]/gi)

    return matches ? matches.length : 0
}


module.exports = vowels;

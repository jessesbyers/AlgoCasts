// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// MY SOLUTION - with repeat method
// function steps(n) {
//     for (i=1; i<=n; i++) {
//         string = "#".repeat(i) + " ".repeat(n-i)
//         console.log(string)
//     }
// }

// SOLUTION 1 - using matrix of rows and columns - best interview solution
// function steps(n) {
//     // iterate through rows
//     for (let i=0; i<n; i++) {
//         let stair = ""
//         // iterate through columns
//         for (let ind=0; ind<n; ind++) {
//             if (ind <= i) {
//                 stair += "#"
//             } else {
//                 stair += " "
//             }
//         }
//         console.log(stair)
//     }
// }




// SOLUTION 2 - WITH RECURSION - more complex solution
function steps(n, row = 0, step = '') {
    if (n === row) {
        return; 
    } 

    if (n === step.length) {
        console.log(step)
        return steps(n, row+1)   
    }

    if (step.length <= row) {
        step += "#"
    } else {
        step += " "
    }

    steps(n, row, step)
}





module.exports = steps;

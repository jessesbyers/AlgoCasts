// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// // SOLUTION 1: Iteration
// function pyramid(n) {
//     const midpoint = Math.floor((2*n-1) / 2)

//     // iterate through rows
//     for (let i=0; i<n; i++) {
//         let step = ""
//         // iterate through columns
//         for (let ind=0; ind<n*2-1; ind++) {
//             if (midpoint - i <= ind && midpoint + i >= ind ) {
//                 step += '#'
//             } else {
//                 step += ' '
//             }
//         }
//         console.log(step)
//     }
// }

// SOLUTION 2: Recursion
function pyramid(n, row=0, level='') {
    const midpoint = Math.floor((2*n-1) / 2)

    if (row === n) {
        return
    }

    if (level.length === 2*n-1) {
        console.log(level)
        return pyramid(n, row+1)
    }

    let add;

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }

    pyramid(n, row, level + add)
}

module.exports = pyramid;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunkedArray = []
  
//     for (let i=0; i<array.length; i++) {
//       if (chunkedArray[chunkedArray.length-1] && chunkedArray[chunkedArray.length-1].length < size) {
//         chunkedArray[chunkedArray.length-1].push(array[i])
//       } else {
//         chunkedArray.push([array[i]])
//       }
//     }
//     return chunkedArray
//   }

function chunk(array, size) {
    let chunkedArray = []
    let i=0
  
    while (i<array.length) {
      let piece = array.slice(i, i+size)
      chunkedArray.push(piece)
        i=i+size
    }
    return chunkedArray
  }

module.exports = chunk;

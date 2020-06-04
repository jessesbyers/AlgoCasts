// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = stringA.replace(/[^\w]/g, "").toLowerCase()
    const aCounts = {}
    const strB = stringB.replace(/[^\w]/g, "").toLowerCase()
    const bCounts = {}

    if (strA.length !== strB.length) {
        return false
    } else {

        for (let i=0; i<strA.length; i++) {
            aCounts[strA[i]] ? aCounts[strA[i]] = aCounts[strA[i]] + 1 : aCounts[strA[i]] = 1
        }

        for (let i=0; i<strB.length; i++) {
            bCounts[strB[i]] ? bCounts[strB[i]] = bCounts[strB[i]] + 1 : bCounts[strB[i]] = 1
        }

        if (Object.keys(aCounts).length !== Object.keys(bCounts).length) {
            return false
        } else {
            console.log(aCounts)
            console.log(bCounts)
        }
        return true
    }
}

// function anagrams(stringA, stringB) {
//     const aCounts = buildCounts(stringA)
//     const bCounts = buildCounts(stringB)
  
//     if (Object.keys(aCounts).length !== Object.keys(bCounts).length) {
//       return false
//     } 
  
//     for (let element in aCounts) {
//       if (aCounts[element] !== bCounts[element]) {
//         return false
//       }
//     } 
//     return true
//   }
  
//   function buildCounts(str) {
//     const counts = {}
  
//     for (let element of str.replace(/[^\w]/g, "").toLowerCase()) {
//        counts[element] = counts[element] + 1 || 1
//     }
  
//     return counts
//   }



// RegEx
//     remove all extraneous characters and SVGPathSegClosePath    
//         word.replace(/[\^w]/g, "")
//      make lowercase
//          .toLowerCase()

// function anagrams(stringA, stringB) {}


module.exports = anagrams;

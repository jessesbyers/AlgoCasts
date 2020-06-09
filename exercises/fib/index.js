// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



// ITERATIVE SOLUTION: bigO = linear runtime
// function fib(n) {
//     let fibo = [0, 1]
  
//     for (let i=2; i<=n; i++) {
//       fibo.push(fibo[i-2] + fibo[i-1])
//     }
  
//     return fibo[n]
//   }




// SOLUTION 2: RECURSIVE SOLUTION

function fib(n) {
    if (n < 2) {
        return n
    }
  
    return fib(n-1) + fib(n-2)
}
  

module.exports = fib;

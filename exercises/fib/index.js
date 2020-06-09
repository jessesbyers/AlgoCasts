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




// SOLUTION 2: RECURSIVE SOLUTION - exponential runtime (n^2)

function fib(n) {
    if (n < 2) {
        return n
    }
  
    return fib(n-1) + fib(n-2)
}

// SOLUTION 3: MEMOIZATION SOLUTION: Improving runtime with recursive solution through memoization
// generic memoize function can be used for any function that requires memoization

function memoize(fn) {
    // create a cache object
    const cache = {}

    // call an anonymous function using args 
    return function(...args) {
        // if it has already been called with that argument, return the value already stored
        if (cache[args]) {
            return cache[args]
        }

        // if it hasn't been run already, run the function and store the result to cache for later
        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function fib(n) {
    if (n<2) {
        return n
    }

    return fib(n-1) + fib(n-2)
}

fib = memoize(fib)

  

module.exports = fib;

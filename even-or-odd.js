// Returns whether a number is odd or even

// O(1)
var isOdd = function(number) {
    var remainder = number % 2;
    return remainder == 1;
};

const test1 = isOdd(5);
console.log(test1);
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/even-or-odd.js"
// true
// [Done] exited with code=0 in 0.046 seconds

const test2 = isOdd(100);
console.log(test2)
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/even-or-odd.js"
// false
// [Done] exited with code=0 in 0.047 seconds

const test3 = isOdd(9632158);
console.log(test3);
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/even-or-odd.js"
// false
// [Done] exited with code=0 in 0.047 seconds

//run all at once:
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/even-or-odd.js"
// true
// false
// false
// [Done] exited with code=0 in 0.047 seconds
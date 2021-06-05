function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
        console.log(result)
    }
    return result;
    
}

compute(15);
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/compute-the-sequence.js"
// [ 0 ]
// [ 0, 1 ]
// [ 0, 1, 1 ]
// [ 0, 1, 1, 2 ]
// [ 0, 1, 1, 2, 3 ]
// [ 0, 1, 1, 2, 3, 5 ]
// [
//   0, 1, 1, 2,
//   3, 5, 8
// ]
// [
//   0, 1, 1,  2,
//   3, 5, 8, 13
// ]
// [
//   0, 1,  1,  2, 3,
//   5, 8, 13, 21
// ]
// [
//   0, 1,  1,  2,  3,
//   5, 8, 13, 21, 34
// ]
// [
//    0, 1,  1,  2,  3,
//    5, 8, 13, 21, 34,
//   55
// ]
// [
//    0,  1,  1,  2,  3,
//    5,  8, 13, 21, 34,
//   55, 89
// ]
// [
//     0,  1,  1,  2,  3,  5,
//     8, 13, 21, 34, 55, 89,
//   144
// ]
// [
//     0,   1,  1,  2,  3,  5,
//     8,  13, 21, 34, 55, 89,
//   144, 233
// ]
// [
//     0,   1,   1,  2,  3,  5,
//     8,  13,  21, 34, 55, 89,
//   144, 233, 377
// ]

// [Done] exited with code=0 in 0.049 seconds

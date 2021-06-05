function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

createPairs([1, 6, 8, 2, 47, 12])
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/creating-pairs.js"
// 1, 6
// 1, 8
// 1, 2
// 1, 47
// 1, 12
// 6, 8
// 6, 2
// 6, 47
// 6, 12
// 8, 2
// 8, 47
// 8, 12
// 2, 47
// 2, 12
// 47, 12
// [Done] exited with code=0 in 0.046 seconds
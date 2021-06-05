function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        console.log('el1: ', el1)
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            console.log('el2: ', el2)
            if (el1 === el2) return true;
        }
    }
    return false;
}

const test1 = areYouHere([2, 4, 7], [5,8,12,42])
console.log(test1);
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/are-you-here.js"
// false
// [Done] exited with code=0 in 0.07 seconds

const test2 = areYouHere([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [5, 6, 7, 8, 9, 10, 11, 12, 42, 43, 44, 45, 46, 47, 48, 49, 50, ])
console.log(test2);
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/are-you-here.js"
// true
// [Done] exited with code=0 in 0.047 seconds

const test3 = areYouHere(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 42, 43, 44, 45, 46, 47, 48, 49, 50, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], 
    [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110])
// console.log(test3);
// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/are-you-here.js"
// true
// [Done] exited with code=0 in 0.046 seconds

// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/are-you-here.js"
// el1:  1
// el2:  5
// el2:  6
// el2:  7
// el2:  8
// el2:  9
// el2:  10
// el2:  11
// el2:  12
// el2:  13
// el2:  14
// el2:  15
// el2:  16
// el2:  17
// el2:  18
// el2:  19
// el2:  20
// el2:  21
// el2:  22
// el2:  23
// el2:  24
// el2:  25
// el2:  26
// el2:  27
// el2:  28
// el2:  29
// el2:  30
// el2:  42
// el2:  43
// el2:  44
// el2:  45
// el2:  46
// el2:  47
// el2:  48
// el2:  49
// el2:  50
// el2:  51
// el2:  52
// el2:  53
// el2:  54
// el2:  55
// el2:  56
// el2:  57
// el2:  58
// el2:  59
// el2:  60
// el2:  61
// el2:  62
// el2:  63
// el2:  64
// el2:  65
// el2:  66
// el2:  67
// el2:  68
// el2:  69
// el2:  70
// el2:  100
// el2:  101
// el2:  102
// el2:  103
// el2:  104
// el2:  105
// el2:  106
// el2:  107
// el2:  108
// el2:  109
// el2:  110
// el1:  2
// el2:  5
// el2:  6
// el2:  7
// el2:  8
// el2:  9
// el2:  10
// el2:  11
// el2:  12
// el2:  13
// el2:  14
// el2:  15
// el2:  16
// el2:  17
// el2:  18
// el2:  19
// el2:  20
// el2:  21
// el2:  22
// el2:  23
// el2:  24
// el2:  25
// el2:  26
// el2:  27
// el2:  28
// el2:  29
// el2:  30
// el2:  42
// el2:  43
// el2:  44
// el2:  45
// el2:  46
// el2:  47
// el2:  48
// el2:  49
// el2:  50
// el2:  51
// el2:  52
// el2:  53
// el2:  54
// el2:  55
// el2:  56
// el2:  57
// el2:  58
// el2:  59
// el2:  60
// el2:  61
// el2:  62
// el2:  63
// el2:  64
// el2:  65
// el2:  66
// el2:  67
// el2:  68
// el2:  69
// el2:  70
// el2:  100
// el2:  101
// el2:  102
// el2:  103
// el2:  104
// el2:  105
// el2:  106
// el2:  107
// el2:  108
// el2:  109
// el2:  110
// el1:  3
// el2:  5
// el2:  6
// el2:  7
// el2:  8
// el2:  9
// el2:  10
// el2:  11
// el2:  12
// el2:  13
// el2:  14
// el2:  15
// el2:  16
// el2:  17
// el2:  18
// el2:  19
// el2:  20
// el2:  21
// el2:  22
// el2:  23
// el2:  24
// el2:  25
// el2:  26
// el2:  27
// el2:  28
// el2:  29
// el2:  30
// el2:  42
// el2:  43
// el2:  44
// el2:  45
// el2:  46
// el2:  47
// el2:  48
// el2:  49
// el2:  50
// el2:  51
// el2:  52
// el2:  53
// el2:  54
// el2:  55
// el2:  56
// el2:  57
// el2:  58
// el2:  59
// el2:  60
// el2:  61
// el2:  62
// el2:  63
// el2:  64
// el2:  65
// el2:  66
// el2:  67
// el2:  68
// el2:  69
// el2:  70
// el2:  100
// el2:  101
// el2:  102
// el2:  103
// el2:  104
// el2:  105
// el2:  106
// el2:  107
// el2:  108
// el2:  109
// el2:  110
// el1:  4
// el2:  5
// el2:  6
// el2:  7
// el2:  8
// el2:  9
// el2:  10
// el2:  11
// el2:  12
// el2:  13
// el2:  14
// el2:  15
// el2:  16
// el2:  17
// el2:  18
// el2:  19
// el2:  20
// el2:  21
// el2:  22
// el2:  23
// el2:  24
// el2:  25
// el2:  26
// el2:  27
// el2:  28
// el2:  29
// el2:  30
// el2:  42
// el2:  43
// el2:  44
// el2:  45
// el2:  46
// el2:  47
// el2:  48
// el2:  49
// el2:  50
// el2:  51
// el2:  52
// el2:  53
// el2:  54
// el2:  55
// el2:  56
// el2:  57
// el2:  58
// el2:  59
// el2:  60
// el2:  61
// el2:  62
// el2:  63
// el2:  64
// el2:  65
// el2:  66
// el2:  67
// el2:  68
// el2:  69
// el2:  70
// el2:  100
// el2:  101
// el2:  102
// el2:  103
// el2:  104
// el2:  105
// el2:  106
// el2:  107
// el2:  108
// el2:  109
// el2:  110
// el1:  5
// el2:  5
// [Done] exited with code=0 in 0.05 seconds
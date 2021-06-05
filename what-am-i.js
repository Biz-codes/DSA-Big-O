function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

const input1 = isWhat(1);
console.log("input1: ", input1)

const inputDecimal = isWhat(4.2);
console.log("inputDecimal: ", inputDecimal);

const inputNonPrime = isWhat(50);
console.log("inputNonPrime: ", inputNonPrime);

const inputPrime = isWhat(17);
console.log("inputPrime: ", inputPrime);

// [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/what-am-i.js"
// input1:  false
// inputDecimal:  false
// inputNonPrime:  false
// inputPrime:  true

// [Done] exited with code=0 in 0.047 seconds
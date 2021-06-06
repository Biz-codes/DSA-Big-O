# DSA-Big-O

1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

    Constant time: one action, one result - Asking 1 person takes the same amount of time as asking 15 people.

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

Linear time: As the number of people increases, the steps increase at the same rate - Asking 2 people takes twice as long as asking 1 person; asking 15 people takes 15 times longer than asking 1 person.

2. Even or odd
What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
Constant time, because the number of operations doesn't change based on the input

3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
O(n^2) Polynomial Time. For each n element in arr1 we have to perform k operations in arr2.


4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

O(n) Linear time. We perform one operation per element in the array, so our operations grow at the same rate as the input.



5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

O(n) Linear time. As the array grows, we perform one extra operation for each new element.

6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

O(n^2) Polynomial time. We loop over the array once for each element in the array. This one is a bit odd because it doesn't loop over the whole array every time. The second loop only performs arr.length / 2 operations.

7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

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
    }
    return result;
}

O(n) Linear time. Adds the previous two answers together, creating a fibbonacci sequence. Returns array of fibonacci sequence arrays with lengths of 1, 2, 3, 4, etc. all the way to num.

8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

O(log n) because it is using Divide and Conquer to halve the input until it finds the item

9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

O(1) constant time. Accessing an array by index doesn't require any iteration. The computer simply looks at the pointer bound to the array, goes to that memory address, and then grabs the nth element in that array.

10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

If the number is less than two, or if the number is not an integer, return false. If the number is evenly divisible by any number between 2 and itself, return false. So the function will return true only if the number passed to it is a prime number. The Big O is linear, O(n). As the input grows, the number of operations performed by the for loop grows at the same rate.

11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.

const rods = {
    "A": [3,2,1],
    "B": [],
    "C": []
  };
  let moves = 0;
  
  const displayRods = (rods) => {
    let newRods = Object.keys(rods);
    newRods.forEach(rod => console.log(rod + ": " + rods[rod]));
  
    console.log(`${moves} moves`);
    moves++;
    console.log("\n");
  }
  displayRods(rods);
  
  const towerOfHanoi = (n, sourceRod, destinationRod, bufferRod) => {
  
    // Our base case is implicitly when n, the height of our stack of disks, gets down to zero.
  
    if (n >= 1) { 
  
      towerOfHanoi(n - 1, sourceRod, bufferRod, destinationRod);
  
      console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);  
  
      rods[bufferRod].push(rods[sourceRod].pop())
      rods[destinationRod].push(rods[bufferRod].pop())
  
      displayRods(rods);
  
      towerOfHanoi(n - 1, bufferRod, destinationRod, sourceRod);
  
    }
    return;
  }
  towerOfHanoi(3, "A", "C", "B");

Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

//   [Running] node "/Users/aholley/Documents/thinkful/projects/DSA-Big-O/tower-of-hanoi.js"
// A: 3,2,1
// B: 
// C: 
// 0 moves


// Move disk 1 from A to C
// A: 3,2
// B: 
// C: 1
// 1 moves


// Move disk 2 from A to B
// A: 3
// B: 2
// C: 1
// 2 moves


// Move disk 1 from C to B
// A: 3
// B: 2,1
// C: 
// 3 moves


// Move disk 3 from A to C
// A: 
// B: 2,1
// C: 3
// 4 moves


// Move disk 1 from B to A
// A: 1
// B: 2
// C: 3
// 5 moves


// Move disk 2 from B to C
// A: 1
// B: 
// C: 3,2
// 6 moves


// Move disk 1 from A to C
// A: 
// B: 
// C: 3,2,1
// 7 moves

// [Done] exited with code=0 in 0.047 seconds

If you are given 5 disks, how do the rods look like after 7 recursive calls?

A: 5, 4, 3, 2, 1
B: 
C:
0 moves 

Move disk 1 from A to C
A: 5, 4, 3, 2
B: 
C: 1
1 move

Move disk 2 from A to B
A: 5, 4, 3
B: 2
C: 1
2 moves

Move disk 1 from C to B
A: 5, 4, 3
B: 2, 1
C:
3 moves

Move disk 3 from A to C
A: 5, 4, 
B: 2, 1
C: 3
4 moves

Move disk 1 from B to A
A: 5, 4, 1
B: 2
C: 3
5 moves

Move disk 2 from B to C
A: 5, 4, 1
B: 
C: 3, 2
6 moves

Move disk 1 from A to C
A: 5, 4
B:
C: 3, 2, 1
7 moves


How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

3 disks: 7
4 disks: 15
5 disks: 31

What is the runtime of your algorithm?
O(2^n) exponential The number of steps doubles (plus one) for every disk added.



12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

See 'iterative-drills.js'

13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

1. O(n) - Each sheep takes 1 step
2. O(n) - Each time we add 1 to the exponent, we add 1 step
3. O(n) - Each additional character in the string adds 1 step
4. O(n) - Each time n increases by 1, we need 1 more step to complete the recursion
5. O(n) - n is the number of splitters in the string. Each additional splitter adds 1 step
6. O(2n): Each recursion calls itself twice (2n), When n increases by 1, the number of recursions increases by 1.
7. O(n) - The number of steps (recursions) is equal to n
8. O(n) - PLEASE CLARIFY
9. O(n * k) - PLEASE CLARIFY
10. O(n!) - PLEASE CLARIFY
11. O(n) - PLEASE CLARIFY
12. O(n) - Each time you add 1 to n, you need to call toBinary 1 extra time

14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

See 'iterative-drills.js'
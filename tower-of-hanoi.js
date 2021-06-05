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
// 1.
function countSheep(n) {
    let counter = n;
  
    while (n > 0) {
      console.log(`${n}: Another sheep jumps over the fence`);
      n--;
    }
  
    console.log(`All sheep jumped over the fence`);
  }
  // O(n) linear. We add one step for each additional sheep.
  countSheep(3)
  //loop 1: `3: Another sheep jumps over the fence`; 3-1=2;
  //loop 2: `2: Another sheep jumps over the fence`; 2-1=1;
  //loop 3: `1: Another sheep jumps over the fence`; 1-1=0;
  //loop 4: `All sheep jumped over the fence`
  
  // 2.
  function powerCalculator(base, exponent) {
    result = base;
    while (exponent > 1) {
      result *= base;
      exponent--;
    }
    return result;
  }
  // O(n) linear. We add one step for each additional number in the exponent.

  const testcalc = powerCalculator(10, 4);
  console.log(testcalc)
  //loop 1: result = 10; 10 * 10 = 100; exponent = 4-1 = 3; 
  //loop 2: result = 100; 100 * 10 = 1000; exponent = 3-1 =2
  //loop 3: result = 1000; 1000 * 10 = 10000; exponent = 2-1 = 1;
  //loop 4: result = 10000; 
  
  // 3.
  function reverseString(string) {
    let newString = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string.charAt(i)
    }
  
    return newString;
  }
  // O(n). For each char we add, our for loop iterates one more time.
  
  const reverseWizard = reverseString("wizard")
  console.log(reverseWizard)
  //loop 1: i=6-1=5; charAt(5) = "d"; newString = "" + "d";
  //loop 2: i=5-1=4; charAt(4) = "r"; newString = "d" + "r";
  //loop 3: i=4-1=3; charAt(3) = "a"; newString = "dr" + "a";
  //loop 4: i=3-1=2; charAt(2) = "z"; newString = "dra" + "z";
  //loop 5: i=2-1=1; charAt(1) = "i"; newString = "draz" + i;
  //loop 6: i=1-1=0; charAt(0) = "w"; newString = "drazi" + "w"
  //return draziw;

  // 4.
  function nthTriangularNumber(n) {
    let result = 1;
  
    for (let i = 1; i < n; i++) {
      result += i + 1;
    }
    
    return result;
    
  }
  // O(n). Basically because we have a for loop that goes until n.
  
  const fifthTriangularNumber = nthTriangularNumber(5);
  console.log(fifthTriangularNumber);

  //loop 1: i=1; result = 1 + 1 + 1 = 3;
  //loop 2: i=2; result = 3 + 2 + 1 = 6 ;
  //loop 3: i=3; result = 6 + 3 + 1 = 10;
  //loop 4: i=4; result = 10 + 4 + 1 = 15;
  //return 15 

  // 5.
  function stringSplitter(string, splitter) {
    let result = []
  
    while (string.indexOf(splitter) >= 0) {
      let splitterIndex = string.indexOf(splitter);
  
      result.push(string.substring(0, splitterIndex));
      string = string.substring(splitterIndex + 1);
    }
    result.push(string) // Get our last section of string into the array after the splitter is no longer present.
    
    return result;
  }
  // O(n) where n is the number of splitter chars in the string.
  
  let testSplit = stringSplitter("02/20/2020/4/5/6/7", "/")
  console.log(testSplit);

  //loop 1: splitterIndex = 2; result = ["02"]; string = "20/2020/4/5/6/7";
  //loop 2: splitterIndex = 2; result = ["02", "20"]; string = "2020/4/5/6/7";
  //loop 3: splitterIndex = 4; result = ["02", "20", "2020"]; string = "4/5/6/7";
  //loop 4: splitterIndex = 1; result = ["02", "20", "2020", "4"]; string = "5/6/7";
  //loop 5: splitterIndex = 1; result = ["02", "20", "2020", "4", "5"]; string = "6/7";
  //loop 6: splitterIndex = 1; result = ["02", "20", "2020", "4", "5", "6"]; string = "7";
  //return ["02", "20", "2020", "4", "5", "6", "7"]


  // 6.
  function fibonacci(n) {
    if (n <= 2) {return 1}
  
    let counter = n;
    let result;
    let firstPrevious = 1;
    let secondPrevious = 1;
  
    while (counter > 2) {
      result = firstPrevious + secondPrevious;
  
      secondPrevious = firstPrevious;
      firstPrevious = result;
  
      counter--;
    }
  
    return result;
  }
  // O(n)
  
  const fibTest = fibonacci(7);
  console.log(fibTest);

  //loop 1: counter = 7; result = 1 + 1; secondPrevious = 1; firstPrevious = 2;
  //loop 2: counter = 6; result = 1 + 2; secondPrevious = 2; firstPrevious = 3;
  //loop 3: counter = 5; result = 2 + 3; secondPrevious = 3; firstPrevious = 5;
  //loop 4: counter = 4; result = 3 + 5; secondPrevious = 5; firstPrevious = 8;
  //loop 5: counter = 3; result = 5 + 8; secondPrevious = 8; firstPrevious = 13;
  //return 13

  
  // 7.
  function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }
  // O(n)

  const testFact = factorial(5)
  console.log(testFact);

  //loop 1: i = 5; result = 1 * 5 = 5;
  //loop 2: i = 4; result = 5 * 4 = 20;
  //loop 3: i = 3; result = 20 * 3 = 60;
  //loop 4: i = 2; result = 60 * 2 = 120;
  //loop 5: i = 1; result = 120 * 1 = 120;
  //return 120
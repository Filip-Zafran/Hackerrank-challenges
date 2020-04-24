const ar = [1, 1, 2, 1, 2, 1, 3, 2, 3];

// 1. SORT ARRAY
const sortedArray = ar.sort();
// console.log(sortedArray);

const sameNumbersArray = [];
let numberOfSameNumbers = 0;

// 2.  PUSH SAME NUMBERS IN AN ARRAY
// this loop doesnt add the last number as it

for (i = 0; i < sortedArray.length; i++) {
  if (sortedArray[i] == sortedArray[i + 1]) {
    const sameNumber = sortedArray[i];
    sameNumbersArray.push(sameNumber);
    // console.log("SAMENUM", sameNumber)
  } else {
    break;
  }
}

// 2.B) ADDING THE LAST NUMBER
if (sortedArray[i] !== sortedArray[i + 1]) {
  const sameNumberlastNumberInArray = sortedArray[i - 1];
  sameNumbersArray.push(sameNumberlastNumberInArray);
}
// 3. DIVIDE WITH 2 AND ASIGN TO A VARIABLE
numberOfSameNumbers = sameNumbersArray.length / 2;

let lastIndexNumber = sameNumbersArray[i];
console.log("lastIndexNumber", lastIndexNumber);

// !! NE STORE VALUE VEC BROJ INDEXA !!!!!
// onda ga treba bacit van jedan scope
// let lastIndex = sortedArray[i];
// console.log("lastIndex", lastIndex);

console.log("sameNumbersArray", sameNumbersArray.length / 2);
console.log("final number", numberOfSameNumbers);

//  4. STORE NUMBER IN AN ARRAY
let endArray = [];

endArray.push(numberOfSameNumbers);
console.log(endArray);

// 5. START LOOP FROM LAST INDEX

// 6. SUM UP THE LAST ARRAY

var challengeResult = endArray.reduce(function (a, b) {
  return a + b;
}, 0);

// 6. EXPLANATION:
// https: //www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php

console.log("Challenge result:", challengeResult);

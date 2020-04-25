let ar = [1, 1, 2, 1, 2, 1, 3, 2, 3, 1];

// 1. SORT ARRAY
let sortedArray = ar.sort();
console.log(sortedArray);

let sameNumbersArray = [];
let numberOfSameNumbers = 0;

// 2.  PUSH SAME NUMBERS IN AN ARRAY
// this loop doesnt add the last number as it
let lastIndexNumber = 0;

// for (i = lastIndexNumber; i < sortedArray.length; j = lastIndexNumber + 1) {
for (j = lastIndexNumber; j < sortedArray.length; j = j + 1) {
  if (sortedArray[j] == sortedArray[j + 1]) {
    const sameNumber = sortedArray[j];
    sameNumbersArray.push(sameNumber);
  } else {
    lastIndexNumber = j;
    // console.log("lastIndexNumber", lastIndexNumber);
    break;
  }
}
// }

// 2.B) ADDING THE LAST NUMBER
if (sortedArray[j] !== sortedArray[j + 1]) {
  const sameNumberlastNumberInArray = sortedArray[j];
  sameNumbersArray.push(sameNumberlastNumberInArray);
}
console.log("sameNumbersArray", sameNumbersArray);

// 3. DIVIDE WITH 2 AND ASIGN TO A VARIABLE
numberOfSameNumbers = sameNumbersArray.length / 2;
console.log("numberOfSameNumbers", numberOfSameNumbers);

// 3.B) STORE LAST INDEX

let lastIndexNumberArray = [];
lastIndexNumberArray.push(sameNumbersArray.length);

console.log("lastIndexNumberArray", lastIndexNumberArray);

// SUM OF THE ARRAY - 1 for ZERO INDEX
lastIndexNumber = lastIndexNumberArray.reduce(function (a, b) {
  return a + b;
}, 0);
// last number before the bracket ')' is the initial value
//  initial value should Last index
console.log("lastIndexNumber", lastIndexNumber);

// lastIndexNumberIntoIndex = "[" + lastIndexNumber + "]";

// console.log("lastIndexNumberIntoIndex", lastIndexNumberIntoIndex);
console.log("sameNumbersArray", sameNumbersArray.length / 2);
console.log("final number", numberOfSameNumbers);

//  4. STORE NUMBER IN AN ARRAY
let endArray = [];

// 4.B) ROUND DOWN ADDED
endArray.push(Math.floor(numberOfSameNumbers));
console.log(endArray);

// 5. START LOOP FROM LAST INDEX OR PUT LAST INDEX IN SAME SCOPE (?)

// 6. SUM UP THE LAST ARRAY
var challengeResult = endArray.reduce(function (a, b) {
  return a + b;
}, 0);

console.log("Total number of matching pairs of socks:", challengeResult);

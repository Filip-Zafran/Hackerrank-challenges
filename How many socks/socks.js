const ar = [1, 1, 2, 1, 2, 1, 3, 2, 3];

// 1. SORT ARRAY
const sortedArray = ar.sort();
// console.log(sortedArray);

const sameNumbersArray = [];
let numberOfSameNumbers = 0;

// sameNumbersArray.push(4);
// console.log(sameNumbersArray)


// 2.  PUSH SAME NUMBERS IN AN ARRAY

for (i = 0; i < sortedArray.length; i++) {

    if (sortedArray[i] == sortedArray[i + 1]) {
        const sameNumber = sortedArray[i];
        sameNumbersArray.push(sameNumber);
        // console.log("SAMENUM", sameNumber)
    } else {
        break;
    }
}

// Dodati zadnji broj
if (sortedArray[i] !== sortedArray[i + 1]) {
    const sameNumberlastNumberInArray = sortedArray[i - 1];
    sameNumbersArray.push(sameNumberlastNumberInArray);

}
// 3. podjelit sa 2 i spremit u conts
numberOfSameNumbers = sameNumbersArray.length / 2;


console.log("sameNumbersArray", sameNumbersArray.length / 2)
console.log("final number", numberOfSameNumbers)

// 4. pokrenut loop od zadnjeg indexa
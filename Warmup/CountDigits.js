
const numbers = 239861;

let noOfDigit = findDigits(numbers);


const num = Math.abs(numbers)

function findDigits(num){

    // handle the corner case 
    if(num == 0) return 1;
    let count = 0;

    while(num > 0){
        num =Math.floor(num/10);
        count++;
    }

    return count;
}

console.log(`the no of digits in the ${numbers} is ${noOfDigit}`);
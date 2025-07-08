const arr = [5,2,4,3,2,0,1,8]
let sum = 0;

function findSum (arr,sum){


    // base  condition

    if(arr.length == 0) return sum;

    let number = arr[arr.length-1];

    if(number %2 != 0) sum += number;

    arr.pop();

    return findSum(arr,sum)




}

const sumOfOddNumber = findSum(arr,sum);

console.log("the sum of the odd number in the array is:",sumOfOddNumber)
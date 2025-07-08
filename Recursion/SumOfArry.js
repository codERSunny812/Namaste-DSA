const arr = [5,3,2,0,1]
let sum = 0;
debugger
function findArrSum(arr,sum){

    //base casse
    if(arr.length == 0) return sum;

    let number = arr[arr.length -1];
    arr.pop();
    sum+= number;
    return findArrSum(arr,sum)
}

const arrSum = findArrSum(arr,sum)

console.log(arrSum)
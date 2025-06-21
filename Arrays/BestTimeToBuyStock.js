// const arr = [7,1,5,3,6,4];
// const arr = [7,6,4,3,1];
const arr = [2,4,1]
let buyStock = findMin(arr);

function findMin(arr){
    let Max = Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i] < Max){
            Max = arr[i];
        }
    }
    return Max
}
console.log(buyStock);
const idx = arr.indexOf(buyStock);
console.log(idx);

let sellStock = findMax(arr,idx);

function findMax(arr,idx){
    let Min = -Infinity;

    for(let i = 0;i<arr.length;i++){
        if(arr[i] > Min && i > idx){
            Min = arr[i];
        }
    }

    return Min;
}

console.log(sellStock);

let profit = ( !sellStock || sellStock == -Infinity) ?  0 : sellStock- buyStock





console.log(profit);


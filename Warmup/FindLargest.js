const arr = [1,2,3,4,5,99,100];

function findLargest(arr){
let MIN = -Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>MIN){
        MIN = arr[i];
    }
}
return MIN;
}

const largest = findLargest(arr);

console.log(largest)
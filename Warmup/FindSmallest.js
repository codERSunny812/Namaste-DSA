const arr = [2,4,6,8,9,10,1,11];

function findSmallest(arr){
let MIN = Infinity;
for(let i = 0;i<arr.length;i++){
    if(arr[i] < MIN){
        MIN= arr[i];
    }


}

return MIN;

}


const smallest = findSmallest(arr)

console.log(smallest)
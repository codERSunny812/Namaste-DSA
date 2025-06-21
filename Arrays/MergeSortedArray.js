let arr1 = [1,2,2,5,0,0,0,0];
const m = 4;
const arr2 = [2,4,5,5];
const n = 4;

const arr1Cpy = arr1.slice(0,m);

let p1 = 0;
let p2 = 0;

for(let i=0;i<arr1.length;i++){
    if( p2 >= n || (p1 < m && arr1Cpy[p1] < arr2[p2])){
        arr1[i] = arr1Cpy[p1++];
    }else{
        arr1[i]=arr2[p2++];
    }
}

console.log(arr1)
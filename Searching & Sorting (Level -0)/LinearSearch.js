const arr = [2,4,5,6,8,9] 
const target = 21;


const index = function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i] == target) return i;
    }

    return -1;
}


console.log(index(arr,target))
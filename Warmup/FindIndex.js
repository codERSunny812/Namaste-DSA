

const arr = [3,2,5,8,9,1];

function searchIndex(arr,num){

for(let i=0;i<arr.length;i++){

    if(arr[i] == num){
        return i;
    }

    
 
}

return -1;
}

const index = searchIndex(arr,12)

console.log("the index of the element is:",index);
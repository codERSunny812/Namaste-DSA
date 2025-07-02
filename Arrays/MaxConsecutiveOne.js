const arr = [1,0,0,1,1,1,,0,0,0,0,0,1,1,1,1,1,1,1,0];

let count = 0;
let maxCount = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] != 0){
        count++;
    }else{
        count = 0;
    }


    // checking for the maxCount 

    if(count > maxCount){
        maxCount = count;
    }
}

console.log(maxCount)
let arr = [0,1,0,3,0,12,9,0,5];



let idx = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] != 0){
        // swapping the element with the non zero element
        arr[idx] = arr[i];
        idx++;
    }
}



for(let j=idx;j<arr.length;j++){
    arr[j] = 0;
}


console.log(arr);
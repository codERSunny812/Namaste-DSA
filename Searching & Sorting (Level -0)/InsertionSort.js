const arr = [2,1,6,9,11,-1];

const sortedArr = (arr)=>{

    for(let i=1;i<arr.length;i++){
        let currentIdx = arr[i];
        let prevIdx = i-1;

        while(arr[prevIdx] > currentIdx && prevIdx >= 0){
            arr[prevIdx+1] = arr[prevIdx];
            prevIdx--;
        }
        arr[prevIdx+1] = currentIdx
    }


    return arr;

}



console.log(sortedArr(arr));
const arr = [90,1,122,10,-1,4,9,10]



const result = function selectionSort(arr){

    if(arr.length <= 0) return -1;

    for(let i=0;i<arr.length;i++){
        let min = i;
        
        // loop just to find the minimun 

        for(let j=i+1;j<arr.length;j++){

            // finding the minimum 
            if(arr[j] < arr[min]){
                min = j;
            }

        }

        // swapping with the first element 
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
    }


    return arr;



}


console.log(result(arr))
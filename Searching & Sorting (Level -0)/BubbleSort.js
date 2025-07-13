const arr =[5,2,1,4];

function bubbleSearch(arr){

    for(let i=0;i<arr.length-1;i++){
        let isSorted = false;
        for(let j=0;j<arr.length-1-i;j++){
        
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                isSorted=true;
            }



        }


        if(!isSorted) break;
    }

}



bubbleSearch(arr);

console.log(arr)
const arr = [-21,-20,-2,-1,2,4,6,8,12,14,16,14,19,20,22,24];
const target = -21;

const idx = function binarySearch(arr,target){

    let first = 0;
    let end = arr.length-1;

    while(first <= end ){
        console.log("first is:",first)
        console.log("end is:",end)
        let mid = Math.floor((first+end)/2);
        console.log("mid is:",mid)


        if(arr[mid] == target){
            console.log("")
            return mid;
        }else if(arr[mid] < target){
            first=mid+1;
            console.log(" ")
        }else{
            console.log(" ")
            end=mid-1
        }
    }

    return -1

}


console.log(
idx(arr,target)) // function call
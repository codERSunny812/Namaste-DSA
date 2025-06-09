

const arr = [1,2,-10,13,14,-22,0,-4,19,-12];

function countNegative(arr,number){

    for(let i=0;i<arr.length;i++){

        if(arr[i]<0){
            number++;
        }
    }

    return number;
}


let number = 0;

const count = countNegative(arr,number)

console.log(count)
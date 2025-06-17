
// const arr = [2,4,8,9,1,-10,12];
const arr2 = []

let firstLargest = -Infinity;
let secondLargest = -Infinity;

function findSecondlargest(arr2,firstLargest,secondLargest){

  //handle break point case 
  if(arr2.length < 1){
    return null;
  }

    for(let i=0; i<arr2.length;i++){
      if(arr2[i] > firstLargest){
        secondLargest = firstLargest;
        firstLargest = arr2[i];
      }else if(arr2[i] > secondLargest){
        secondLargest = arr2[i];
      }
    }

    return secondLargest;

}

const second = findSecondlargest(arr2,firstLargest,secondLargest);

console.log(second)


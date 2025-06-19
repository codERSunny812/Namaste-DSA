const arr = [1,1,2]

const removeDublicates = (arr)=>{

    const newArr = []; // empty array to store the unique element

    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }


    return newArr;


}

console.log(removeDublicates(arr))



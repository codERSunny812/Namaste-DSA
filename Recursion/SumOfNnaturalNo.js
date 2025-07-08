function sumOfNnaturalNumber(n){

    if(n < 1){
        return 0;
    }


    return n + sumOfNnaturalNumber(--n);

}
console.log(
sumOfNnaturalNumber(10)
)
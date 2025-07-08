const number = 5;

function findFactorial (num){


    if(num == 0 || num <1) return 1;

    return num * findFactorial(--num);
}


const fact = findFactorial(number)


console.log(fact)
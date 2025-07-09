const a = 10;





function printFib(a){
if(a== 1) {
    console.log(a);
    return a;
}

if(a == 0){
   console.log(a);
    return a;  
}

return printFib(a-1)+printFib(a-2);

}

const fib =  printFib(a);

console.log(fib)
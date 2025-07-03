
function printNto1(n){

    if(n==0) return;

    console.log(n)
    n = n-1;
    printNto1(n); // recursive code

}


printNto1(6);
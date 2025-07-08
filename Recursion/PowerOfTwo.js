const a = 246;

function powerOfTwo(n){
if(n == 1) return true;

if(n < 1 || n%2 != 0) return false;

return powerOfTwo(n/2)
}


const isPowerOfTwo = powerOfTwo(a);

console.log(isPowerOfTwo)
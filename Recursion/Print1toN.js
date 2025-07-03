function print1toN(n){
    if(n<1) return;

    print1toN(--n);
    console.log("n:",n);
}


print1toN(6)
// star pattern in js 

// 1. Pattern 1
// * * * *
// * * * *
// * * * *
// * * * *

console.log("Pattern 1: ")

console.log(" ")

for(let i = 0;i<4;i++){
    let row = '';
    for(let j=0;j<4;j++){
     row = row+ " * ";
    }
    console.log(row);
}

// 2. pattern 2 

// *
// * *
// * * *
// * * * *

console.log(" ")

console.log("pattern 2:")

console.log(" ")


for(let i = 0;i<5;i++){
    let row = '';
    for(let j=0;j<=i;j++){
     row = row+ " * ";
    }
    console.log(row);
}

console.log(" ")

// Pattern 3:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

console.log("Pattern 3");

console.log(" ")

for(let i=0;i<6;i++){
    let number = "";
    for(let j=1;j<=i;j++){
     number = number + " " +j;
    }
    console.log(number);
}

console.log(" ")

console.log("Pattern 4");

console.log(" ")

// pattern 4:
// 1
// 2 2
// 3 3 3 
// 4 4 4 4
// 5 5 5 5 5


for(let i = 1;i<=5;i++){
    let row = "";
    for(let j = 1;j<=i;j++){
      row += " " + i;
    }
    console.log(row);
}



console.log(" ")

console.log("Pattern 5");

console.log(" ")

// pattern 5:
// * 
// * *
// *   * 
// *     *
// * * * * *

for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=i;j++){
     if(j == 1 || j == i || i == 5){
        row += " *";
     }else{
         row += "  ";
     }
    }
    console.log(row)
}




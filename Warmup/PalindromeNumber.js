
// write a function which will check a no is  palindrome or not 

let number = -121;

let isPalindrome = checkPalidrome(number);


function checkPalidrome(number){
    let reverse=0;
    let lastDigit;

    if(number < 0) return false;



    while(number > 0){
     lastDigit = number % 10;
     reverse = reverse*10 + lastDigit;
     number = Math.floor(number/10);
    }

    console.log(reverse)


    return reverse;



}


if(number == isPalindrome){
    console.log("the no is a palindrome no")
}else{
    console.log("the no is not a palindrome no")
}
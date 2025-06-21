const arr = ['h','e','l','l','o'];
const arr2 = [
  's', 'u', 's', 'h', 'i', 'l', ' ', 'p',
  'a', 'n', 'd', 'e', 'y', ' ', 'i', 's',
  ' ', 'a', ' ', 'g', 'r', 'e', 'a', 't',
  ' ', 'c', 'o', 'd', 'e', 'r'
]


let i = 0;
let j = arr2.length -1;

while(i < j){
    let ch = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = ch;
    i++;
    j--;
}

console.log(arr2);
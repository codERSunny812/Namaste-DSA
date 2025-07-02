const arr = [2, 2, 1, 3, 2, 4, 4, 2, 3];

let hash = {};

for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
        hash[arr[i]] = 1;
    } else {
        hash[arr[i]]++;
    }
}

console.log(hash);

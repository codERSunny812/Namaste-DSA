const arr = [8, 4, 5, 6, 9, 1, 3, 6];

const sortedArr = function (arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2); 
    let left = sortedArr(arr.slice(0, mid));
    let right = sortedArr(arr.slice(mid));

    return mergeSortedArray(left, right);
};

function mergeSortedArray(left, right) {
    let m = left.length;
    let n = right.length;
    let i = 0;
    let j = 0;

    const res = [];

    while (i < m && j < n) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    return [...res, ...left.slice(i), ...right.slice(j)];
}

console.log(sortedArr(arr)); // [1, 3, 4, 5, 6, 6, 8, 9]

function leftRotate(arr, k) {
    let n = arr.length;

    for (let i = 0; i < k; i++) {
        let first = arr.shift();
        arr.push(first);
    }

    return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5], 2));
function leftRotate(arr, k) {

    for (let i = 0; i < k; i++) {
        let first = arr.shift();
        arr.push(first);
    }

    return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5], 2));




function arrayRotate(arr, k) {

    for (let i = 0; i < k; i++) {
        let first = arr.shift();
        arr.push(first)
    }
    return arr;

}

console.log(arrayRotate([1, 2, 4, 3, 7, 8, 9], 3))
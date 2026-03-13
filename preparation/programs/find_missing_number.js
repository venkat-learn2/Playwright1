function findMissing(arr) {
    let N = arr.length + 1;

    for (let i = 1; i <= N; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
}

console.log(findMissing([1, 2, 3, 4, 5, 6, 10, 13]));
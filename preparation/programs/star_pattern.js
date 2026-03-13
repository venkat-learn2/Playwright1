function starPattern(N) {
    for (let i = 0; i <= N; i++) {
        console.log("*".repeat(i))
    }
}

starPattern(5)

function shiftKArray(arr, K) {

    for (let i = 0; i < K; i++) {
        let first = arr.shift();
        arr.push(first)
    }
    return arr;
}

console.log(shiftKArray([2, 3, 1, 2, 3], 2))
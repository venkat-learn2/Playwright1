function fibonacci(n) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        // console.log(a);
        [a, b] = [b, a + b];
    }
    return a;
}

console.log(fibonacci(5))

//array destrucring method - evaluate right side value

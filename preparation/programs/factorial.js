function factorial(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;

}

console.log(factorial(5))


function factorial1(N) {

    let result = 1;

    for (let i = 1; i <= N; i++) {
        result *= i
    }
    return result;

}

console.log(factorial1(4))
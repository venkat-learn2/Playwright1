function isPrime(num) {

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true;
}

console.log(isPrime(17));


function printPrimes(n) {

    for (let num = 2; num <= n; num++) {

        let prime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }

        if (prime) console.log(num);
    }
}

printPrimes(20);
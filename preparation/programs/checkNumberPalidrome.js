function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    
    return str === reversed;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
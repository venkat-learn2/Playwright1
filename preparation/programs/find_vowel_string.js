function findVowlesString(str) {

    let vowels = 'AEIOUaeiou';
    let vowelsArr = []

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsArr.push(char)
        }
    }
    return vowelsArr;

}

console.log(findVowlesString('venkatesh'))
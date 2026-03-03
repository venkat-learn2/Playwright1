function count_vowel(str) {

    let count = 0;
    let vowels = "AEIOUaeiou";

    for (let char of str) {
        if (vowels.includes(char))
            count++
    }

    return count;

}

console.log(count_vowel("automation"))


function vowels(str) {
    let count = 0;
    let vowels = "AEIOaeiou";

    for (let char of str) {
        if (vowels.includes(char))
            count++
    }
    return count
}

console.log(vowels('test'))

function countVowelsfromString(str) {
    let vowels = 'AEIOUaeiou';
    let count = 0
    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}

console.log(countVowelsfromString('aeiou'))

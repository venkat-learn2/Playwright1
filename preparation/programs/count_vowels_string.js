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

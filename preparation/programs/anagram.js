function anagram(str1, str2) {
    let isAnagram = false;
    if (str1.length !== str2.length) {
        isAnagram = false
    } else {
        let result = str1.split("").sort().join("") === str2.split("").sort().join("");
        isAnagram = result;
    }

    return isAnagram;

}

console.log(anagram("night", "thing"))
function countOccurenceEachChar(str) {
    let map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1
    }

    return map;

}

console.log(countOccurenceEachChar('hello'));


function countEachChar(str) {
    let map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1
        
    }

    return map;
}

console.log(countEachChar("challo"))
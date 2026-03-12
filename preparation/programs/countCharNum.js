function countCharNum(str) {

    let letters = 0;
    let numbers = 0;

    for (let char of str) {
        if (isNaN(char)) {
            letters++
        } else {
            numbers++
        }
    }
    return { "num": numbers, "letters": letters }

}

console.log(countCharNum("Gd3s2"))
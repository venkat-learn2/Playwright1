function reverse_string(str) {
    return str.split("").reverse().join("");
}

console.log(reverse_string('venkatesh'));


function revString(str) {

    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result;

}

console.log(revString('hello'))
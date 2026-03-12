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

function reverseAndCapitalize(str) {

    return str
        .split(" ")                    // convert string to array of words
        .reverse()                     // reverse the words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");                    // convert array back to string
}

console.log(reverseAndCapitalize("hello world from javascript"));
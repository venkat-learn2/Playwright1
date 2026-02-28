// function reverse_string(text) {

//     let result = text.split("").reverse().join("")
//     return result

// }

// console.log(reverse_string('venkatesh'))

// function revWithLoop(str) {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result

// }

// console.log(revWithLoop('venkat'))


// function countWords(str) {
//     let result = str.split(" ").length;
//     return result

// }

// console.log(countWords("I love JS"))


// function removeDuplicateChar(str) {

//     let result = [...new Set(str)].join("")
//     return result

// }

// console.log(removeDuplicateChar("hello"))

// function covertStrArr(str) {

//     return str.split("")

// }

// console.log(covertStrArr('venkat'))


// const numbers = [1, 2, 3, 4];

// map - returns new array , transform each element 

// const doubled = numbers.map((item) => {
//     console.log(item * 2)
// })

// filter - returns new array 

// const filter1 = numbers.filter(item => item < 3)
// console.log(filter1)

// const total = numbers.reduce((acc, item) => acc + item, 0);
// console.log(total)


function countDownStarts(n) {
    if (n === 0) return;
    console.log(n);
    countDownStarts(n - 1)
}

countDownStarts(10)
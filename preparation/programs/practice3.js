// function reverseWords(words) {

//     let reverse = words.split(" ").reverse().join(" ")
//     return reverse;

// }

// console.log(reverseWords("I love India"))

// function reverseString(str) {

//     let result = "";

//     for (let i = str.length-1; i >= 0; i--) {

//         result += str[i]
//     }

//     return result;

// }

// console.log(reverseString("venkatesh"))

// function reverseString1(str) {

//     return str.split("").reverse().join("")

// }

// console.log(reverseString1('tamil'))


// function removeDuplicate(arr) {

//     let removeDup = [...new Set(arr)];
//     return removeDup;

// }

// console.log(removeDuplicate([2, 4, 1, 2, 5]))

// function removeDupStr(str){
//     return [...new Set(str)].join("")
// }
// console.log(removeDupStr("automation"))

// function palindromeStr(str) {
//     let result = str.split("").reverse().join("");

//     if (result === str) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(palindromeStr('madam'))

// function palindromeNum(num) {
//     let result = num.toString().split("").reverse().join("");
//     if (result) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromeNum([1221]))

// function ExampleVar() {
//     var result = true;
//     if (result) {
//         var x = 10;
//         var x = 15; // can be redeclarable 
//         x = 20;// can be reassignable
//         console.log(x, '75')
//     }
//     console.log(x, '77')
// }

// ExampleVar()

// function ExampleLet() {
//     var result = true;
//     if (result) {
//         let x = 10;
//         // let x = 20; // cannot be re-declare since it is block level scope
//         x = 20; // but it can be re assignable
//         console.log(x, '86')
//     }
//     console.log(x, '88')
// }

// ExampleLet()

// function ExampleConst() {
//     var result = true;
//     if (result) {
//         const x = 10;
//         // x = 20;// TypeError: Assignment to constant variable.
//         // const x = 20;// Cannot be redeclare since it is block level scope
//         console.log(x, '86')
//     }
//     console.log(x, '88')
// }

// ExampleConst()

// function firstUnique(str) {

//     let map = {};

//     for (let char of str) {
//         map[char] = (map[char] || 0) + 1
//     }

//     for(let char of str){
//         if(map[char]===1){
//             return char
//         }
//     }
//     return null;

// }

// console.log(firstUnique('hhello'));;



// const arr = [1, 3, 4, 5, 6, 2, 9, 1];

// const minVal = Math.min(...arr);
// const maxVal = Math.max(...arr);

// console.log(minVal, maxVal)

// function minMaxFind(arr) {

//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return { min, max }

// }

// console.log(minMaxFind([10, 3, 4, 5, 6, 2, 9, 1]))

// function vowelString(str) {

//     let vowels = 'AEIOUaeiou';
//     let count = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;

// }

// console.log(vowelString('venkatesh'))

// function findVowlesString(str) {

//     let vowels = 'AEIOUaeiou';
//     let vowelsArr = []

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsArr.push(char)
//         }
//     }
//     return vowelsArr;

// }

// console.log(findVowlesString('venkatesh'))

// const arr = [1, 3, 4, 5, 6, 2, 9, 1, 2, 1];

// const findDup = [...new Set(arr.filter((item, index) => {
//     return arr.indexOf(item) !== index
// }))]

// console.log(findDup, '196')

// function findSecondLarge(arr) {
//     let firstLargeNum = -Infinity;
//     let secondLargeNum = -Infinity;
//     for (let num of arr) {
//         if (num > firstLargeNum) {
//             secondLargeNum = firstLargeNum;
//             firstLargeNum = num
//         }
//         else if (num > secondLargeNum && num !== firstLargeNum) {
//             secondLargeNum = num
//         }
//     }
//     return secondLargeNum;
// }

// console.log(findSecondLarge([1, 3, 4, 5, 6, 2, 9, 1, 2, 1]))

// Fibonacci sequence is a series where each number is the sum of the previous two numbers.

// function fibonacci(N) {

//     let a = 0;
//     let b = 1;

//     for (let i = 0; i < N; i++) {
//         [a, b] = [b, a + b]
//     }
//     return a;
// }

// console.log(fibonacci(8))

// function factorial(num) {

//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;

// }
// console.log(factorial(5))

// function countEachChar(str) {

//     let map = {};

//     for (let char of str) {
//         map[char] = (map[char] || 0) + 1
//     }

//     return map;

// }

// console.log(countEachChar('hello'))

// function countCharAndNum(str) {

//     let number = 0;
//     let letters = 0;

//     for (let char of str) {
//         if (isNaN(char)) {
//             letters++
//         } else {
//             number++
//         }
//     }

//     return { letters, number }

// }

// console.log(countCharAndNum('12DD3'))

// const arr = [1, 3, 4, 5, 6, 2, 9, 1, 2, 1];

// console.log(arr.sort())

// function bubbleSort(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([1, 3, 4, 5, 6, 2, 9, 1, 2, 1]))

const arr = ["a", "1", "b", "2", "c", "3"];
// const obj = {};

// for (let i = 0; i < arr.length; i += 2) {
//     obj[arr[i]] = arr[i+1]
// }

// console.log(obj)

// const result = Object.fromEntries(arr)
// console.log(result)



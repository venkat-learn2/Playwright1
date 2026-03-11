// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// const arr = [2, 5, 1, 3, 7, 4]
// console.log(bubbleSort(arr))

// function countEachChar(str) {

//     let map = {};

//     for (let char of str) {
//         map[char] = (map[char] || 0) + 1
//     }
//     return map;

// }

// console.log(countEachChar("hello"))

// function countVowels(str) {

//     let Vowels = 'AEIOUaeiou';
//     let count = 0;

//     for (let char of str) {
//         if (Vowels.includes(char)) {
//             count++
//         }
//     }
//     return count;

// }

// console.log(countVowels('venkat'))

// function factorial(N) {

//     let result = 1;

//     for (let i = 1; i <= N; i++) {
//         result *= i
//     }
//     return result;

// }

// console.log(factorial(5))

const arr = [1, 2, 3, 4, 1];

// const removeDup = [...new Set(arr)];
// console.log(removeDup)

// const dup = arr.filter((item, index) => {
//     return arr.indexOf(item) !== index
// })
// console.log(dup)

// function reverseString(str) {
//     let reverse = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i]
//     }
//     return reverse
// }

// console.log(reverseString("venkat"))

// function reverseString(str){

//     let result = str.split("").reverse().join("")
//     return result;

// }

// console.log(reverseString('venkat'))


// function shiftKPosition(arr, K) {

//     for (let i = 0; i < K; i++) {
//         let first = arr.shift();
//         arr.push(first);
//     }
//     return arr

// }

// console.log(shiftKPosition([1, 3, 4, 5, 2], 2))

let a = 10; let b = 20;

// [a, b] = [b, a]

// console.log(a, b)

// a = a + b;  
// b = a - b;  
// a = a - b;  

// console.log("a:", a);
// console.log("b:", b);

// function firstUnique(str) {

//     let map = {};

//     for (let char of str) {
//         map[char] = (map[char] || 0) + 1
//     }

//     for (let char of str) {
//         if(map[char] == 1) return char
//     }

//     return null;

// }

// console.log(firstUnique('llop'))
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

let numbers = [5, 3, 9, 1, 7];
let result = findMinMax(numbers);

console.log("Min:", result.min);
console.log("Max:", result.max);


let arr = [5, 3, 9, 1, 7];

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log("Min:", min);
console.log("Max:", max);
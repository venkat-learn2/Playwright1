const arr = ["a", "1", "b", "2", "c", "3"];

const obj = {};

for (i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1]
}

console.log(obj);

const obj1 = Object.fromEntries(arr)
console.log(obj1)
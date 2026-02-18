const arr = [1, 2, 3, 4, 2, 5, 3, 6, 6];

const duplicates = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
});

console.log(duplicates);

const arr1 = [1, 2, 3, 2, 4, 3, 5];

const unique = arr1.filter((item, index) => {
    return arr1.indexOf(item) === index;
});

console.log(unique);


const arr2 = [1, 2, 3, 2, 4, 3, 5, 6, 8, 9];

const uniqueArr = arr2.filter((item, index) => {
    return arr2.indexOf(item) === index
})

console.log(uniqueArr)
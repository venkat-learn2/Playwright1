function findSecondLargestValue(arr) {
    let firstLargeNum = -Infinity;
    let secondLargeNum = -Infinity;

    for (let num of arr) {
        if (num > firstLargeNum) {
            secondLargeNum = firstLargeNum;
            firstLargeNum = num;
        }
        else if (num > secondLargeNum && num !== firstLargeNum) {
            secondLargeNum = num;
        }
    }
    return secondLargeNum;

}

console.log(findSecondLargestValue([2, 4, 1, 5, 6, 2]))
// expected out - 5
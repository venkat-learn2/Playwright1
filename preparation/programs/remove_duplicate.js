function remove_duplicate(str) {
    return [...new Set(str)].join("")
}

console.log(remove_duplicate("automation"))


function removeDupNum(number) {
    return [...new Set(number)]
}

console.log(removeDupNum([1, 2, 4, 5, 6, 3, 2, 1]))
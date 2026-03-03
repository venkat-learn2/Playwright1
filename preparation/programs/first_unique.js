function firstUnique(str) {
  const map = {};

  for (let char of str) {
    map[char] = (map[ch] || 0) + 1;
  }

  for (let char of str) {
    if (map[char] === 1) return ch;
  }

  return null;
}

console.log(firstUnique("automation")); // u
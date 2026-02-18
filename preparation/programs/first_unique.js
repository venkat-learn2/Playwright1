function firstUnique(str) {
  const map = {};

  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let ch of str) {
    if (map[ch] === 1) return ch;
  }

  return null;
}

console.log(firstUnique("automation")); // u
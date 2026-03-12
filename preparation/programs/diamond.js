function diamond(n) {

    for (let i = -n; i <= n; i++) {

        let spaces = Math.abs(i);
        let stars = 2 * (n - spaces) + 1;

        console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
}

diamond(4);
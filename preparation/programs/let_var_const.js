function test() {
    if (true) {
        var x = 10;
        console.log(x,'4')
    }
    console.log(x); // 10
}
test();

function test1() {
    if (true) {
        let y = 20;
        // console.log(y,'13')
    }
    console.log(y); // Error
}
test1();
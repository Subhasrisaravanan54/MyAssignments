
function fibonacci(n) {
    let first = 0;
    let second = 1;
    for (let i = 0; i < n; i++) {
        let next = first + second; //0+1=1
        first = second; //1
        second = next; //1+1=2
        console.log(first);
    }
}
console.log(fibonacci(5));

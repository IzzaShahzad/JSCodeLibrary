function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 7:", factorial(7)); 
console.log("Factorial of 0:", factorial(0));
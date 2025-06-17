function getTotalX(a, b) {
    // Write your code here

    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => (a * b) / gcd(a, b);


    let lcmA = a.reduce((acc, val) => lcm(acc, val));


    let gcdB = b.reduce((acc, val) => gcd(acc, val));

    // Count numbers that are multiples of lcmA and factors of gcdB
    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) {
            count++;
        }
    }
    return count;
}
function solve(num){
    let result = Math.abs(num)
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);

    console.log(result)
}
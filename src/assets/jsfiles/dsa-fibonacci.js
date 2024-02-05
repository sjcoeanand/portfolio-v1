// fibonacci series 0, 1, 1, 2, 3, 5, 8, 13 , 21.....
// find the number on nth position or given position 
// F(n) = F(n-1) + F(n-2)

function fib(n){
    let defaultFib = [0,1];
    for(let i = 2; i <= n ; i++){
        defaultFib.push(defaultFib[i-1] + defaultFib[i-2])
    }
    console.log(defaultFib);
    console.log(defaultFib[n]);
    return defaultFib[n]
}
fib(5)
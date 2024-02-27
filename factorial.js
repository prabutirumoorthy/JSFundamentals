const total = factorial(6)
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(`total ${total}`)

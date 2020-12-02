// Fatorial using recursion
function Fact(num){
    if(num === 1) return 1
    return num * Fact(num-1)
}
Fact(5)

// Factorial using loop
function Factorial(num){
    var fact = 1;
    for(var i=num; i>0;i--){
        fact = fact*i
    }
    return fact
}
Factorial(4)

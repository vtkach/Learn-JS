function add(a,b){
    return a + b ;
}
function diff(a, b) {
    return a - b;
}
function multiply(a,b){
    return a * b ;
}
function divide(a, b) {
    return a / b;
}

function modulo(a, b){
    return a % b;
}
var resultAdd = add(3,8),
    resultMultiply = multiply(3,8),
    resultDivide = divide(3,8),
    resultDiff = diff(3,8),
    resultModulo = modulo(3,8);
alert(resultAdd());
alert(resultDiff);
alert(resultDivide);
alert(resultModulo);
alert(resultMultiply);


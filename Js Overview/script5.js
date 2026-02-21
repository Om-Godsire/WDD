function addition(a,b)
{
    return a+b;
}
function subtraction(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function division(a,b)
{
    return a/b;
}

var addn =addition(10,3);
var subn =subtraction(10,3);
var muln =multiply(10,3);
var divn =division(10,2);

console.log(`
    "addition"=${addn}
    "subtraction"=${subn}
    "multiply"=${muln}
    "division"=${divn}
`)
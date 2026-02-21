
let addition=(a,b)=>
{
    return a+b;
}
let subtraction=(a,b)=>
{
    return a-b;
}
let multiply=(a,b)=>
{
    return a*b;
}
let division=(a,b)=>
{
    return a/b;
}

var addn =addition(10,3);
var subn =subtraction(10,3);
var muln =multiply(10,3);
var divn =division(10,2);

console.log(`
    addition=${addn}
    subtraction=${subn}
    multiply=${muln}
    division=${divn}
`)
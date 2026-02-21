let numbers=[1,2,3,4,5];

// even and odd

var x=0,y=0;
//approach 1
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
        x++;
    else
        y++;
}
x=0;
y=0;

//approach 2
for(let item in numbers)
{
    if(item%2==0)
        x++;
    else
        y++;
}
x=0;
y=0;

// approach 3
for(let item in numbers)
{
    item%2==0?x++:y++;
}
x=0;
y=0;

// approach 4
let even_array=numbers.filter(function(item,index)
{
    if(item%2==0)
        return true;
}).length;

console.log(x);
console.log(y);
console.log(even_array);
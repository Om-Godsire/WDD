let user={
    profile:[
        {name:"Om"},
        {name:"Amish"},
        {name:"Harshal"}
    ],
    rating:[
        {count:145},
        {count:189},
        {count:198}
    ]
}

// method 1
for(var i=0;i<user.profile.length && i<user.rating.length;i++)
{
    const name=user.profile[i].name;
    const rating=user.rating[i].count;
    console.log(` ${name}: Rating:${rating}`)
}
// methid 2
let x=user.profile.map(item=>item.name);
let y=user.rating.map(item=>item.count);

output ={}
for(let i=0;i<x.length;i++)
{
    output[x[i]]={rating:y[i]}
}
console.log(output);
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

// get the following format of the ouput
// output={
//     "Om":{rating:145},
//     "Om":{rating:145},
//     "Om":{rating:145},
// }
for(var i=0;i<user.profile.length && i<user.rating.length;i++)
{
    const name=user.profile[i].name;
    const rating=user.rating[i].count;
    console.log(` ${name}: Rating:${rating}`)
}
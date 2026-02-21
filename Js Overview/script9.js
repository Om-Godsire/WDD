// destructure object

let emplyees={
    name:"Om",
    email:"godsire.om@gmail.com",
    skills:["c","cpp","java","azure"],
    role:[
        {company:"wipro",title:"architect"},
        {company:"LTS",title:"analyst"},
    ]
};

// print last three skills

let _skills =[...emplyees.skills];
_skills[0]="a";
_skills[1]="b";
_skills[2]="c";
_skills[3]="d";

console.log(emplyees.skills);   


// add one more skill in employees profile
emplyees={...emplyees, experience: "2yrs"};
console.log(JSON.stringify(emplyees,null,3));

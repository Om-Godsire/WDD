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
emplyees={...emplyees, skills:["swift ui",...emplyees.skills]};
console.log(JSON.stringify(emplyees.skills,null,3));

// replace analyis with engineer

let role=emplyees.role;
role[1].title="engineer";
console.log(JSON.stringify(emplyees.role,null,3));
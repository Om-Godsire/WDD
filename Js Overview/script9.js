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
console.log(_skills);   
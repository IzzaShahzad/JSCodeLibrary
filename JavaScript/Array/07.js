const users=[
    {name:'Izza' , age:21},
    {name:'Robin' , age:29},
    {name:'David' , age:56},
    {name:'Harry' , age:84}
];
const olderthan30=users.filter(user => user.age >30);
console.log("Users older than 30 years:",olderthan30);
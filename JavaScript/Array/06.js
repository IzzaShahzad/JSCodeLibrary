const users=[
    {name:'Izza' , age:21},
    {name:'Robin' , age:31},
    {name:'David' , age:56},
    {name:'Harry' , age:86}
];
const names=users.map(user => user.name);
console.log("Names of users:",names);
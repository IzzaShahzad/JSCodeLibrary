const array = ['apple','mango','apple','grapes','banana','apple','banana'];
const count=array.reduce((accumulator,item)=>{
    accumulator[item]=(accumulator[item]||0)+1;
    return accumulator;
},{});
console.log("Elements are:",count);
console.log('hello world from html');
// let arr =[1,2,3,4,5,6,7,8,9,10]
//filter.find
//mutate
let arr = [
    {name:'Eric',age:25},
    {name:'ABC',age:26},
    {name:'Monica',age:27},
    {name:'Ross',age:28},
    {name:'Hoi dan it',age: 29}
]
let filter = arr.filter((item,index)=>{
    return item && item.age === 25;

});


console.log(filter)
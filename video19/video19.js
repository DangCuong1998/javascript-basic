console.log("hello world from html");

let sum = (a,b) =>{
    return a+b;    
}

let obj = {
    name:'Eric',
    address: 'Ha Noi',
    getname: function(){
        return this.name;
    }
}
console.log("check sum",sum(6,9));
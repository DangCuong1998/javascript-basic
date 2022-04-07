console.log('hello hello world with cường');
//key value
let obj = {

    name:'Eric',
    address: 'Ha Noi',
    email:'cuongdq62@wru.vn',
    gender:'',
    a:function(){
        console.log('Dang Quang Cuong');
    }
};
let b = 'name';
obj[b] = 'harry';
obj.b = 'Ali';

console.log('type of a',typeof a,'type of b', typeof b)
console.log('what is your name',`my name is:`,obj.name,obj);     
console.log('where are you from',`i'm from`,obj.address);
console.log('call function:',obj.a);
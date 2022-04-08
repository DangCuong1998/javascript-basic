console.log('hello world with cuong');
let arrtop4 =['live','chelsea','totenham','Mu'];
let i =0;
while(i < arrtop4.length){
    if(arrtop4[i].length ===2)
    {
    console.log('TOP club', i+1, arrtop4[i]);
    }
    else if(arrtop4[i].length ==4){
        console.log('TOP club', i+1, arrtop4[i]);
    }
    i++;
    }

while(i< arrtop4.length){
    i++;

    if(arrtop4[i]==='chelsea'){
        console.log('found it:',arrtop4[i])
        break;
    }

}

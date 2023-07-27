for(var i=0;i<5;i++)
{
    console.log(i);
}



const array=[1,2,4,8,"Dilip", "Ballia" ,"Varma"];
var result=1;
for(var j=0;j<array.length;j++){
    if(typeof array[j]==="number"){
    result=result*array[j];
}
}

console.log(result);




const arr=[5,25,36,"Dilip","Ballia","Varma", 8];

var res=1;
for( var x=0;x<arr.length;x++){
    if(typeof  arr[x]==="number"){
        res*=arr[x];
    }
}

console.log(res)


const arr1=[5,25,36,"Dilip","Ballia","Varma", 8];
var res2=1;
for(var y=0;y<arr1.length;y++){
    if(!isNaN(arr1[y])){
        res2*=arr1[y];
    }
}

console.log(res2);


// boolean

var b='dilip';
Boolean(b);
console.log(b);



//while Loop


let a=0;
while(a==8){
    console.log(a)
    console.log("Hey I am running");
    i++;
}



var dataArry=[1,2,3,45,6,78,9];
for(var b=0;b<dataArry.length;b++){
    console.log(dataArry[b],"index=>",i);
}




//for in loop

const listofAnimal=["Dog","Parrot","Cow","Rabbit"];
for(let value in listofAnimal){
console.log("Data=>>",value);
}

//for of loop

const animal=["rabbit","dog","horse","cow"];
for(let value of animal){
    console.log(value);
}


var employee={Name:"Dilip", Last:"Varma", Mobile:7004922998}
for(let index in employee){
    console.log("Boject Key=>",index);
}

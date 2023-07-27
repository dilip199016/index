// if else statement


var age=31;
if(age>32){
    console.log("You are Not a kid");

}
else if(age>26){
    console.log("You are a young Boy");
}
else if(age>22){
    console.log("You are a Bachlore");
}
else if (age>18){
    console.log("You are a Mature");
}


console.log("Array represent Here");

var arr=[4,5,6,3,9,7,10];
console.log(arr);
console.log("Array Print using For Loop");

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("For Each loop");
arr.forEach(function(element){
console.log(element);
})

console.log("While Loop");
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

console.log("Break and Continue");
let x=0;
while(x<arr.length){
    if(x==2){
        // break;
        // continue;
    }
    console.log(arr[x]);
    x++;
}

console.log("PUSH & POP OPERATION");
let myArr=["Dilip", "Subrata",10,25,"Mallinath",95,"I am Last"];
console.log(myArr.length);

myArr.pop();
console.log(myArr);
myArr.push("Priyesh","Pratik");
console.log(myArr);
 let arr2=[56,8,98,9,100,250,"Dilip"];
 arr2.sort()
  console.log("Sorte Arr2=>",arr2);
console.log(arr2.length);
console.log(arr2.indexOf("Dilip"));


 console.log("Slicing and Spliceing Method");
console.log(arr2.slice(0,3));
console.log(arr2);
console.log(arr2.splice(0,2));

console.log("Replace Method ");
let arr3=["hello I am Dilip varma"];
let z=arr3.replace("Dilip","johan");
console.log(z);


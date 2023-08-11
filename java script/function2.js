var a="";
var b=" ";
if(a){
    console.log("Hey A is empty");
}
if(b){
    console.log("Hey B is Not empty");
}




const array1=[2,3,4,5];
const data1=array1?.filter((a)=>a);
console.log(data1);



// var arrowfunction=(message)=>{
//     console.log(message);
//     console.log(arguments);
// };
// var noramalfunction=function(message){
//    console.log(arguments); 
// console.log(message);
// };

// arrowfunction("Hey we are learingn arrow function");
// noramalfunction("hey we are learning normal function");



var arrowFunction = (message) => {
    console.log(message);
    // console.log(arguments);
  };
  
  var normalFunction = function (message) {
     console.log(arguments);
    console.log(message);
  };
  
  arrowFunction("hey we are learning arrow function");
  normalFunction("hey we are learning normal function");




  const call=(dilip)=>{
    console.log(typeof arguments);
  };
  const ncall=function(varma){
    console.log(typeof arguments);
  };
  call();
  ncall();





  const dilip=function(){
    console.log("Raat ke 2 baj gye h");
  };
  dilip();



  var person=function(){
    Name:"Dilip"
    roll:35
    college:"Newton"
        console.log(person);    
    }
  
person();


var person2=()=>{
    return{
    name: "raju",
    Roll: 45,
    College: "Newton"
   
};
};
console.log(person2)

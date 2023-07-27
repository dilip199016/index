// console.log("HEY I AM FIRST JAVA SCRIPT");


// var  first="Dilip";


// var second="Varma";
// var age=33;
// console.log(typeof second,typeof first,typeof age);
// console.log(first,second);


// var a=30;
// console.log(typeof a);
// a="DILIP";
// console.log(typeof a);
// var check=true;
// console.log("Line number 18",typeof check);

// const checker=typeof check;
// console.log("line number 21",typeof check);
// alert("click on me");
function oddsums(n)
{
let total = 0, result=[];
for(let x = 1; x <= n; x++)
{
let odd = 2*x-1;
total += odd;
result.push(total);
}
return result;
}
// What would be the output if
// oddsums(5);
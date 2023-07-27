console.log("Hello I am learning Java Script");



function avg(a,b){
    return(a+b)/2;
}
c1=avg(15,25);
c2=avg(125,95);
console.log(c1,c2);


var arr=[15,45,25,18,55,988];
console.log(arr);
for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
}


arr.forEach(function(element){
    console.log(element);
}
)
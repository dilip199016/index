console.log("Today class is About Function");



function isNumber(value){
if(isNaN(value)){
    return false;
}
else if(value){
    return true;
}
else{
    return false;
}
}
function isArray(value) {
    return Array.isArray(value);
  }
console.log(isNumber("Dilip"));
console.log(isNumber(""));
console.log(isNumber(1234));
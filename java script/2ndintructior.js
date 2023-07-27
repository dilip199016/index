let arr =[2,4,6,9];
let result=arr.every((num)=>{
    return !(num%2);
});
console.log(result);
function customEvery(cd){
    for(let i=0; i<arr.length;i++){
        if(!cd(arr[i])){
            return false;
        }
    }
    return true;
}
let customResult=customEvery((num)=>{
    return!(num%2)

})
console.log(customResult);
// console.log("Hello I am Dilip Varma");

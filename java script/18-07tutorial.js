// function a(){
//     let last="Dilip";
//    return function b(){
//         console.log(last);
//     };
//     // b();
// }
// //  a();
// const functionvalue=a();
// functionvalue();
// a();


function sum(num1) {
    return function(num2) {
      return function(num3) {
        return num1 + num2 + num3;
      }
    }
  }
  
  const result = sum(12)(24)(16);
  console.log(result); 





  // function multiplw(c){
  //   return(a)=>{
  //     return(b)=>{
  //       return a*b*c;      
  //     };
  //   };
  // }
  // multiplw(2)(5)(15);
  // multiplw();


  function nthMultiply(initaiValue){
    let result1=initaiValue ||1;
    function innerFunction(value){
      if(typeof value==='undefined'){
        return result1;
      }
      else{
        result1*=value;
        return innerFunction;
      }
    }
  return innerFunction;
  }
  console.log (nthMultiply(1)(2)()); // =>2
  console.log (nthMultiply(2)(4)(6)(7)(8)());
  console.log (nthMultiply(2)()); // 2
  
  console.log(nthMultiply(2)(4)(6)(7)(8)());


  var a = "hello";
var sum = 0;
for(var i = 0; i < a.length; i++) {
  sum += (a[i] - 'a');
}
print(sum);
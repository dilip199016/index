// function getnumber(min, max) {
//     return Math.random() * (max - min + 1) + min;
//   }
  
 
//   var randomNumber = getnumber(20, 30);
//   console.log(randomNumber);




  function getnumber1(min,max){
    return Math.floor(Math.random()*(max-min+1))+min

  }
  var randonnumber1=getnumber1(10,100);
  console.log(randonnumber1);




//   function getSum(array) {
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   }
  
//   const array = [100, 200, 300, 400, 500, 12, 30, 40];
//   const maxSum = getSum(array);
//   console.log(maxSum);


  function getSum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + Math.max(currentValue, 0), 0);
  }
  
  const array = [100, 200, 300, 400, 500, 12, 30, 40];
  const maxSum = getSum(array);
  console.log(maxSum);
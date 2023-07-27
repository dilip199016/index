function multply(num1, num2) {
    return num1 * num2;
  }
  
  console.log(multply(10, 20)); 
  console.log(multply(4, 4));   
  
  function createMultiplier(num) {
    return function (value) {
      return multply(num, value);
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(10)); 
  console.log(double(200))

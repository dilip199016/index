const pr = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(200), 10);
  });
  
 pr.then(function (result) {
    console.log(result); 
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 1), 5);
    });
  })
  .then(function (result) {
    console.log(result); 
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    return new Promise(resolve,reject);
    console.log(result); 
  })
  .catch((error) => {
    console.log(error);
  });
  
// console.log("1");
// function callback(){
//     console.log("2");
//     setTimeout(function callback(){
//         console.log("Hey abbu sona");
//     },100);
// }
// setTimeout(callback,2000);
// console.log("2");

// setTimeout(function home(){
//     console.log("3");
//     setTimeout(function nameChild(){
//         console.log("inside name function");
//     },0);
// },0);
// console.log("4");

// setTimeout(function chirkootking(){
//     console.log("5");
//     setTimeout(function chirkootqueen(){
//         console.log("I am queen");
//     },0)
// },2000);



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 1500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 800);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
  
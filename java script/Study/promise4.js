// if all promise is fullfilled than it will give you 
// the result of all promise in array else 
// it will return the value of first rejected promise



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 1500);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 rejected");
//     }, 2000);
// });
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 4 rejected");
//     }, 8000);
// });





function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      setTimeout(() => resolve(randomNumber), Math.random() * 1000);
    });
   }

Promise.all([promise1, promise2, promise3,promise4])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });

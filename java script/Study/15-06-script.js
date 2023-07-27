// // const random = [1, 2, 3, "hey", "chill", 5, "relax",'mango',25,'number','dilip'];

// // const call1 = (value, index, array) => {
// //   console.log("value=>", value, "index=>", index);
// // };



// // random.forEach((value, index, array) => {
// //   console.log("value=>", value, "index=>", index);
// // });





// // const array2 = [1, 2, 3, "hey", "chill", 5, "relax"];
// // // new array =>  [1,2,3,{key: 'hey'} , {key: 'chill'} , 5 , {key: 'relax'}]

// // const array3 = [];

// // for (let i = 0; i < array2.length; i++) {
// //   if (typeof array2[i] === "string") {
// //     array3[i] = { mydata: array2[i] };
// //   } else {
// //     array3[i] = array2[i];
// //   }
// // }
// // console.log(array3);





// // const randomArray=random.map();
// // console.log(randomArray);


// const numbers = [3, 4, 5, 6, 8, 9, 10, 15, 16];

// const result = numbers.map(number => {
//   return { isEven: number % 2 === 0 };
// });

// console.log(result);


var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3,[4,5]);
a.shift();
a.shift();
a.shift();
// function multiply(x) {
//     return function(y) {
//         return function(z) {
//             return x * y * z;
//         }
//     }
// }

// const data = multiply(2)(5)(6);

// console.log(data); 




// // function infiniteCurry(initialValue) {
// //     let result = initialValue;

// //     function curriedFn(nextValue) {
// //         if (typeof nextValue === 'undefined') {
// //             return result;
// //         }
// //          result += nextValue;
// //         return curriedFn;
// //     }
// //     curriedFn.toString = function() {
// //         return result;
// //     };
// //     curriedFn.valueOf = function() {
// //         return result;
// //     };
// //     return curriedFn;
// // }

// // const sum = infiniteCurry(0);

// // console.log(sum(1)(2)(3)()); 
// // console.log(sum(4)(5)(6)()); 
// // console.log(sum(7)(8)(9)());





// function infiniteCurry(initialValue) {
//     let result = initialValue;

//     function curriedFn(nextValue) {
//         if (typeof nextValue === 'undefined') {
//             return result;
//         }

//         result += nextValue;
//         return curriedFn(nextValue); 
//     }

//     curriedFn.toString = function() {
//         return result;
//     };

//     curriedFn.valueOf = function() {
//         return result;
//     };

//     return curriedFn;
// }


// function recursiveSum(...args) {
//     if (args.length === 0) {
//         return 0;
//     }
    
//     return args[0] + recursiveSum(...args.slice(1)); 
// }

// const sum = infiniteCurry(0);

// console.log(recursiveSum(1, 2, 3, sum())); 
// console.log(recursiveSum(4, 5, 6, sum())); 
// console.log(recursiveSum(7, 8, 9, sum())); 


// function infiniteCurry(initialValue) {
//     let result = initialValue;
//     function curriedFn(nextValue) {
//         if (typeof nextValue === 'undefined') {
//             return result;
//         }
//         result += nextValue;
//         return curriedFn;
//     }
//     curriedFn.toString = function() {
//         return result;
//     };
//     curriedFn.valueOf = function() {
//         return result;
//     };
//     return curriedFn;
// }
// function displayCallStack(stack) {
//     console.log("Call Stack:");
//     stack.forEach((fn, index) => {
//         console.log(`Step ${index + 1}: ${fn.toString()} =>`);
//     });
// }
// const sum = infiniteCurry(0);
// const callStack1 = [
//     sum,
//     sum(1),
//     sum(1)(2),
//     sum(1)(2)(3)
// ];
// displayCallStack(callStack1);
// console.log(`Final Result: ${sum(1)(2)(3)()}`); 
// console.log("-------------------");
// const callStack2 = [
//     sum,
//     sum(4),
//     sum(4)(5),
//     sum(4)(5)(6)
// ];

// displayCallStack(callStack2);
// console.log(`Final Result: ${sum(4)(5)(6)()}`); 



const sum = (a) => {
    
    return (b) => {
        
        if (typeof b === 'undefined') {
            return a;
        } else {
            
            return sum(a + b);
        }
    };
};

console.log(sum(2)(3)(4)()); 

console.log(sum(2)()); 

console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(18)()); 
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)()); 



class Shape {
    constructor(color) {
      this.color = color;
    }
   }
   
   class Rectangle extends Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
   }
   
   var rect = new Rectangle(10, 20);
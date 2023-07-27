// const getValue = (num) => {

//     let s = num.toString();
    
//     const array = s.split();
    
//     const sum = array.reduce((acc, value)=>{ return acc+ (+value)}, 0)
    
//     if(sum<10) {
    
//     return sum; I
    
//     } else {
    
//     return getValue(sum);
    
//     }
    
//     }

// function flatObject(obj) {
//     let resultObj = {};
  
//     for (let key in obj) {
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         let nestedObj = flatObject(obj[key]);
  
//         for (let nestedKey in nestedObj) {
//           resultObj[nestedKey] = nestedObj[nestedKey];
//         }
//       } else {
//         resultObj[key] = obj[key];
//       }
//     }
  
//     return resultObj;
//   }
  
//   let user = {
//     name: "Karan",
//     address: { personal: "Delhi", area: "CivilLines" },
//     office: { state: "Mumbai", area: { landmark: "Bandra" } },
//   };
  
//   let flattenedObj = flatObject(user);
//   console.log(flattenedObj);




  function myfind(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }
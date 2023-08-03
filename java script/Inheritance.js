// const employee = {
//     name: "Vishal",
//   };
  
//   console.log(employee);


//   const stud={
//     collega:"Newton",
//     City:"Benglore",
//   };
//   const stud1={
// Name:"Dilip varma",
//   };
//   Object.setPrototypeOf(stud,stud1);
//   console.log("stud1", Object.getPrototypeOf(stud));


//   let animal12 = {
//     walk() {
//       console.log("I can walk");
//       console.log("animal12", this);
//     },
//     eat() {
//       console.log("I can walk");
//     },
//   };
  
//   const cow123 = {
//     name: "apni gaye",
//     callMe() {
//       console.log("cow", this);
//     },
//     __proto__: animal12,
//   };
  
//   cow123.callMe(); // cow
//   cow123.walk(); //




  let anima={
    eats:true,
  };
  let cows={
    sound:"BOW BOW !!",
  };

  cows.__proto__=anima;
  console.log(cows);
  console.log(anima);
// console.log("hey");

// let waiting=100000;
// const callback=()=>{
//     console.log("I am Call after the" ,waiting,"ms");

// };
// setTimeout(callback,waiting);
// console.log("after set time");;

function settimecstm(callback, delay) {
    const starttime = Date.now();
  
    function checktim() {
      const realtime = Date.now();
      if (realtime - starttime >= delay) {
        callback();
      } else {
        requestAnimationFrame(checktim);
      }
    }
  
    requestAnimationFrame(checktim);
  }
  
  const object = {
    name: "dilip",
    fullname: function() {
      console.log(this.name);
    },
  };
  
  settimecstm(() => object.fullname(), 1000);
  
  settimecstm(object.fullname, 1000);
  


  var count=0;
   const callme=(resume)=>{
console.log("username",username);
   };
   const getuse=()=>{
    console.log("user,hello");
return "Dilip"   ;
};
callme();
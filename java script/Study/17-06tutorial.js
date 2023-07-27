var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//=> [false , true , false , true , false , true , false , true , false , true]

function mymap(callbackfunc, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callbackfunc(array[i], i, array);
  }
  return result;
}

const func = (v, index, array) => {
  return v % 2 === 0;
};

const mapExample2 = mymap(func, number1);

const mapExample = number1.map(func);

console.log("mapExample", mapExample);
console.log("mapExample2", mapExample2);

// higher order function

var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number1.map(func);

// const mapExample2 = mymap(func, number1);

// how filter work

// filter will be only applied on the
var concatenate=20+30+"30";
var concatenate2='20'+30+30;
console.log("concatenate=>",concatenate);
console.log("concatenate2=>",concatenate2);
console.log("Data type checking=",typeof concatenate);
var t=20+ +"30"+40+"40"+ + "40";
console.log("print t addition value=",t);
console.log("data type checking=",typeof+ "40");


var tt=("20" + "50" +"40")+ + "120" + "230";
console.log(tt);
var tts=-("20"+"30"+"50")-("30"-"30"+50);
console.log("TTS=>>",tts);


let a=30;
let b="20"
let c=a-b;
console.log("subrato",c);
let d=a+b;
console.log("subrato2===",d);

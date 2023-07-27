const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const slice1 = nums.slice();

console.log("slice1", slice1);

const slice2 = nums.slice(0, 7);

console.log("slice2", slice2); //

const slice3 = nums.slice(2, 2);

console.log("slice2", slice3); //

const slice4 = nums.slice(2, -2);

console.log("slice4", slice4); //

const slice5 = nums.slice(-8, -2); 

console.log("slice5", slice5);




const students=["TVS","zAREENA","Dilip", "Mallinat", "Vishal", "sudhansu"];
students.sort();
console.log(students);



const myEmployee = [
    { name: "Vishal", salary: 20000 },
    { name: "tiro", salary: 100000 },
    { name: "verr", salary: 30000 },
    { name: "tom", salary: 200000 },
    { name: "rim", salary: 10000 },
    { name: "chim", salary: 30000 }
  ];
  
  myEmployee.sort((a, b) => a.salary - b.salary);
  
  console.log(myEmployee);
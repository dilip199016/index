const student={
    Name: "Dilip",
    College:'LPU',
RollNo:162140,
"NoofSubject":5,
};
console.log(student.Name);
console.log(student);
console.log( student["NoofSubject"]);
console.log(delete student.Name); // delete Name Attribute here
console.log(student);

const vechile={
    type:"car",
    tyre:4,
    get getTyre(){
        return this.tyre;
    },
    set settyre(count){
        // this tyre=count;
    }
}



obj2={
    Name:'Dilip',
    City:'Ballia',
    Code:15,
}
console.log( Object.keys(obj2));


obj1={
    Name1:'Dilip',
    Cty:'Balliaa',
    Zone:457,
   
}
let array=[];
for(let key in obj1){
    array.push(key)

    console.log(key);
}

var employee={
    Name:'Dilip',
    City:'Balliaaaaa',
    Profession:'Engineer',
};
var employeeKeys=Object.keys(employee);
console.log("employeeKeys",employeeKeys);

var employeeValue=Object.values(employee);

console.log("Employee Value",employeeValue);



var abc={
    Name:"Dilip",
    Last:"Varma",
};
console.log("ABC Details Print")
for(var key in abc){
    // console.log("ABC Data");
    console.log(  key +" :"+ abc[key]);
}
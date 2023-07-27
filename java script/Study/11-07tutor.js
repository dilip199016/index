let array1 = [1, 2, 3, 4, 56];
function modifyArray1(arr) {
  let result,
    data = [];
  const array = arr.filter((item) => {
    return item % 2 == 0;
  });
  result = array;
  return [...result, ...data];
}

const result1 = modifyArray1(array1);

result1[1] = "Not A number";

console.log(result1); //
console.log(array1); //
console.log("Hey I am data", data); ///
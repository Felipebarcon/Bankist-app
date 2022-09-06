let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE ==> return a new array but don't change original array
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE ==> Return part of the array and Change the original array
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2); // second argument ==> nbr of elements we want to delete
console.log(arr);

// REVERSE ==> Mutated the original array
let arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr1.concat(arr2);
console.log(letters);
console.log([...arr1, ...arr2]);

// JOIN
console.log(letters.join('-'));

// AT METHOD
const arry = [23, 11, 64];
console.log(arry.at(0));

// Getting the last element
console.log(arry[arry.length - 1]);
console.log(arry.slice(-1)[0]);
console.log(arry.at(-1));

console.log('Felipe'.at(0)); // Works on string!
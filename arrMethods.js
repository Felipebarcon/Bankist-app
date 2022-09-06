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

// FOR EACH

const accountMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('----------FOR OF LOOP ----------');

for (const [i, movement] of accountMovements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----------FOR EACH LOOP ----------');

// Arguments needs to be passed always in this order: current element, index, global-element
accountMovements.forEach(function(mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
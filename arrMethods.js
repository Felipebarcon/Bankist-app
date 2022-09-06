// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

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

console.log('----------FOR EACH LOOP ON MAPS ----------');

const currenciesMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

currenciesMap.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('----------FOR EACH LOOP ON MAPS ----------');

const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array
(one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's
  array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy
  ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

console.log('----------CHALLENGE 1 ----------');

dogsJulia = [3, 5, 2, 12, 7];
dogsKate = [4, 1, 15, 8, 3];
dogsJulia2 = [9, 16, 6, 8, 3];
dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function(arr1, arr2) {
  const correctedJuliaDogs = arr1.slice(1, -2);
  const dogs = correctedJuliaDogs.concat(arr2);

  dogs.forEach(function(value, i) {
    value < 3 ? console.log(`Dog number ${i + 1} is still a puppy 🐶`) : console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);

  });
};

// checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);
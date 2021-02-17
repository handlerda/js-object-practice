/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter 
and returns an array containing:  all the keys from the object **and** all the 
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:

***********************************************************************/

function breakDownObj(obj) {
  let finalArray = [];
  for (const key in obj) {
    finalArray.push(key);
  }
  for (const key in obj) {
    finalArray.push(obj[key]);
  }
  return finalArray;
}

let object1 = { name: "Rupert", age: 5, speak: "Meow" };
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = { location: "NY", borough: "Brooklyn" };
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;

/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let finalArray = [];
  const checkedKey = key;
  for (const key in obj1) {
    if (key === checkedKey) {
      finalArray.push(obj1[key]);
    }
  }
  for (const key in obj2) {
    if (key === checkedKey) {
      finalArray.push(obj2[key]);
    }
  }
  return finalArray;
}

let object1 = { name: "One", location: "NY", age: 3 };
let object2 = { name: "Two", location: "SF" };
valuePair(object1, object2, "location"); // => [ 'NY', 'SF' ]
valuePair(object1, object2, "name"); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;

console.clear();
console.log("Nodemon run dev... ");
console.log();

// Make your code here...
// Array with random numbers
const generateRandomArray = (length) =>
  Array.from(Array(length), () => parseInt(Math.random() * length));
const randomList = generateRandomArray(10000);

console.log(
  "Six ways to remove duplicate items in javascript: (array with 10.000 items): "
);
console.log();

// Other way for use Set:
console.time("removeDuplicatesWithOutherSet");
const removeDuplicatesWithOutherSet = Array.from(new Set(randomList));
//console.log(removeDuplicatesWithSpreadAndSet);
console.log("#1 - Using Set: ");
console.timeEnd("removeDuplicatesWithOutherSet");
console.log("");
console.log("--");

// Using Spread Operator e Set:
console.time("removeDuplicatesWithSpreadAndSet");
const removeDuplicatesWithSpreadAndSet = [...new Set(randomList)];
//console.log(removeDuplicatesWithSpreadAndSet);
console.log("#2 - Using Spread Operator e Set: ");
console.timeEnd("removeDuplicatesWithSpreadAndSet");
console.log("");
console.log("--");

// Using Hashtables:
console.time("removeDuplicatesWithHashtables");
const removeDuplicatesWithHashtables = (array) => {
  var obj = {};
  return array.filter(function (item) {
    return obj.hasOwnProperty(item) ? false : (obj[item] = true);
  });
};
removeDuplicatesWithHashtables(randomList);
console.log("#3 - Using Hashtables: ");
console.timeEnd("removeDuplicatesWithHashtables");
console.log("");
console.log("--");

// Using Foreach:
console.time("removeDuplicatesWithForeAch");
const removeDuplicatesWithForeAch = (arrray) => {
  let unique = [];
  arrray.forEach((c) => {
    if (!unique.includes(c)) {
      unique.push(c);
    }
  });
  return unique;
};
removeDuplicatesWithForeAch(randomList);
console.log("#4 - Using Foreach:");
//console.timeEnd("removeDuplicatesWithForeAch");
console.timeEnd("removeDuplicatesWithForeAch");
console.log("");
console.log("--");

// Using Filter and IndexOf:
console.time("removeDuplicatesWithFilter");
const removeDuplicatesWithFilter = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);
removeDuplicatesWithFilter(randomList);
console.log("#5 - Using Filter and IndexOf: ");
console.timeEnd("removeDuplicatesWithFilter");
console.log("");
console.log("--");

// Using Reduce, Includes and spread:
console.time("removeDuplicatesWithReduce");
const removeDuplicatesWithReduce = (array) =>
  array.reduce((unico, item) => {
    return unico.includes(item) ? unico : [...unico, item];
  }, []);
removeDuplicatesWithReduce(randomList);
console.log("#6 - Using Reduce, Includes and spread:");
console.timeEnd("removeDuplicatesWithReduce");
console.log("");
console.log("--");

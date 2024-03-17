// console.log("varName ", varName);
// var varName;
// console.log("varValue ", varName);
// varName = "Captain America";
// console.log("varValue ", varName);
// fn();
// function fn() {
//   console.log("Hello from fn");
// }
// fn();
// fnContainer();
// var fnContainer = function () {
//   console.log("I am function container");
// };
// fnContainer();

// function fn() {
//   let fruits = "orange";
//   function x() {
//     let fruits = "apple";
//     console.log(fruits);
//   }
//   x();
//   console.log(fruits);
// }

// fn();
// const arr = [1, 2, 3, 4, 5];

// const fn = (x) => {
//   return x * x;
// };
// const myMap = (arr, fn) => {
//   const ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(fn(arr[i]));
//   }
//   return ans;
// };

// Array.prototype.mymap = myMap;

// const fn = (x) => {
//   return x % 2 === 0;
// };

// const filter = (arr, fn) => {
//   const ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       ans.push(arr[i]);
//     }
//   }
//   return ans;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fn));

// const arr = [1, 2, 3, 4, 5];
// const ans = arr.reduce((x, y, z, arr) => {
//   console.log("x: ", x, "y: ", y, "z: ", z, "arr: ", arr);
//   return 1;
// },0);

// const cb = (total, current, idx, arr) => {
//   return total + current;
// };
// const myReduce = (arr, cb, intialValue) => {
//   let ans = intialValue;
//   for (let i = 0; i < arr.length; i++) {
//     ans = cb(ans, arr[i], i, arr);
//   }
//   return ans;
// };

// console.log(myReduce(arr, cb, 0));

// const reduce = (arr, fn, intialValue) => {
//   let ans = intialValue;
// };

// let arr = [1, 2, 3, 4, 5];
// const toString = (arr) => {
//   let ans = "";
//   for (let x of arr) {
//     ans += x;
//     ans += ",";
//   }
//   return ans;
// };

// const pop = (arr) => {
//   let ans = arr[arr.length - 1];
//   delete arr[arr.length - 1];
//   // arr.length = arr.length - 1;
//   return ans;
// };

// console.log(pop(arr))
// console.log(arr.length)

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];
// cars.sort(function (a, b) {
//   a.type.toUpperCase();
//   b.type.toUpperCase();
//   if (a.type < b.type) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(cars);

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("world", 8));

const users = [
  {
    id: 1,
    name: "Ajay",
    isActive: true,
    age: 34,
  },
  {
    id: 2,
    name: "Shubham",
    isActive: true,
    age: 23,
  },
  {
    id: 3,
    name: "Chrollo",
    isActive: false,
    age: 24,
  },
  {
    id: 4,
    name: "Candy",
    isActive: true,
    age: 25,
  },
  {
    id: 5,
    name: "Hisoka",
    isActive: false,
    age: 28,
  },
];

// const doesNameExist = (name, users) => {
//   // let exist = false;
//   // users.forEach((user) => {
//   //   if (user.name === name) {
//   //     exist = true;
//   //   }
//   // });
//   // return exist;
//   // const user = users.find((user) => {
//   //   return user.name === name;
//   // });
//   // return Boolean(user)

//   // const index = users.findIndex((user) => user.name === name);
//   // return index >= 0;

//   const user = users.some((user) => user.name === name);
//   return user;
// };

// const arr = [1, 2, 3, 4];
// const append = (arr, val) => {
//   const newArr = arr.slice();
//   newArr.push(val);
//   return newArr;
// };

// console.log(append(arr, 5));
// console.log(arr)

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0.1);
// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("I am promise1"), 3000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("I am promise2"), 2000);
// });

// Promise.race([p1, p2]).then((val) => {
//   console.log(val);
// });

// let p1 = new Promise((resolve, reject) => {
//   resolve("I am promise 1");
// });
// let p2 = new Promise((resolve, reject) => {
//   resolve("I am promise 2");
// });

// let p3 = new Promise((resolve, reject) => {
//   // reject("I am rejected promise 3");
//   reject("I am promise 3");
// });

// Promise.any([p2, p1, p3]).then((val) => {
//   console.log(val);
// }).catch((err)=>{
//   console.log(err,"werr")
// })

// let arr = [1, 2, 3];
// // let newArr = arr.slice(0, arr.length);
// // newArr[2] = 5;

// console.log(c)

// let obj = {
//   name: "Shubham",
//   age: 20,
//   address: {
//     city: "Delhi",
//     pincode: "110084",
//     locality: {
//       landmark: "Opposite aggarwal sweets",
//       Gali_no: 11,
//     },
//   },
// };

// const flattenObj = (obj, parent, res = {}) => {
//   for (let key in obj) {
//     let propName = parent ? parent + "_" + key : key;
//     if (typeof obj[key] == "object") {
//       flattenObj(obj[key], propName, res);
//     } else {
//       res[propName] = obj[key];
//     }
//   }
//   return res;
// };

// const flattenArray = (arr, res = []) => {
//   console.log(res);
//   for (let key in arr) {
//     let element = arr[key];
//     if (Array.isArray(element) === true) {
//       flattenArray(element, res);
//     } else {
//       res.push(element);
//     }
//   }
//   return res;
// };

// let arr = [[1,2,3]];
// let copyarr = JSON.parse(JSON.stringify(arr));
// let copyarr1 = [...arr];
// // console.log(flattenArray(arr));
// copyarr[0][1] = 10
// console.log(copyarr);

// // console.log(copyarr1);
// console.log(arr);

// let x = "shubham"
// x.xyz = 10
// console.log()

// const obj = {
//   name: "Shubham",
// };

// const x = (x) => {
//   x.name = "CHROLLO";
// };
// x(obj);
// console.log(obj);

// const obj = {
//   x: () => {
//     const y = () => {
//       console.log(this);
//     };
//     y();
//   },
// };

// obj.x();

// const obj2 = {
//   x: () => {
//     function y() {
//       console.log(this);
//     }
//     y();
//   },
// };

// obj2.x();
// const arrowFunction = () => {
//   console.log(this);
// };

// arrowFunction()

// const obj = {
//   name: "Shubham",
// };

// function a(...x) {
//   console.log(this.name);
//   console.log(x);
// }

// a.call(obj, 1, 2, 3, 4, 5);

// for (var i = 0; i <= 5; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i <= 5; i++) {
//   (function (num) {
//     setTimeout(() => {
//       console.log(num);
//     }, 1000);
//   })(i);
// }

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a);
//   })(1);
// })(0);

// var count = 0;
// function immediate() {
//   console.log(count, "FIRST");
//   if (true) {
//     var count = 1;
//     console.log(count, "INNER");
//   }
//   console.log(count, "OUTER");
// }
// immediate();

// console.log(count)

// let arr = [5, 8, 12, 19, 22];
// function sumTwoSmallestNumbers(numbers) {
//   let smallest1 = Infinity;
//   let smallest2 = Infinity;

//   for (let num of arr) {
//     if (num < smallest1) {
//       smallest2 = smallest1;
//       smallest1 = num;
//     } else if (num < smallest2) {
//       smallest2 = num;
//     }
//   }
//   return smallest1 + smallest2;
// }

// console.log(sumTwoSmallestNumbers(arr));

// const originalObj = {
//   prop1: 'value1',
//   prop2: 'value2',
// };

// // Shallow copy using spread syntax
// const shallowCopyObj = { ...originalObj };

// // Modify the prop1 in the shallow copy
// shallowCopyObj.prop1 = 'modifiedValue';

// console.log(shallowCopyObj); // Output: "value1"

// let arr =
//   "ashdajskhdjakshdajksd     asjdkjaskldjaslkd, asdhasdjhkas      asdjaklsjdkasjdlkasjd  daksdj";
// let x = arr.trim();
// let count = 0;
// let prev = 0;
// for(let i = arr.length - 1; i >= 0; i--){
//   let k = i;
//   while(x[i] != ' '){
//     k--;
//   }
//   count++;
// }
// /\s+/
// let arr = "";
// console.log(arr.length);

// const numbers = [5, 4, 3, 2, 1];

// numbers.sort();

// console.log(numbers);
// const curry = function (fn) {
// 	return function curried(...args) {

//     if (args.length >= fn.length) {
//       // Call the original function `fn` with the provided arguments and return its result.
//       return fn.apply(this, args);
//     } else {
//       // If not enough arguments are provided,
//       // Return a new function that waits for the remaining arguments.
//       return function (...args2) {
//         // Call `curried` again with the combination of previously provided arguments and newly provided arguments.
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// function memoize(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     const result = fn.apply(this, args)
//     cache.set(key, result);
//     return result;
//   };
// }

// // let sumMemo = memoize(sum);
// // console.log(sumMemo(1, 2));

// let x = (a, b) => {
//   console.log(a, b);
// };

// const curry = function (fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// };

// const mySum = (a) => {
//   return (b) => {
//     if (b) {
//       return mySum(a + b);
//     }
//     return a;
//   };
// };

// console.log(mySum(1)(2)(3)(4)(5)());

// const curry = function (fn) {

//   return curried = (...args) => {
//       if(fn.length != args.length){
//         return curried.bind(this, ...args)
//       }
//       return fn(...args);
//   }
// }


// const sum = (a, b, c) => {
//   return a + b + c;
// };

// const x = curry(sum);
// console.log(x(1)(2)(3));


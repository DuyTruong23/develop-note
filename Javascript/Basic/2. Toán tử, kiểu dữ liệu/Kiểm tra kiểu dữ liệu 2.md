```jsx
var a = 9;
var b = 'asd9a';
var myArr = [1, 2, 3, 4, 5];
var myObject = { name: 'John', age: 25 };
// kiểm tra có phải kiểu number
var isNumber = isFinite(a);
console.log(isNumber);

// kiễm tra có phải 1 array
console.log(Array.isArray(myArr));
// kiểm tra có phải 1 object
console.log(Array.isArray(myObject));
```
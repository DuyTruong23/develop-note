```jsx
// includes method
console.log(Array.prototype.includes);
console.log(String.prototype.includes);
/*
Với string tìm 1 chuỗi có trong chuỗi không?
  - Đối số 1: chuỗi/kí tự cần tìm
  - Đối số 2: vị trí bắt đầu tìm, default 0
Với array tìm 1 phần tử có trong array không?
  - Đối số 1: phần tử cần tìm
  - Đối số 2: vị trí bắt đầu tìm, default 0, ít dùng
*/
var title = 'Hello World';
console.log(title.includes('World')); // true
console.log(title.includes('World', 8)); // false

var myArray = ['Hello', 'World', 'Universe', 'Guys'];
console.log(myArray.includes('World')); // true
console.log(myArray.includes('Guys', 2)); // true
console.log(myArray.includes('Guys', -2)); // true
```
```jsx
// Tham số trong hàm
/*
1. Tham số
  - Định nghĩa
  - Kiễu dữ liệu
  - Định nghĩa 1 tham số
  - Định nghĩa nhiều tham số
2.  Truyền tham số
  - 1 tham số
  - nhiều tham số
3. Arguments
  - Sối tượng arguments
  - Giới thiệu vòng for of
*/
function writeLog(message) {
  console.log(message);
}
writeLog('Test message');
/*  Tham số: xuất hiện, sử dụng trong hàm gọi tham số (message)
 Đối số: giá trị được truyền vào hàm gọi là đối số 'Test message'
 1 tham số sử dụng trong function có tính private (message) */

// Truyền nhiều tham số
function writeLog2(message, status) {
  console.log(message + status);
}
writeLog2('Test message', 'success'); // Test message success
// Khi gọi ra nhưng chỉ truyền không đủ đối số, console sẽ in ra undefined
writeLog2('Test message'); // Test message undefined

//! Argument - có tính chất giống mãng
console.log(1, 2, 3, 4, 5);
function myFunc() {
  console.log(arguments);
}
myFunc(1, 2, 3, 4, 5);

// Sử dụng for of, chạy với số lần bằng với số đối số truyền vào
function myFunc2() {
  for (let i of arguments) {
    console.log(i);
  }
}
myFunc2(1, 2, 3, 4, 5);
// => 1 2 3 4 5
function myFunc2() {
  for (let i of arguments) {
    myString += `${i} - `;
  }
  console.log(myString);
}
myFunc2(1, 2, 3, 4, 5);
// => 1 - 2 - 3 -  4 - 5 - 
```
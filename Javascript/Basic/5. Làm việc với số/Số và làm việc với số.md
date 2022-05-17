```jsx
/* 1. Tạo giá trị number
  - Các cách tạo
  - Dùng cách nào ? Lí do?
  - Kiểm tra datatype
  2. Lma2 việc với number
  - To string
  - To fixed */
var age = 20;
var PI = 3.143123;
var numberA = new Number(20);
//* Tránh việc sử dụng từ kháo new vì sẽ tạo ra object mới, 1 kiểu dữ liệu không mong muốn
//Ex:
var result = 20 / 'BC';
console.log(result);
//output: NaN
//* NaN là Not a number, là 1 số không hợp lệ)

// Cách kiểm tra 1 số hợp lệ
console.log(isNaN(result));
//output: true

// To string
var ageString = age.toString();
console.log(ageString);
//output: 20

// To fixed
var PIString = PI.toFixed(2);
console.log(PIString);
//output: 3.14
//* làm tròng số thập phân 2 giá trị
/* mặc định không tuyền vào () hoặc truyền vào falsy xem như không 6 truyền sẽ làm tròn thành số nguyên */
/*
> 5 : làm tròn lên
< 5 : làm tròn dưới
*/
```
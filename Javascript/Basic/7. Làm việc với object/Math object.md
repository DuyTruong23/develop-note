```jsx
// Math
/*  Lưu ý: math không phải là obj constructor nên không thể gọi qua phương thức new */

// Math.PI() - in ra số PI
console.log(Math.PI);
//output: 3.141592653589793

// Math.abs() - in ra giá trị tuyệt đối của số được truyền vào
console.log(Math.abs(-5));
//output: 5

// Math.round() - in ra số làm tròn của số được truyền vào
console.log(Math.round(5.5));
//output: 6
/* >= 5: làm tròn lên, < 5 làm tròng dưới */

// Math.ceil() - in ra số làm tròn lên của số được truyền vào
console.log(Math.ceil(5.1));
//output: 6

// Math.floor() - in ra số làm tròn dưới của số được truyền vào
console.log(Math.floor(5.9));
//output: 5

// Math.random() - in ra số ngẫu nhiên trong khoảng < 1
console.log(Math.random());
//output: 0.98875
console.log(Math.random() * 10); // 0 -> 10
console.log(Math.random() * 100); // 0 -> 100
//Ex
var bonus = [
  '10 coin',
  '20 coin',
  '50 coin',
  '100 coin',
  '200 coin',
  '500 coin',
  '1000 coin',
];
var random = Math.floor(Math.random() * bonus.length);
//or
var random100 = Math.floor(Math.random() * 100);
console.log(bonus[random]);

// Math.min() - in ra số nhỏ nhất trong các số được truyền vào
console.log(Math.min(1, 2, 3, 4, 5));
//output: 1

// Math.max() - in ra số lớn nhất trong các số được truyền vào
console.log(Math.max(1, 2, 3, 4, 5));
//output: 5
```
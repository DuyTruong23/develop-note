Chỉ sử dụng cho các bài toán gán 2 vế đơn giản

```jsx
//Ex 1
var course = {
  name: 'Javascript',
  price: 100,
};

if (course.price > 0) {
  console.log(`${course.price} coins`);
} else {
  console.log(`${course.name} is free`);
}
// Ternary operator

const result = course.price > 0 ? `${course.price} coins` : `Free`;
console.log(result);
//Ex2
var a = 1;
var b = 2;

var c = a > 0 ? a : b;
console.log(c);
```
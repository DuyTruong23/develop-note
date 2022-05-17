```jsx
// Toán tử logical
var a = 10;
var b = 20;
var c = 30;
// && And. Tất cả dk đều đúng
if (a > b && a > c) {
  console.log('a lớn hơn b và c');
}
//

// || Or. Chỉ cần 1 dk đúng
if (a > b || a > c) {
  console.log('a lớn hơn b hoặc c');
}
// ! Not
if (!(a > b)) {
  console.log('a không lớn hơn b');
}
```
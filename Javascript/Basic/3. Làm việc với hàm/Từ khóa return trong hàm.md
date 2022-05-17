```jsx
// Từ khóa return trong hàm
//Example 1
var isConfirm = confirm('Bạn có muốn thay đổi mật khẩu không?');
console.log(isConfirm); //=> true hoặc false

//Example 2
function cong(a, b) {
  return a + b;
  // 1 hàm không return sẽ trả về undefined
  // sau return các dòng code sẽ không được thực thi và kết thúc
}
var result = cong(10, 20);
console.log(result); //=> 30
//Example 2
function convert(a, b) {
  return a.toString + b.toString;
  // 1 hàm không return sẽ trả về undefined
  // sau return các dòng code sẽ không được thực thi và kết thúc
}
var result1 = convert(10, 20);
console.log(result1); //=> 1020
```
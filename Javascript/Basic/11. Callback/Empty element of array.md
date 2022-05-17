Sử dụng vòng for để duyệt 1 mảng với 2 giá trị nhưng gán length ảo khác

```jsx
var courses = ['Javascript', 'PHP'];
//or
/*
Tham số 1, độ dài mảng
Nếu có 2 tham số trở lên sẽ là giá trị
 */
var courses1 = new Array(10);
//thêm phần tử vào mảng
courses1.push('Javascript', 'PHP');

courses.length = 10;
for (let index = 0; index < courses.length; ++index) {
  console.log(courses[index]); // Javascript, PHP ,8 undefined
}
// vòng for dựa trên độ dài được cho trước, nên nếu muốn lặp đúng số phần tử thực thì dùng for..in

for (const index in courses) {
  console.log(index + courses[index]);
}
```
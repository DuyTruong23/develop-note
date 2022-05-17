```jsx
/*
1. Tạo chuỗi
  - Các cách để tạo chuỗi
  - Nên dùng cách nào? Lý do?
  - Kiểm tra datatype
2. Một số case sử dụng backslash(\\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/

var fullName = 'Nguyễn Văn A';
var fullName1 = new String('Nguyễn Văn A');

console.log(fullName); // nên dùng cách 1
console.log(typeof fullName1); // vì cách 2 tạo ra object

//In ra kí tự đặc biệt
console.log('\\n');
console.log('\\t');
console.log('\\b');
console.log(fullName + '\\\\ ');

//Nối chuỗi
var firstName = 'Nguyễn';
var lastName = 'Văn A';
var age = 20;
console.log(firstName + ' ' + lastName + ' ' + age);

// Template string ES6
console.log(`${firstName} ${lastName} ${age}`);

//Xem độ dài chuỗi
console.log(fullName.length);

//Chú ý độ dài khi viết code
var para =
  'Lorem ipsum dolor sit amet' +
  'Nam, quisquam, quibusdam. ' +
  'Nam, quisquam, quibusdam. ' +
  'Nam, quisquam, quibusdam. ';
```
```jsx
// Object constructor - bản thiết kế cho đối tượng

function User(fisrtName, lastName, age, avatar) {
  this.fisrtName = fisrtName;
  this.lastName = lastName;
  this.age = age;
  this.avatar = avatar;
}

// Tạo đối tượng từ bản thiết kế
var author = new User('Nguyễn', 'Ngọc', '20', '../img/avatar.jpg');
var user = new User('Vũ', 'Nguyễn', '19', '../img/avatar1.jpg');

console.log(author);
console.log(user);
//output: User { fisrtName: 'Nguyễn', lastName: 'Ngọc', age: '20', avatar: '../img/avatar.jpg' }
/* User là contructor được tạo ra */

//Kiểm tra obj constructor
console.log(author instanceof User);
//or
console.log(author.constructor === User); //output: true

// Thêm 1 thuộc tính cho 1 đối tượng
author.position = 'Quản lý';
user.email = 'truongduy.fu@gmail.com';

console.log(author);
console.log(user);
```
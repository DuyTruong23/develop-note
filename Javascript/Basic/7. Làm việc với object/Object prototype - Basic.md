```jsx
// Object prototype - Basic
/*
Nguyễn mẫu của obj, là nguyên liệu tạo nên obj
Thêm 1 thuộc tính ebn6 ngoài hàm tạo constructor
*/
function User(fisrtName, lastName, age, avatar) {
  this.fisrtName = fisrtName;
  this.lastName = lastName;
  this.age = age;
  this.avatar = avatar;
}
User.prototype.className = '18DTHB5';
User.prototype.getClassName = function () {
  return this.className;
};

var author = new User('Nguyễn', 'Ngọc', '20', '../img/avatar.jpg');
var user = new User('Vũ', 'Nguyễn', '19', '../img/avatar1.jpg');

console.log(author.className);
console.log(user.getClassName);
```
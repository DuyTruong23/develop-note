```jsx
// Object là gì?
var myInfo = {
  name: 'Nguyễn Văn A',
  age: 20,
  address: 'Hà Nội',
};

console.log(myInfo.name);

// Thêm 1 cặp key: value vào đối tượng
myInfo.email = 'truongduy.fu@gmail.com';
console.log(myInfo);
//output: { name: 'Nguyễn Văn A', age: 20, email: 'truongduy.fu@gmail.com' }

// Lấy value của 1 key
console.log(myInfo.name);
//output: Nguyễn Văn A
//* nếu key không có sẽ trả về undefined

// Ex: TÌm 1 key trong mảng thông qua biến
var myKey = 'address';
console.log(myInfo[myKey]);

// Ex: Định nghĩa 1 key từ biến
var myPhone = 'phone';
var newInfo = {
  name: 'Nguyễn Văn A',
  age: 20,
  address: 'Hà Nội',
  [myPhone]: '0987654321',
};

// Xóa 1 key: value trong đối tượng
delete newInfo.age;
console.log(newInfo);
//output: { name: 'Nguyễn Văn A', address: 'Hà Nội', phone: '0987654321' }

//Ex : Tạo 1 đối tượng từ 1 mảng
var myArray = [
  { name: 'Nguyễn Văn A', age: 20, address: 'Hà Nội' },
  { name: 'Nguyễn Văn B', age: 21, address: 'Hà Nội' },
  { name: 'Nguyễn Văn C', age: 22, address: 'Hà Nội' },
];

// Ex : Tạo 1 function trong đối tượng
var oldInfo = {
  name: 'Nguyễn Văn A',
  age: 20,
  address: 'Hà Nội',
  showInfo: function () {
    console.log(this.name);
  },
};
// this là đối tượng đang được gọi chính là oldInfo trả về oldInfo.name, giogn61 như cách đặt biến cho tên đối tượng
oldInfo.showInfo();
console.log(oldInfo);

// Cách gọi key cho đúng
/* Key trong obj gọi là key, trong tường hợp là func gọi là phương thức methods thông qua toán tử call(), other là thuộc tính property */
```
```jsx
// Đối tượng Date - làm việc với giá trị thời gian
// keyword: javascript date object mozilla

var date = new Date(); // khi không có new sẽ khai báo như 1 function
console.log(date); //output: Thu Jun 21 2019 09:00:00 GMT+0700 (Indochina Time) /* Trả về kiểu string nhưng typeof thì là obj*/

var year = date.getFullYear(); // lấy năm
console.log(year); // output: 2019
var month = date.getMonth(); // lấy tháng nhưng sẽ là n-1 nên phải + thêm 1
console.log(month); // output: 5
var day = date.getDate(); // lấy ngày nhưng sẽ là n-1 nên phải + thêm 1
console.log(day); // output: 21
var hour = date.getHours(); // lấy giờ
console.log(hour); // output: 9
var minute = date.getMinutes(); // lấy phút
console.log(minute); // output: 0
var second = date.getSeconds(); // lấy giây
console.log(second); // output: 0
```
Khai báo viến: `var tenBien = giaTri;`

Comment: `ctrl + /` hoặc `shift + alt + a`

Built-in: là những hàm được xây dựng sẳn

```jsx
// 1. Alert in ra popup messenger thông báo
alert('Hello mấy em');
// 2. Console
console.log('Hello mấy em');
// 3. Prompt in ra popup messenger nhập giá trị
var name = prompt('Nhập tên của bạn');
console.log(name);
// 4. Confirm in ra popup messenger xác nhận
var isConfirm = confirm('Bạn có muốn xóa không?');
console.log(isConfirm);
// 5. Set timeout để chạy 1 lần sau 1 khoảng thời gian
setTimeout(function () {
  console.log('Hello mấy em');
}, 1000);
/**
 * Hàm setTimeout có 2 hoặc nhiều tham số
 * 1. Tham số thứ nhất là 1 func sẽ chạy sau khoảng thời gian
 * 2. Tham số thứ 2 là time theo đơn vị milisecond
 */
// 6. Set interval để chạy liên tục sau 1 khoảng thời gian
var i = 0;
setInterval(function () {
  console.log(i);
  i++;
}, 1000);
```

```jsx
var i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Bắt đầu kiểm tra điều kiện từ vòng lặp thứ 2

// Ex Ứng dụng nạp thẻ cào khi người dùng nạp thẻ thất bại 2 lần
var isSuccess = false;

do {
  i++;
  console.log('Nạp thẻ thất bại ' + i);
  if (false) {
    isSuccess = true;
  }
} while (!isSuccess && i <= 3);
```
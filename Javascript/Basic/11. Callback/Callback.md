Là hàm func, được truyền qua đối số khi gọi hàm khác Thỏa mãn 2 điều kiện

1.  Là hàm
2.  Được truyền qua đối số
3.  Đượcgọi lại (trong hàm nhận đối số)

```jsx
// Callback - gọi lại
function myFunction(params) {
  if (typeof params === ' function') {
    params('Verify params là function');
  }
}
// Là hàm
function myCallback(value) {
  console.log('Value: ', value);
}
// truyền qua đối số
myFunction(myCallback);
```
[[Build a map()]]
[[Empty element of array]]
[[Đệ quy]]
```jsx
// 1. Declaration function
function myFunc() {
  console.log('Hello World');
}
// 2. Expression function
var myFunc = function () {
  console.log('Hello World');
};
// Khác nhau giữa declaration và expression function là Hosting
// Declaration function có thể được gọi trước khi định nghĩa

// 3. Arrow function
var myFunc = () => {
  console.log('Hello World');
};
```
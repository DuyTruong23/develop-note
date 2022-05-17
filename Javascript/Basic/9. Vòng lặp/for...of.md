Lấy ra phần tử của mảng, lấy ra chữ cái của 1 chuỗi. Không áp dụng object

```jsx
var myInfo = {
  name: 'John',
  age: 30,
  city: 'New York',
};
var myArray = ['JavaScript', 'HTML', 'CSS'];
var myString = 'Hello World';

// for..of get all the values of an array, string
for (var i of myArray) {
  //console.log(i);
}
for (var i of myString) {
  //console.log(i);
}
```

Trường hợp là object

```jsx
for (var i of Object.keys(myInfo)) {
  console.log(myInfo[i]);
}
// or
for (var i of Object.values(myInfo)) {
  console.log(i);
}
```
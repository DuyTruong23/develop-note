Lấy ra key của array/object

```jsx
var myInfo = {
  name: 'Nguyen Van A',
  age: 20,
  job: 'Front-end developer',
  city: 'Hanoi',
};
var language = ['JavaScript', 'HTML', 'CSS', 'React', 'Nodejs'];
var myString = 'Hello World';

// for...in get key of object/array
// object
for (var key in myInfo) {
  console.log(key);
}
// array
for (var key in language) {
  console.log(`${key} = ${language[key]}`);
}
// string
for (var key in myString) {
  console.log(`${key} = ${myString[key]}`);
}

// for...in get key and value of object/array
for (var key in myInfo) {
  console.log(`${key} = ${myInfo[key]}`);
}

// for...in get value of object/array
for (var key in myInfo) {
  console.log(myInfo[key]);
}

// Lấy ra các key của object, convert thành mảng
Object.keys(myInfo)
```
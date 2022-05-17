```jsx
//For loop
// Ex in ra màn hình con số từ 1 -> 50
for (var i = 1; i <= 50; i++) {
  // console.log(i);
}
// Ex in ra các phần tử trong array
var array = ['Java', 'PHP', 'Python', 'C++', 'C#', 'JavaScript'];

var lengthArray = array.length;

for (var i = 0; i < lengthArray; i++) {
  console.log(`${i} = ${array[i]}`);
}

//Exx in ngược mảng array
for (var i = lengthArray - 1; i >= 0; i--) {
  // console.log(array[i]);
}
```
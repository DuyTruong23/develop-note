```jsx
// Mảng (array)
/*
1. Tạo mảng
  - Cách tạo
  - Sử dụng cách nào ? Tại sao?
  - Kiểm tra datatype
2. Tuy cập mảng
  - Độ dài mảng
  - Lấy phần tử theo index
*/

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
var numbers = new Array(1, 2, 3, 4, 5); // cách này thực thi chậm hơn

console.log(languages); //output: [ 'JavaScript', 'PHP', 'Python', 'Ruby' ]
//* Array chứa được tất cả các kiểu dữ liệu, và được đánh chỉ mục(index or key) từ 0 đến n-1
//Ex
console.log(typeof languages[1]); //output: string

//Cách phân biệt obj và array
console.log(Array.isArray(languages)); //output: true
console.log(Array.isArray({})); //output: false
console.log(Array.isArray([])); //output: true

// Độ dài mảng
console.log(languages.length); //output: 4

// Lấy phần tử theo index
console.log(languages[0]); //output: JavaScript
```
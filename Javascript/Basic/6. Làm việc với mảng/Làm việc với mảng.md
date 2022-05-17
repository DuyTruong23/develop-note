```jsx
// Làm việc với mảng
//Keyword: javascript array methods
var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// 1. To string - chuyển array thành string
console.log(languages.toString());
//output: JavaScript,PHP,Python,Ruby

// 2. Join - chuyển array thành string thay thế khoản cách ở giữa thành tham số truyền vào
console.log(languages.join('-'));
//output: JavaScript-PHP-Python-Ruby

// 3. Pop - xóa phần từ cuối mảng
console.log(languages.pop());
//output: Ruby
console.log(languages);
//output: JavaScript,PHP,Python
//* khi xóa hết phần tử trong mảng thì mảng sẽ trở về undefined và mảng rỗng

// 4. Push - thêm 1 hoặc nhiều phần tử vào cuối mảng
languages.push('C#', 'C++');
console.log(languages);
//output: JavaScript,PHP,Python,C#,C++

// 5. Shift - xóa phần tử đầu tiên của mảng
console.log(languages.shift());
//output: JavaScript
console.log(languages);
//output: PHP,Python,C#,C++

// 6. Unshift - thêm 1 hoặc nhiều phần tử vào đầu mảng
languages.unshift('C', 'C++');
console.log(languages);
//output: C,C++,PHP,Python,C#,C++

// 7. Splicing - thêm, xóa, cắt phần tử trong mảng
// splice(start, delete count, elements to add)
languages.splice(0, 0, 'HTML', 'CSS');
console.log(languages);
//output: HTML,CSS,C,C++,PHP,Python,C#,C++
//Ex: tham số thứ 2 nếu không xóa thì sẽ deafult là 0
console.log(languages.splice(0, 2));
//output: HTML,CSS
console.log(languages);
//output: C,C++,PHP,Python,C#,C++

// 8. Concat - nối 2 mảng
var languages2 = ['Ruby', 'Dart'];
console.log(languages.concat(languages2));
//output: C,C++,PHP,Python,C#,C++,Ruby,Dart

// 9. Slice - cắt 1 hoặc toàn bộ phần tử mảng
console.log(languages.slice(0, 3)); // tham_so_1: vị trí bắt đầu, tham_so_2: vị trí kết thúc. Cắt hết mảng thì để tham số 1. Muốn copy mảng thì truyền vào 0
//output: C,C++,PHP
```
```jsx
/** Kiểu dữ liệu trong Javascript
 * 1. Dữ liệu nguyên thủy - Primitive data type
 * - String
 * - Number
 * - Boolean
 * - Undefined - định nghĩa ra 1 biến nhưng không có giá trị
 * - Null
 * - Symbol
 * 2. Dữ liệu phức tạp - Complex data type
 * - Object
 * - Function
 * - Array
 */
// Kiểu dữ liệu nguyên thủy khi khao báo lại sẽ tạo ra vùng nhớ khác lưu tạm vào trong ram
var a = 1; // Number
var b = 'Hello'; // String
var c = true; // Boolean
var d = undefined; // Undefined
var e = null; // Null
var f = Symbol('id'); // Symbol('mo ta') - đặt tính duy nhất

// Kiểu dữ liệu phức tạp chứa được nhiều kiểu dữ liệu
// Function
function test() {
  console.log('Hello');
}
console.log(typeof test);

// Object
var student = {
	  name: 'Nguyen Van A',
	  age: 20,
//	key: value
};
console.log(typeof student);
// Array
var arr = [1, 'chuoi', null, true, 5];
// không cần định nghã key trong Array, vì default key là số được đánh giấu tự động và tự tăng
console.log(typeof arr);
```
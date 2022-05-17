```jsx
// Làm việc với chuỗi
var myString = 'Học JS tại F8';

//Keyword: Javascript string methods
//1. Length
var strLength = myString.length;
console.log(strLength);
//output: 18

//2. Find index
var index = myString.indexOf('JS');
console.log(index);
//output: 4 (vị trí tìm kiếm được ĐẦU TIÊN, nếu không được trả về -1)
//* tham số thứ 2 là vị trí bắt đầu tìm kiếm sau chuỗi tham số 1
var index2 = myString.indexOf('JS', 5);
console.log(index2); //
var lastIndex = myString.lastIndexOf('JS');
console.log(index2); //

console.log(myString.search('JS'));

//*indexOf hổ trợ tham số thứ 2, search hổ trợ tìm theo biểu thức chính quy

var myString1 = 'Học JS tại F8';
//3. Cut string
var cutString = myString1.slice(4, 6); //* tham số 1: vị trí bắt đầu, tham số 2: vị trí kết thúc
console.log(cutString);
//output: JS
//* nếu bỏ tham số thứ 2, slice sẽ cắt từ vị trí thams ố 1 đến cuối chuỗi

//Ex: cắt từ cuối đến đầu
var cutString = myString1.slice(-3, -1);
console.log(cutString);
//output: F8

// 4. Replace
console.log(myString1.replace('JS', 'PHP'));
//output: Học PHP tại F8 (thay thế chuỗi đầu tiên tìm thấy)
//Ex: sử dụng biểu thức chính quy thay thế TẤT CẢ  chuỗi được tìm thấy
console.log(myString1.replace(/JS/g, 'PHP'));

// 5. Convert to upper case
console.log(myString1.toUpperCase());
//output: HỌC JS TẠI F8

// 6. Convert to lower case
console.log(myString1.toLowerCase());
//output: học js tại f8

// 7. Trim - bỏ khoảng trống đầu và cuối
var myString2 = '   Học JS tại F8   ';
console.log(myString2.trim());
//output: Học JS tại F8

// 8. Split - tách chuỗi thành mảng
var myString3 = 'Học JS tại F8';
console.log(myString3.split(' '));
//output: ['Học', 'JS', 'tại', 'F8'] (tách theo khoảng trắng)
//* nếu truyền vào chuỗi rỗng thì sẽ tách theo ký tự

//9. Get a character by index
console.log(myString3[0]); //output: H (trả về chuỗi rồng nếu không tồn tại)
console.log(myString3.charCodeAt(6)); //output: 83 (trả về undefined nếu không tồn tại)
```
[[Kiểu dữ liệu chuỗi (string)]]
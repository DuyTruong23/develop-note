```jsx
var headingElement = document.querySelector('h1');

console.log(headingElement);
//* Phương thức gán = gọi là setter, set trực tiếp giá trị bằng toán tử gán. Chỉ gán attribute hợp lệ tag đó

// Thêm attribute title vào h1
headingElement.title = 'Heading';
// Thêm attribute class vào h1
headingElement.className = 'main-heading';
// Thêm attribute a vào h1
headingElement.href = 'asd.html';

//* Sử dụng hàm để setAttribute để gán attribute không hợp lệ
/*
Đối số 1: tên attribute muốn gán
Đối số 2: giá trị
*/
headingElement.setAttribute('d', 'dataUser');

// Get ra 1 value của attribute kể cả set từ js
/*
Đối số thêm vào là tên attribute muốn lấy giá trị
*/
headingElement.getAttribute('d');

//Có thể get ra attribute hợp lệ của tag hoặc gán lại
var textElement = document.querySelector('p');
textElement.title = 'content-body'; // gán attri hợp lệ vào tag p

alert(textElement.title); // lấy ra
textElement.title = 'new-content'; // gán lại
alert(textElement.title); // lấy ra

/*
get, set thêm hoặc lấy ra attribute không hợp lệ
*/
```
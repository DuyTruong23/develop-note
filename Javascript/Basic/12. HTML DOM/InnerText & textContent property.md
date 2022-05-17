```jsx
// innerText, textContent
var headingElement = document.querySelector('h1'); // get ra element

// get ra text node
console.log(headingElement.innerText);
console.log(headingElement.textContent);

// thay đổi
headingElement.innerText = 'New heading';
headingElement.textContent = 'New heading';

//Nếu assign 1 tag sẽ chỉ là 1 đoạn text
```

_So sánh innerText, textContent_

-   _innerText -_ khi getter sẽ lấy ra toàn bộ nội dung text bỏ qua các element con chứa text. In ra giống như những gì nhìn thấy. Là thuộc tính của `element node`.
-   _textContent -_ khi getter sẽ lấy ra toàn bộ nội dung trong element con và ghi nhận các thẻ con kể cả khoảng trắng, cách. In ra chính những gì nằm trong text node, tất cả text trong element được gọi kể cả css, js. chỉ bỏ qua tên _`tag`,_ là thuộc tính của cả `element node` và `text node`
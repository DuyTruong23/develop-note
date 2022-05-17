Để vượt qua thử thách này, hãy tạo hàm `getLastElement`  có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.

```jsx
// Viết hàm tại đây
function getLastElement(temp){
    return temp[temp.length-1]
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
```
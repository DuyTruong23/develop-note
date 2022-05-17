Lấy element con trong element cha

```jsx
var boxNodes = document.querySelector('.box-1');

//cong viec 1: su dung toi boxNode
console.log(boxNodes);

//cong viec 2: su dung toi cac li,p elements, con cua bo Node
console.log(boxNodes.getElementsByTagName('li'));
console.log(boxNodes.querySelector('p'));
```
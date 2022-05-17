```jsx
//Get element method: ID, class, tag, CSS selector, html collection
var headingNode = document.getElementById('main-title'); // get a element by ID, chỉ apply cho id được tìm thấy đầu tiên
console.log(headingNode); // Object: <h1 id="main-title" class="heading">       ...      </h1>

var headingNodes = document.getElementsByClassName('heading'); // get all element by class, output có tính chất giống mảng
console.log(headingNodes); // HTMLCollection(2) [...]

var headingNodes = document.getElementsByTagName('h1'); // get all element by tag name, output có tính chất giống mảng
console.log(headingNodes); // HTMLCollection(2) [...]

// CSS selector
var headingNode = document.querySelector('.heading');
var headingNode = document.querySelector('.wrapper .heading:ntd-child(2)');
var headingNode = document.querySelector('.wrapper .heading');
var headingNode = document.querySelector('.wrapper .heading:first-child');
var headingNodes = document.querySelectorAll('h1');
console.log(headingNodes); // NodeList(3)[]
console.log(headingNodes[1]); // NodeList(3)[]

//HTML collection
//* search in google
```
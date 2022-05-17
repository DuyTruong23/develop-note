```jsx
var courses = ['Javascript', 'PHP', 'Ruby'];

Array.prototype.map2 = function (callback) {
  // console.log(this);
  var output = [],
    arrayLength = this.length;
  for (let index = 0; index < arrayLength; ++index) {
    var result = callback(this[index], index);
    // console.log('result: ', result);
    output.push(result);
  }
  return output;
};

var htmls = courses.map2((course, index) => {
  // console.log(index, course);
  return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));
```
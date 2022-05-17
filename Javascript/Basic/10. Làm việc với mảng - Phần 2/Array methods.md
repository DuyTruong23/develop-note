```jsx
// Array methods
var courses = [
  {
    id: 1,
    name: 'HTML',
    coin: 400,
  },
  {
    id: 2,
    name: 'CSS',
    coin: 300,
  },
  {
    id: 3,
    name: 'Javascript',
    coin: 200,
  },
];

// forEach() - lặp các giá trị trong phần phần tử trong mảng => trả về đối tượng
courses.forEach(function (course, index) {
  console.log(index, course);
});

// every() - kiểm tra giá trị các phần tử của mảng TẤT CẢ thỏa 1 điều kiện => trả về true hoặc false
var result = courses.every(function (course, index) {
  return course.coin > 100;
});
console.log(result);

// some() - kiểm tra giá trị các phần tử của mảng chỉ cần 1 phần tử thảo mản diều kiện => trả về true, nếu tất cả không htoa3 thì false
var result = courses.some(function (course, index) {
  return course.coin > 100;
});

// find() - tìm giá trị của phần tử đầu tiên thỏa điều kiện => trả về giá trị của phần tử đó
var result = courses.find(function (course, index) {
  return course.name === 'Javascript';
});
console.log(result);
//=> { id: 3, name: 'Javascript', coin: 200 }
// nếu không có trả ra undefined

// filter() - lọc các phần tử của mảng thỏa điều kiện => trả về mảng mới
var result = courses.filter(function (course, index) {
  return course.coin > 100;
});
console.log(result);
//=> [ { id: 2, name: 'CSS', coin: 300 }, { id: 3, name: 'Javascript', coin: 200 } ]
```
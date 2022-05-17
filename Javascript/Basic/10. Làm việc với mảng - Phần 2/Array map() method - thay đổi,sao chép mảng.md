Sử dụng khi muốn chỉnh sửa hoặc thay đổi element của array

```jsx
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

// Ex bổ sung "coinText" vào các obj trong array

/*  map() sẽ return lại mảng mới bằng số lượng phần tử của mảng root
Có thể dùng để copy mảng
 */
var newCourses1 = courses.map(function () {
  //...
});
//or
// Tham số 1: mảng root
// Tham số 2: index - vị trí phần tử trong mảng root
// Tham số 3: originArray - mảng root

//Ex thêm Khóa học vào name, thêm key coinText
var courseHandler = function (course, index, originArray) {
  //return course; // copy mảng
  return {
    //index: index,
    id: course.id,
    name: `Khóa hoạc ${course.name}`,
    coin: course.coin,
    coinText: `Giá: ${course.coin}`,
    //originArray: originArray,
    //originArray: course,
  };
};
//Ex tạo 1 mảng chỉ chứa tên của mảng courses
var courseHandler1 = function (course) {
  return course.name;
};
var newCourses1 = courses.map(courseHandler);
var newCourses2 = courses.map(courseHandler1);
console.log(newCourses1);
console.log(newCourses2);
```

Ứng dụng thức tế dùng để render ra view trên layout website

```jsx
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

function renderLayout(courses) {
  return `<h2> ${courses.name}}/h2>`;
}
var newCourses = courses.map(renderLayout);
console.log(newCourses.join(''));
```
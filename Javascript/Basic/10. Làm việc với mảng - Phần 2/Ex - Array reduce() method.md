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
var totalCoin = courses.reduce((total, course) => total + course.coin, 0);
console.log(totalCoin);

// Ex không truyền initialValue
var numbers = [100, 200, 300, 400, 5];
var totalCoin1 = numbers.reduce((total, number) => total + number);
console.log(totalCoin1);

// EX Flat: "làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce((flatOutput, subArray) => {
  return flatOutput.concat(subArray);
}, []);
console.log(flatArray);

//Ex Lấy ra các khóa học đưa vào mảng mới
var topics = [
  {
    topic: 'Front end',
    courses: [
      {
        id: 1,
        name: 'HTML',
      },
      {
        id: 2,
        name: 'CSS',
      },
      {
        id: 3,
        name: 'JS',
      },
    ],
  },
  {
    topic: 'Back end',
    courses: [
      {
        id: 1,
        name: 'C#',
      },
      {
        id: 2,
        name: 'Java',
      },
      {
        id: 3,
        name: 'Golang',
      },
  },
];
var courses = topics.reduce((courses, topic) => {
  return courses.concat(topic.courses);
}, []);
console.log(courses);

var htmls = courses.map((course) => {
  return `<div><h2>${course.name}</h2>
  <p>${course.id}</p></div>
  `;
}
).join('');
console.log(htmls);
```
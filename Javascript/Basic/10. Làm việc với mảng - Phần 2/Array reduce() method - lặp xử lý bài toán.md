Khi muốn nhận 1 giá trị duy nhất sau khi tính trên tính tóa trên các phần tử arrays

Trong reduce Đối số 1: function, nếu không có sẽ lỗi, có các tham số:

-   function(accumulator, currentValue, currentIndex, array) -- accumulator: lưu trữ giá trị đã tính toán, được truyền từ đối số "accumulator" -- currentValue: giá trị hiện tại của mảng mỗi lần gọi lại -- currentIndex: index của giá trị hiện tại bằng chính vị trí "currentValue" -- array/originArray: array đang lặp

Đối số 2: accumulator value/initial value - Giá trị khởi tạo, khởi tạo giá trị biến lưu trữ

-   Nếu không có initial value thì mặcđịnh lần đầu chạy sẽ là next elements làm giá trị khởi tạo ⇒ giảm 1 lần chạy
-   Không phải bài toán nào cũng có thể bỏ initial value
-   Lưu ý: Nếu output = kiểu dữ liệu input thì không cần truyền initial value

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
// Ex Nhận 1 giá trị tổng số tiền của coin

//* Không dùng reduce
// Biến lưu trữ
var totalCoin = 0;

// lặp qua các phần tử
for (var course of courses) {
  // thực hiện lưu trữ/tính toán
  totalCoin += course.coin;
}
// in ra
//console.log(totalCoin);

//* Dùng reduce
var i = 0;

function coinHandler(accumulator, currentValue, currenIndex) {
  /* Test show ra các tham số
  i++;
  console.log(currenIndex);
  console.table({
    'Lượt chạy': i,
    'Giá trị của accumulator': accumulator,
  });
  console.log('Giá trị của currentValue: ', currentValue);
  return 100; */
  var total = accumulator + currentValue.coin;

  console.log(`Giá khóa học ${currentValue.coin}`);
  console.log(`Tích trữ giá khóa học ${total}`);
  return total;
}
var totalCoins = courses.reduce(coinHandler, 0);
//* or ES6
var totalCoins1 = courses.reduce((a, b) => a + b.coin, 0);
console.log(totalCoins);
console.log(totalCoins1);
```
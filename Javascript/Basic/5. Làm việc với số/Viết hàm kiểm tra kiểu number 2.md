```
function isNumber(value) {
    return typeof value === 'number';
}

```

Tuy nhiên, trong JavaScript thì kiểu của `NaN` cũng là `number`:

```
console.log(typeof NaN); // 'number'

```

Chính vì vậy, nếu sử dụng hàm `isNumber` trên với đối số là `NaN` thì hàm vẫn trả về đúng:

```
console.log(isNumber(NaN)); // true
console.log(isNumber(100 / 'abc')); // true

```

Điều này có thể gây ra lỗi logic trong ứng dụng của bạn, bởi vì chúng ta tạo hàm `isNumber` với mục đích kiểm tra xem một giá trị có phải là số hay không, trong thực tế, chúng ta thường làm điều này trước khi thực hiện các phép tính toán. Nếu `isNumber(NaN)` cũng trả về `true`, rất có thể logic phía sau đó `NaN` sẽ được đưa vào để tính toán và gây ra lỗi logic.

👉 Trong thử thách này, hãy viết hàm `isNumber` tương tự thử thách trước, nhưng hãy đảm bảo thêm rằng `NaN` không được coi là một số.

```jsx
// Viết code tại đây
const isNumber = (value)=> !Number.isNaN(value) && typeof value === "number";

// Kì vọng đạt được
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false
```
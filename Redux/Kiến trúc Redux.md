State Management
State là gì: quản lý các dữ liệu trạng thái ứng dụng
Cách quản lý: sử dụng react hooks

Immutability(Bất biến): dữ liệu không thay đổi.
Mutation: thay đổi dữ liệu
=> Thay vì gán 1 biến cho giá trị mới(thao tác trực tiếp) trong obj/array, chúng ta nên clone obj/arr để thao tác thông qua các kỹ thuật spread

Kiến trúc redux: 1 chiều
`Store` lưu trữ các state trong ứng dụng, có nhiều reducer
`Reducer`: 1 function, nhận state = initialValue và action, trả về state mới, nhận 2 tham số state và action. Dùng để cập nhật lại state
`Action`: 1 object, chứa thông tin mô tả 1 thao tác, có 2 thuộc tính: type và payload(có hoặc không). Có thể dùng action creator để không dùng hardcode
`Dispatch`: dùng để cập nhật state. Nhận vào action để cập nhật state. Có thể dùng thunk, promise, async action

Không được sử dụng bất đồng bộ, Math.random(), date.now(), side effect trong reducer vì không điểm soát output ra gì.

Kết nối:
- Store: chứa state, dispatch
- Reducer: chứa logic cập nhật state
- Action: chứa thông tin thao tác
- Dispatch: chứa logic cập nhật state

# SecureNote Backend

Đây là backend API cho ứng dụng SecureNote.  
Chức năng: Lưu trữ, mã hóa, trả về ghi chú, cung cấp API đơn giản cho frontend.

## Cài đặt & chạy thử

1. **Cài Node.js** (nếu chưa có): https://nodejs.org/
2. Cài thư viện:
    ```bash
    npm install
    ```
3. Chạy server:
    ```bash
    node index.js
    ```
4. Mặc định chạy ở cổng 4000.  
   Kiểm tra thử: [http://localhost:4000/api/notes](http://localhost:4000/api/notes)

## API

- `POST /api/notes`  
    Thêm ghi chú (mã hóa trước khi lưu).
    ```json
    { "text": "Nội dung ghi chú" }
    ```
- `GET /api/notes`  
    Lấy danh sách ghi chú (dạng mã hóa).

- `DELETE /api/notes/:id`  
    Xóa ghi chú theo ID.

- `POST /api/decrypt`  
    Giải mã ghi chú.
    ```json
    { "encrypted": "<chuỗi mã hóa>" }
    ```

## Ghi chú bảo mật

- Toàn bộ dữ liệu lưu trong bộ nhớ RAM, không lưu file/database (phiên bản demo, chỉ chạy thử).
- Bạn có thể thay đổi khóa bí mật `SECRET_KEY` trong file `index.js`.

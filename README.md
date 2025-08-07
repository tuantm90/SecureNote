SecureNote



SecureNote là ứng dụng quản lý ghi chú bảo mật mã nguồn mở, giao diện web thân thiện, lưu trữ ghi chú đã mã hóa đầu-cuối.

Mục tiêu: Dành cho cộng đồng, phi lợi nhuận, minh bạch và đơn giản.

🚀 Tính năng

Thêm, xóa, giải mã ghi chú.

Mã hóa AES-256 phía server.

Giao diện web đơn giản, dễ sử dụng.

REST API cho backend, React cho frontend.

Cài đặt và sử dụng nhanh chóng.

🖼️ Giao diện minh họa



🛠️ Cách cài đặt & chạy thử

1. Yêu cầu

Node.js >= 14

npm

2. Chạy Backend

cd backend
npm install
node index.js

Mặc định backend chạy ở port 4000

3. Chạy Frontend

cd frontend
npm install
npm start

Truy cập http://localhost:3000

⚙️ Cấu trúc thư mục

securenote/
├── backend/        # Backend Node.js/Express
├── frontend/       # Frontend React
├── assets/         # Ảnh minh họa/screenshots
├── README.md
└── LICENSE

📦 Demo API (Backend)

POST   /api/notes    – Thêm ghi chú (mã hóa)

GET    /api/notes    – Lấy danh sách ghi chú (dạng mã hóa)

DELETE /api/notes/:id – Xóa ghi chú

POST   /api/decrypt  – Giải mã ghi chú

🔒 Cảnh báo bảo mật

Demo này chỉ lưu dữ liệu trong RAM, không có xác thực người dùng.

Không nên sử dụng cho dữ liệu nhạy cảm thật sự!

Bạn có thể mở rộng thêm đăng nhập, database, xác thực 2FA, v.v.

💡 Đóng góp & Giấy phép

Hoan nghênh mọi đóng góp, issue, pull request!

MIT License – Tự do sử dụng, sửa đổi, chia sẻ.

📬 Liên hệ

GitHub Issues

Email: tmtuan90@proton.me

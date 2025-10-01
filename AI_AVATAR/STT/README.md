# AI Avatar - Speech to Text (STT)

Ứng dụng web đơn giản nhận diện giọng nói tiếng Việt và chuyển thành văn bản, sử dụng Web Speech API của trình duyệt.

## Tính năng
- Nhận diện giọng nói tiếng Việt (Speech to Text)
- Giao diện avatar AI, nút micro lớn dễ sử dụng
- Hiển thị kết quả nhận dạng theo thời gian thực

## Cách sử dụng
1. **Yêu cầu:**
   - Trình duyệt Chrome hoặc Edge (có hỗ trợ Web Speech API)
   - Các file ảnh: `background.jpg`, `aAI_AVATAR.jpg`, `mic.png` đặt cùng thư mục với `index.html`
2. **Chạy ứng dụng:**
   - Mở file `index.html` bằng trình duyệt Chrome/Edge (double click hoặc kéo vào tab trình duyệt)
   - Nhấn nút micro để bắt đầu nói, nhấn lại để dừng
   - Kết quả sẽ hiển thị ở khung bên dưới

## Lưu ý
- Không cần cài đặt thêm, không cần server, chỉ cần trình duyệt hiện đại
- Firefox/Safari hiện chưa hỗ trợ tốt Web Speech API tiếng Việt
- Nếu không nhận diện được, hãy kiểm tra quyền micro và thử lại trên Chrome mới nhất

## Thư mục
- `index.html`: Giao diện và logic nhận diện giọng nói
- `background.jpg`, `aAI_AVATAR.jpg`, `mic.png`: Các file ảnh giao diện (bạn cần tự thêm)

---
Tác giả: Nhóm Local History Explorer

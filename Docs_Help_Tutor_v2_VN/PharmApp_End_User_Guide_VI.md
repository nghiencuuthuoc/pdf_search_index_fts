# PharmApp PDF Search Index — Hướng dẫn người dùng cuối

*Dành cho khách hàng sử dụng bản EXE trên Windows*

Phiên bản: phát hành 2026

## Ứng dụng này dùng để làm gì
- PharmApp PDF Search Index giúp tìm kiếm trong các thư viện PDF lớn theo nội dung đã lập chỉ mục hoặc theo tên file PDF.
- Nếu thư mục đã có index_fts.db, việc tìm kiếm sẽ dùng SQLite FTS để đạt tốc độ cao.
- Nếu thư mục có index.json nhưng chưa có index_fts.db, ứng dụng có thể tự tạo chỉ mục FTS khi sử dụng lần đầu hoặc khi chuẩn bị dataset.
- Ứng dụng cũng tích hợp trình xem PDF, explorer duyệt file, vùng log và quy trình dịch tùy chọn.

## Khởi động nhanh
1. Mở PharmApp PDF Search Index.
2. Trong Dynamic path manager, dán đường dẫn thư mục hoặc dùng Browse folder / Browse file / Add path.
3. Mở tab dataset mới được tạo từ thư mục đó.
4. Nhập từ khóa tại Shared keyword hoặc ô từ khóa của dataset.
5. Nhấn Search.
6. Chọn một kết quả để mở đúng trang PDF trong trình xem.
7. Dùng Refresh nếu thư mục nguồn đã thay đổi.

## Các vùng chính trên màn hình

| Vùng | Mục đích |
|---|---|
| Dynamic path manager | Dùng để thêm thư mục, PDF hoặc index.json. Mỗi thư mục duy nhất sẽ tạo thành một tab dataset. |
| Dataset tabs | Mỗi tab là một thư viện có thể tìm kiếm độc lập. |
| Search results panel | Hiển thị tên file, số trang, loại khớp, snippet và đường dẫn. |
| PDF viewer | Mở PDF đã chọn và hỗ trợ chuyển trang, zoom, xoay, chế độ hai trang/dạng sách, liên tục, trình chiếu và toàn màn hình. |
| Explorer | Liệt kê file và thư mục bên trong dataset đang chọn. |
| Log / Details | Hiển thị trạng thái, hoạt động lập chỉ mục và chi tiết kết quả đang chọn. |

## Quy trình sử dụng điển hình
1. Thêm thư mục tài liệu chứa các file PDF và tùy chọn index.json.
2. Chờ ứng dụng kiểm tra hoặc tạo FTS index nếu cần.
3. Tìm theo chủ đề, cụm từ, mã, hợp chất, tiêu đề mục hoặc một phần tên file.
4. Xem snippet trong danh sách kết quả.
5. Mở kết quả và đọc đúng trang đích trong trình xem tích hợp.
6. Dùng explorer nếu muốn duyệt file thủ công.

## Về cơ chế tự động lập chỉ mục
- Lần chuẩn bị đầu tiên có thể chậm hơn nếu ứng dụng cần tạo index_fts.db.
- Sau khi đã có index_fts.db, các lần tìm kiếm tiếp theo sẽ nhanh hơn rõ rệt.
- Nên giữ index.json và thư mục PDF ở cùng một nơi khi có thể.
- Nếu tài liệu được cập nhật, hãy dùng Refresh để ứng dụng kiểm tra lại dataset.

## Mẹo và xử lý sự cố
- Không có kết quả: kiểm tra lại đúng tab dataset và chính tả của từ khóa.
- Lần tìm đầu chậm: đây là hiện tượng bình thường khi ứng dụng đang tạo FTS index.
- PDF không mở: kiểm tra xem file PDF còn tồn tại trong thư mục dataset hay không.
- File nguồn đã cập nhật: nhấn Refresh sau khi thêm, xóa hoặc thay thế PDF.
- Hãy thử từ khóa ngắn gọn trước, sau đó tinh chỉnh bằng cụm từ dài hơn nếu cần.

## Điều khiển trình xem hữu ích
- Một trang: Ctrl+6
- Hai trang: Ctrl+7
- Dạng sách: Ctrl+8
- Chế độ liên tục: c
- Phóng to / thu nhỏ: Ctrl+= / Ctrl+-
- Xoay trái / phải: Ctrl+Shift+- / Ctrl+Shift++
- Trình chiếu: Ctrl+L
- Toàn màn hình: Ctrl+Shift+L

Với các thư viện kỹ thuật, quy mô lớn hoặc có yêu cầu chặt chẽ, PharmApp phát huy hiệu quả tốt nhất khi thư mục dataset được tổ chức rõ ràng và quá trình lập chỉ mục được hoàn tất trước khi sử dụng thường xuyên.

---
© 2009-2026 • Pharma R&D Platforms • PharmApp • Discover • Design • Develop • Validate • Deliver | www.nghiencuuthuoc.com | Zalo:
+84888999311 | www.pharmapp.dev
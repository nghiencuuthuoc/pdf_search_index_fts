# PDF Search Index FTS

Tra cứu PDF siêu nhanh với **SQLite FTS** cho các bộ tài liệu lớn có `index.json` và `index_fts.db`.

## Giới thiệu

**PDF Search Index FTS** là công cụ giúp tìm kiếm nội dung PDF rất nhanh trên các bộ dữ liệu lớn, đặc biệt hữu ích khi làm việc với:

- Dược điển
- Tài liệu khoa học
- Sách kỹ thuật
- Bộ PDF hàng nghìn file
- Dữ liệu OCR đã được lập chỉ mục

Ứng dụng hỗ trợ:

- Tìm kiếm nội dung cực nhanh bằng **SQLite FTS**
- Tự tạo `index_fts.db` từ `index.json` nếu chưa có
- Mở đúng file PDF và đúng trang kết quả
- Giao diện desktop dễ dùng
- Hỗ trợ trình chiếu PDF fullscreen / presentation
- Phù hợp cho bộ dữ liệu PDF rất lớn

## GitHub

Repository:

`https://github.com/nghiencuuthuoc/pdf_search_index_fts`

## Tải về

Bản phát hành:

`https://github.com/nghiencuuthuoc/pdf_search_index_fts/releases/tag/20260315_pdf_search_index_fts`

## Video hướng dẫn

YouTube:

`https://youtu.be/QJDbU1DUwsg`

## Tính năng chính

- Tìm kiếm theo nội dung PDF với tốc độ cao
- Hỗ trợ dữ liệu `index.json` rất lớn
- Tự động ưu tiên dùng `index_fts.db` nếu có
- Nếu chưa có `index_fts.db`, ứng dụng có thể tự tạo từ `index.json`
- Tìm theo nội dung và theo tên file
- Mở PDF ngay tại trang tìm thấy
- Có chế độ xem PDF nhiều kiểu:
  - Single Page
  - Facing
  - Book View
  - Continuous
  - Presentation
  - Fullscreen
- Có thanh điều hướng trang, zoom, xoay trang
- Hỗ trợ quản lý nhiều dataset
- Giao diện phù hợp cho người dùng cuối

## Phù hợp cho ai

Công cụ này phù hợp cho:

- Nhà nghiên cứu dược
- Chuyên viên R&D
- Bộ phận QA / QC / RA
- Người cần tra cứu nhanh trong kho PDF lớn
- Người làm OCR và lập chỉ mục tài liệu

## Cách sử dụng nhanh

1. Tải bản phát hành từ mục Releases.
2. Giải nén file tải về.
3. Chạy `pdf_search_index_v3.exe`.
4. Chọn hoặc thêm thư mục dữ liệu có chứa PDF và `index.json`.
5. Nhập từ khóa cần tìm.
6. Bấm **Search**.
7. Chọn kết quả để mở đúng file PDF và đúng trang.

## Gợi ý cấu trúc dữ liệu

Ví dụ thư mục dữ liệu:

```text
YourDataset/
├─ index.json
├─ index_fts.db
├─ file_001.pdf
├─ file_002.pdf
└─ subfolders/...
```

Nếu chưa có `index_fts.db`, ứng dụng có thể tự tạo để tăng tốc tìm kiếm cho các lần sau.

## Screenshots

### Giao diện chính

![Main UI](Screenshots/2026-03-15_18.23.46.screenshot.png)

### Kết quả tìm kiếm

![Search Result](Screenshots/2026-03-15_18.35.02.screenshot.png)

### Trình xem PDF

![PDF Viewer](Screenshots/2026-03-15_19.05.37.screenshot.png)

## Lưu ý

- Với bộ dữ liệu rất lớn, lần chạy đầu tiên có thể chậm hơn do cần tạo chỉ mục FTS.
- Sau khi đã có `index_fts.db`, tốc độ tìm kiếm sẽ nhanh hơn rất nhiều.
- Nên đặt `index.json`, `index_fts.db` và PDF trong cùng một thư mục dataset để ứng dụng hoạt động ổn định hơn.

## Từ khóa gợi ý

Bạn có thể dùng công cụ này cho:

- Chinese Pharmacopoeia
- USP
- EP
- JP
- PMDA PDF
- WHO guideline PDF
- hồ sơ kỹ thuật PDF
- tài liệu nghiên cứu thuốc

## Hỗ trợ

Nếu bạn thấy công cụ hữu ích, hãy theo dõi và ủng hộ dự án tại:

- Website: `www.nghiencuuthuoc.com`
- Website: `www.pharmapp.dev`

---

© 2009-2026 • Pharma R&D Platforms • PharmApp • Discover • Design • Develop • Validate • Deliver | www.nghiencuuthuoc.com | Zalo: +84888999311 | www.pharmapp.dev

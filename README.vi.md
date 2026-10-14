# Scrap-Question

**Xuất câu hỏi Moodle từ cổng học tập UTH sang TXT, HTML tương thích Word hoặc JSON.**

[English](README.md) | **Tiếng Việt**

Scrap-Question là userscript chạy trong Tampermonkey, dành cho `courses.ut.edu.vn`. Script đọc trang câu hỏi hiện tại, tải lần lượt các trang có liên kết điều hướng, lưu tiến độ và cho bạn tự chọn lúc tải dữ liệu về.

Tài liệu này mô tả [main.user.js](main.user.js), phiên bản **1.3.1**. Giao diện và các nhãn trong file xuất ra đều dùng tiếng Việt.

> Nên xuất tài liệu ôn tập từ **trang xem lại kết quả**. Trên trang đang làm bài, tải trang khác có thể đẩy tiến trình trên máy chủ. Script không vượt được chế độ tuần tự, không khôi phục quyền quay lại câu trước và không lấy được đáp án mà máy chủ không cung cấp.

## Mục lục

- [Tính năng](#tính-năng)
- [Trang được hỗ trợ](#trang-được-hỗ-trợ)
- [Cài đặt](#cài-đặt)
- [Cách sử dụng](#cách-sử-dụng)
- [Các nút điều khiển](#các-nút-điều-khiển)
- [Định dạng xuất](#định-dạng-xuất)
- [So khớp đáp án](#so-khớp-đáp-án)
- [Dữ liệu đã lưu và cập nhật script](#dữ-liệu-đã-lưu-và-cập-nhật-script)
- [Nhật ký hoạt động](#nhật-ký-hoạt-động)
- [Cách hoạt động](#cách-hoạt-động)
- [Xử lý sự cố](#xử-lý-sự-cố)
- [Giới hạn và lỗi đã biết](#giới-hạn-và-lỗi-đã-biết)
- [Dành cho người phát triển](#dành-cho-người-phát-triển)
- [Tham khảo](#tham-khảo)

## Tính năng

- Nút mở nhỏ ở góc trên bên phải; bảng điều khiển mặc định được ẩn.
- Thu thập toàn bộ các trang truy cập được, hiển thị số câu và phần trăm tiến độ.
- Tạm dừng, tiếp tục và quét lại.
- Lưu dữ liệu riêng theo mã lượt làm và loại trang.
- Tải thủ công TXT, `.doc` tương thích Word và JSON.
- Sắp theo số câu hiển thị, kể cả khi mã slot nội bộ của Moodle có thứ tự khác.
- Số câu và nội dung nằm cùng dòng; cách một dòng trống giữa hai câu.
- Đối chiếu đáp án với lựa chọn để thêm nhãn `a.`, `b.`, `c.` hoặc `d.` khi khớp duy nhất trên trang xem lại.
- Nhật ký hoạt động, có nút tải và xóa riêng.

**Quét xong không tự tải file. Bạn tự nhấn nút định dạng muốn tải.**

## Trang được hỗ trợ

Script khai báo hai mẫu URL:

```text
https://courses.ut.edu.vn/mod/quiz/review.php*
https://courses.ut.edu.vn/mod/quiz/attempt.php*
```

| Hành vi | `review.php` — xem lại kết quả | `attempt.php` — đang làm bài |
| --- | --- | --- |
| Quét toàn bộ | Có, trong phạm vi được truy cập | Có, trong phạm vi được truy cập |
| Khung cảnh báo và hộp xác nhận trước khi quét | Không | Có |
| Dòng đáp án trong TXT/Word | Có nếu trang cung cấp; nếu không thì ghi thông báo thiếu đáp án | Bỏ |
| Trường `correctAnswer` trong JSON | Có | Bỏ |
| So khớp nhãn a/b/c/d | Có, khi khớp duy nhất | Không |
| Số lần tải một trang khi gặp lỗi | Tối đa 3 | 1 |
| Phản hồi chuyển hướng | Dừng, không theo chuyển hướng | Dừng, không theo chuyển hướng |

URL phải có tham số `attempt` và trang phải chứa cấu trúc câu hỏi `.que .qtext`. Chỉ mở địa chỉ `review.php` không có tham số, trang đăng nhập hoặc trang tổng quan bài kiểm tra thì chưa đủ điều kiện để bảng xuất hiện.

Đây là script dành riêng cho cổng học tập này, không phải công cụ đảm bảo dùng được với mọi hệ thống Moodle.

## Cài đặt

### Yêu cầu

- Trình duyệt được [Tampermonkey](https://www.tampermonkey.net/) hỗ trợ và đã cài tiện ích.
- Tài khoản UTH đang đăng nhập, có quyền xem các trang câu hỏi cần xuất.
- Tampermonkey được phép chạy trên `courses.ut.edu.vn`.

Không cần Node.js, Python, cài thư viện, API key hoặc bước build để sử dụng script.

### Cài bằng trình soạn thảo Tampermonkey

1. Mở [main.user.js](main.user.js). Nếu đang xem trên GitHub, nhấn **Raw** để lấy mã nguồn thuần.
2. Mở Tampermonkey → **Dashboard** → tạo script mới.
3. Xóa nội dung mẫu và dán toàn bộ `main.user.js`, gồm cả khối metadata `==UserScript==` ở đầu file.
4. Nhấn **Ctrl+S** để lưu; kiểm tra script đang được bật.
5. Đăng nhập cổng học tập, mở trang làm bài hoặc trang xem lại kết quả.
6. Nếu trang đã mở sẵn, tải lại trang.

Tùy cấu hình trình duyệt và tiện ích, mở URL Raw của file `.user.js` có thể hiện màn hình cài đặt của Tampermonkey. Nếu chỉ thấy mã nguồn, dùng cách dán vào trình soạn thảo như trên.

Nếu tiện ích báo chưa được phép thực thi userscript, làm theo [hướng dẫn quyền chạy userscript chính thức](https://www.tampermonkey.net/faq.php#Q209). Đồng thời kiểm tra quyền truy cập website của tiện ích.

## Cách sử dụng

1. Vào bài kiểm tra qua cổng học tập khi đang đăng nhập.
2. Nhấn **Xuất câu hỏi** ở góc trên bên phải. Mở bảng chưa bắt đầu quét.
3. Nhấn **Quét toàn bộ**, hoặc **Tiếp tục quét** nếu đã lưu được một phần câu hỏi.
4. Chỉ trên `attempt.php`: đọc cảnh báo và đồng ý để chạy. Chọn Hủy thì không gửi request quét và giữ dữ liệu cũ.
5. Giữ tab mở để script tải các trang được phép truy cập.
6. Khi hiện **Hoàn tất**, chọn **Tải TXT**, **Tải Word (.doc)** hoặc **Tải JSON**.

Nên dùng một tab quét cho mỗi lượt làm. Nhiều tab có thể ghi đè cùng bản dữ liệu đã lưu.

Nếu bắt đầu từ giữa bài, script vẫn tìm các trang còn thiếu, kể cả trang trước đó. Khi hệ thống không cho quay lại, việc thu thập có thể dừng trước khi đủ câu. “Quét toàn bộ” không vượt qua quy định này.

### Tạm dừng, ẩn và tiếp tục

- **Tạm dừng** ngừng thu thập và hủy request đang chạy nếu có thể.
- **×** chỉ ẩn bảng, **không** tạm dừng quét.
- **Esc** cũng ẩn bảng khi con trỏ bàn phím đang nằm trong bảng.
- Mở lại bảng không tự chạy tiếp.
- Sau khi tải lại trang, mở bảng và chủ động nhấn tiếp tục. Script không đặt thời hạn tự xóa tiến độ.

Hủy request không hoàn tác việc máy chủ có thể đã xử lý.

## Các nút điều khiển

| Nút | Chức năng |
| --- | --- |
| Xuất câu hỏi | Mở bảng điều khiển |
| Quét toàn bộ | Bắt đầu thu thập các trang truy cập được |
| Tiếp tục quét | Lấy tiếp các trang còn thiếu |
| Tạm dừng | Ngừng thu thập |
| ↻ Quét lại | Thay thế dữ liệu hiện tại và thu thập lại |
| Tải TXT | Xuất văn bản thuần |
| Tải Word (.doc) | Xuất HTML tương thích Word |
| Tải JSON | Xuất dữ liệu câu hỏi có cấu trúc |
| NHẬT KÝ | Mở phần sự kiện gần đây |
| Tải nhật ký | Tải file nhật ký riêng |
| Xóa nhật ký | Xóa log, không xóa câu hỏi |
| × | Ẩn bảng, không dừng quét |

**Quét lại khác với tiếp tục.** Trên trang xem lại, nút quét lại thay thế dữ liệu hiện tại ngay. Trên trang làm bài, nút này yêu cầu xác nhận cảnh báo trước. Chỉ bản dữ liệu của loại trang và mã lượt làm hiện tại bị ảnh hưởng.

## Định dạng xuất

| Định dạng | Nội dung và giới hạn |
| --- | --- |
| TXT | Văn bản UTF-8 có BOM, thuận tiện để đọc và sao chép |
| Word `.doc` | HTML mang đuôi `.doc`, không phải DOC nhị phân hay DOCX gốc |
| JSON | Dữ liệu câu hỏi và metadata có cấu trúc; không có BOM |

Word có thể hỏi xác nhận định dạng khi mở file `.doc`. Sau khi mở, có thể dùng **Save As → .docx**.

Tên file theo mẫu:

```text
UTH-<attempt>-<count>-cau.txt
UTH-<attempt>-<count>-cau.doc
UTH-<attempt>-<count>-cau.json
```

File xuất khi chưa đủ câu có thêm `-chua-du` trước phần mở rộng và trạng thái chưa hoàn tất trong metadata.

### Bố cục văn bản

Đầu file có tiêu đề, mã lượt làm, số câu đã lấy/tổng dự kiến, trạng thái và URL nguồn. Phần câu hỏi dùng bố cục sau; nội dung dưới đây chỉ là ví dụ:

```text
Câu hỏi 1 Nội dung câu hỏi?
a. Lựa chọn thứ nhất
b. Lựa chọn thứ hai
c. Lựa chọn thứ ba
d. Lựa chọn thứ tư
Đáp án: b. Lựa chọn thứ hai

Câu hỏi 2 Nội dung câu tiếp theo?
a. Lựa chọn thứ nhất
b. Lựa chọn thứ hai
c. Lựa chọn thứ ba
d. Lựa chọn thứ tư
Đáp án: d. Lựa chọn thứ tư
```

Khi xuất từ `attempt.php`, bỏ các dòng `Đáp án:`.

Quy tắc định dạng:

- Số câu và nội dung nằm cùng dòng.
- Mỗi lựa chọn một dòng, cách một dòng trống giữa hai câu.
- Bỏ các dòng phân cách chỉ gồm dấu gạch dưới hoặc dấu bằng và các dòng trống dư.
- Giữ dấu gạch dưới/dấu bằng nằm trong nội dung có ý nghĩa.
- Giữ mã câu như `::C5.002::[html]` nếu nội dung gốc có.
- Bỏ trường câu trả lời cá nhân, dấu đã chọn và nhãn kết quả như `Kết quả: Đúng/Sai`.
- Giữ phản hồi riêng/giải thích chung nếu có.
- Hình ảnh được lưu thành mô tả văn bản và URL, không nhúng file ảnh.

Mỗi lần xuất dùng toàn bộ câu đã lưu của loại trang và lượt làm hiện tại. Thay đổi định dạng cũng áp dụng khi xuất lại dữ liệu cũ.

### Cấu trúc JSON

Các trường cấp cao: `title`, `attempt`, `complete`, `expected` và `questions`.

Mỗi câu có `id`, `slot`, `number`, `question`, `options`, `feedback`, `generalFeedback`, `images` và `source`. File từ trang xem lại có thêm `correctAnswer`; file từ trang làm bài bỏ trường này. Mỗi lựa chọn xuất ra có trường `text`.

Nhật ký được tải riêng, không gộp vào JSON câu hỏi.

## So khớp đáp án

Trên trang xem lại, script ưu tiên đọc `.rightanswer`, rồi bỏ tiền tố tiếng Anh `The correct answer is:` hoặc dạng số nhiều.

Sau đó so sánh với nội dung các lựa chọn a/b/c/d:

1. Chuẩn hóa Unicode về NFC và gộp khoảng trắng.
2. Giữ nguyên từ ngữ, dấu tiếng Việt, chữ hoa/thường và dấu câu.
3. Chỉ thêm chữ cái khi có đúng một lựa chọn khớp.
4. Không khớp hoặc trùng nhiều lựa chọn thì giữ nguyên đáp án.
5. Đáp án đã khớp cả nhãn và nội dung lựa chọn thì không thêm nhãn lần nữa.

Đây là so sánh chính xác sau chuẩn hóa, không phải so khớp gần đúng hay suy luận bằng AI.

Nếu không có `.rightanswer`, script có thể ghi các lựa chọn được trang đánh dấu đúng, kèm chú thích danh sách có thể chưa đầy đủ. Nếu không có cả hai nguồn, file từ trang xem lại ghi `Trang không hiển thị đáp án đúng.` Script không coi lựa chọn người dùng đã chọn là bằng chứng đáp án đúng.

## Dữ liệu đã lưu và cập nhật script

Script dùng bộ nhớ Tampermonkey thông qua `GM_getValue` và `GM_setValue`:

| Loại trang | Khóa lưu |
| --- | --- |
| Xem lại kết quả | `uth-quiz-export-v1:<attempt>` |
| Đang làm bài | `uth-quiz-probe-v1:<attempt>` |

Tên khóa `probe` được giữ từ phiên bản cũ để tương thích dữ liệu; không có nghĩa là vẫn tồn tại chế độ quét giới hạn.

Bản lưu gồm câu hỏi, trang đã đọc/đã phát hiện, danh sách mã câu dự kiến, trạng thái hoàn tất và nhật ký. Script không có cơ chế tự hết hạn dữ liệu.

- Cập nhật đúng script đang cài thì dữ liệu đã lưu vẫn giữ.
- Đóng hoặc tải lại trang không chủ động xóa dữ liệu.
- **Quét lại** thay thế bản lưu hiện tại, gồm cả nhật ký.
- **Xóa nhật ký** chỉ xóa log; nút bị vô hiệu hóa trong lúc quét.
- Xóa bộ nhớ script hoặc mất dữ liệu tiện ích/hồ sơ trình duyệt có thể làm mất bản lưu.
- File đã tải xuống độc lập với bộ nhớ này, không bị xóa khi quét lại.

Để cập nhật: thay mã của script hiện có trong Tampermonkey bằng `main.user.js` mới, lưu rồi tải lại trang bài kiểm tra. Dùng **Quét lại** nếu muốn lấy nội dung mới từ máy chủ thay vì chỉ xuất lại bản đã lưu.

## Nhật ký hoạt động

Phiên bản 1.3.1 ghi trạng thái quét, trang đã đọc, số câu mới, lần thử lại, tạm dừng, hoàn tất và lỗi.

- Lưu tối đa **250** sự kiện trong mỗi bản dữ liệu.
- Hiển thị **100** sự kiện gần nhất trên bảng.
- Tải các sự kiện còn lưu thành `UTH-<attempt>-nhat-ky.txt`.
- File nhật ký có chứa URL trang hiện tại.

Xem lỗi tải nhật ký của phiên bản này ở phần dưới trước khi dùng nút đó để chẩn đoán.

## Cách hoạt động

1. Đọc câu hỏi đã có trong HTML của trang hiện tại.
2. Tìm liên kết phân trang từ bảng câu hỏi Moodle và các nút trang trước/trang tiếp.
3. Tải tuần tự các trang chưa đọc bằng phiên đăng nhập hiện tại.
4. Phân tích HTML phản hồi bằng `DOMParser`.
5. Gộp câu theo slot nội bộ để tránh trùng và lưu tiến độ.
6. Khi xuất, sắp theo số câu hiển thị.

Khoảng nghỉ mặc định giữa các trang là **700 ms**; mỗi fetch có thời hạn **30 giây**. Trên trang xem lại, lỗi tải thông thường có thể được thử lại hai lần; trên trang đang làm không tự thử lại. Phản hồi chuyển hướng sẽ dừng quét ở cả hai loại trang.

Request dùng `credentials: 'same-origin'` và `redirect: 'manual'`. Script không trích xuất thông tin đăng nhập, gửi form bài làm hoặc tải dữ liệu câu hỏi lên dịch vụ ngoài. Tuy vậy đây vẫn là request thật có xác thực: GET trên trang làm bài có thể thay đổi tiến trình điều hướng phía máy chủ.

## Xử lý sự cố

| Hiện tượng | Cách kiểm tra |
| --- | --- |
| Không thấy nút mở | Bật script và tiện ích; kiểm tra quyền truy cập website và quyền chạy userscript; mở trang bài kiểm tra đã đăng nhập có tham số `attempt` và câu hỏi; tải lại trang |
| Có cảnh báo | Đúng trên `attempt.php`; trang xem lại không hiển thị hộp xác nhận hay khung cảnh báo |
| Dừng do chuyển hướng | Kiểm tra đăng nhập và quyền truy cập; script chủ động không theo chuyển hướng |
| Còn thiếu câu | Kiểm tra quy định điều hướng và việc khóa trang trước; có thể tải phần đã lấy |
| File từ trang đang làm không có đáp án | Đúng thiết kế: `attempt.php` không xuất trường đáp án |
| Trang xem lại báo chưa có đáp án | HTML trả về chưa cung cấp đáp án qua các selector script hỗ trợ |
| Đáp án không có chữ a/b/c/d | Nội dung sau chuẩn hóa không khớp duy nhất một lựa chọn có nhãn |
| Hoàn tất nhưng chưa có file | Đúng thiết kế: bạn tự nhấn nút tải |
| Word báo định dạng không khớp | Đây là HTML mang đuôi `.doc`; mở và lưu thành `.docx` nếu cần |
| Định dạng mới nhưng nội dung câu hỏi cũ | Xuất lại để áp dụng định dạng; quét lại để cập nhật nội dung từ máy chủ |
| Tải nhật ký gây lỗi console | Xem lỗi phiên bản 1.3.1 bên dưới |

## Giới hạn và lỗi đã biết

- Thiết kế theo HTML Moodle của cổng này, chủ yếu cho câu hỏi trắc nghiệm. Câu hỏi phức tạp, công thức toán, nội dung đa phương tiện và plugin riêng có thể không xuất đầy đủ.
- Không khôi phục đáp án ẩn, vượt quyền truy cập hoặc đảm bảo quét đủ trên đề tuần tự.
- Chỉ sửa `@match` không đủ để đảm bảo dùng được với website khác.
- Giao diện và nhãn trong file xuất ra vẫn là tiếng Việt.
- Trình duyệt hạn chế hoạt động tab nền hoặc mạng chậm có thể kéo dài quá trình quét.

**Lỗi đã thấy trong mã phiên bản 1.3.1:** hàm `downloadLog()` có một dòng ghi log tham chiếu `format` và `questions` nhưng hai biến không được định nghĩa trong hàm đó. Dòng này chạy sau thao tác yêu cầu tải file nhật ký, có thể gây `ReferenceError` và ngăn thông báo thành công phía sau. Điều đó không xác nhận trình duyệt đã lưu file hay chưa. Lượt cập nhật tài liệu này không sửa userscript.

## Dành cho người phát triển

Mã chạy: [main.user.js](main.user.js). Tài liệu: [README.md](README.md) và [README.vi.md](README.vi.md).

Không cần build. Nếu đã cài Node.js, kiểm tra cú pháp JavaScript từ thư mục này:

```sh
node --check main.user.js
```

Kiểm tra cú pháp không xác nhận hành vi trên Moodle thật và không phát hiện mọi lỗi khi chạy. Thư mục hiện chưa kèm bộ chạy kiểm thử tự động.

Khi kiểm tra thủ công, bắt đầu bằng trang xem lại: mở/ẩn bảng, quét, tạm dừng/tiếp tục, dùng lại bản lưu, tải file thủ công, thứ tự câu, nhãn đáp án và nhật ký. Chỉ kiểm tra trang đang làm trên lượt thử được phép và chấp nhận được tác động tới điều hướng.

Chỉ userscript cần thiết lúc chạy. Các file HTML đã lưu và tài liệu môn học trong thư mục không phải thành phần cần cài.

## Tham khảo

- [Mã nguồn userscript](main.user.js)
- [Hướng dẫn tiếng Anh](README.md)
- [Tài liệu Tampermonkey](https://www.tampermonkey.net/documentation.php)
- [Câu hỏi thường gặp của Tampermonkey](https://www.tampermonkey.net/faq.php)
- [Quyền thực thi userscript](https://www.tampermonkey.net/faq.php#Q209)

# 🎖️ GDQP & AN NINH — Ứng dụng Ôn tập Quốc phòng

> Ứng dụng ôn tập & thi thử môn **Giáo dục Quốc phòng và An ninh** với giao diện chủ đề quân sự, hỗ trợ nhiều chế độ học tập.

---

## 📋 Giới thiệu

**GDQP & AN NINH** là một ứng dụng web Single Page Application (SPA) được xây dựng bằng **React + Vite**, giúp sinh viên ôn tập và thi thử môn Giáo dục Quốc phòng - An ninh một cách hiệu quả.

Ứng dụng cung cấp ngân hàng câu hỏi với **336 câu** được chia thành **23 bộ đề**, mỗi bộ 15 câu. Giao diện thiết kế theo chủ đề quân sự với màu sắc xanh lá đậm và vàng đồng.

---

## ✨ Tính năng

### 📖 Chế độ Ôn tập theo thứ tự
- Luyện tập toàn bộ 336 câu hỏi từ đầu đến cuối
- Hiển thị đáp án đúng/sai **ngay sau khi chọn**
- Theo dõi điểm số theo thời gian thực

### 🔀 Chế độ Ôn tập xáo trộn
- Toàn bộ câu hỏi được **xáo ngẫu nhiên** mỗi lần bắt đầu
- Phù hợp để kiểm tra mức độ nhớ bài

### 📚 Chế độ Bộ đề (15 câu/đề)
- **23 bộ đề** cố định, mỗi bộ gồm 15 câu liên tiếp
- Mỗi bộ đề có 2 phân loại:
  - **Ôn tập**: Thấy đáp án đúng/sai ngay sau mỗi câu
  - **Thi thử**: Làm hết 15 câu mới nộp bài, sau đó xem kết quả chi tiết

#### Kết quả chi tiết sau thi thử bộ đề:
- Điểm số thang 10, hiển thị Đạt / Chưa đạt
- Thống kê số câu đúng / sai / tổng
- **Danh sách từng câu** có thể click để mở rộng:
  - Đánh dấu ✅ câu đúng, ❌ câu sai
  - Xem nội dung câu hỏi
  - So sánh đáp án bạn chọn vs đáp án đúng

### 📝 Chế độ Thi thử (60 câu)
- 60 câu được **chọn ngẫu nhiên** từ ngân hàng câu hỏi
- Không hiển thị đáp án trong quá trình làm bài
- Chấm điểm thang 10 sau khi nộp bài
- Ngưỡng đạt: **≥ 3.0 điểm**

---

## 🖥️ Giao diện

Ứng dụng sử dụng **chủ đề Quốc phòng - An ninh**:

| Yếu tố | Chi tiết |
|--------|----------|
| **Nền** | Xanh lá rừng đậm (#0b1510) |
| **Font tiêu đề** | Oswald — bold, in hoa, phong cách quân phục |
| **Màu nhấn chính** | Vàng đồng (#c9a84c) |
| **Màu chế độ ôn tập** | Xanh lá quân đội (#4a7c3f) |
| **Màu chế độ xáo trộn** | Xanh teal quân sự (#2a6b6b) |
| **Màu bộ đề** | Vàng đồng (#c9a84c) |
| **Màu thi thử 60 câu** | Nâu đất (#8b5a2a) |

---

## 🗂️ Cấu trúc dự án

```
QP1OT/
├── src/
│   ├── App.jsx                    # Component chính, quản lý toàn bộ state & routing
│   ├── App.css                    # Styles cho App (chủ đề quân sự)
│   ├── index.css                  # Global styles, CSS variables, fonts
│   ├── main.jsx                   # Entry point
│   ├── components/
│   │   ├── QuestionCard.jsx       # Card câu hỏi cho chế độ Ôn tập (hiện đáp án ngay)
│   │   ├── QuestionCard.css       # Styles riêng cho QuestionCard
│   │   ├── ExamCard.jsx           # Card câu hỏi cho chế độ Thi thử (ẩn đáp án)
│   │   └── SetResultScreen.jsx    # Màn hình kết quả chi tiết bộ đề thi thử
│   └── data/
│       └── questions.json         # Ngân hàng 336 câu hỏi (id, question, options, correctAnswer)
├── QP1_full.md                    # Nguồn câu hỏi gốc (Markdown)
├── update_questions.js            # Script cập nhật questions.json từ QP1_full.md
├── gen1.js                        # Script tạo dữ liệu ban đầu
├── parse.js                       # Script phân tích cú pháp câu hỏi
├── check_answers.js               # Script kiểm tra đáp án
├── check_options.js               # Script kiểm tra các lựa chọn
├── index.html                     # HTML entry point
├── vite.config.js                 # Cấu hình Vite
└── package.json                   # Dependencies
```

---

## 🚀 Cài đặt & Chạy

### Yêu cầu
- **Node.js** >= 16.x
- **npm** >= 8.x

### Cài đặt

```bash
# Clone repository
git clone https://github.com/UIBreaker/QP1OT.git
cd QP1OT

# Cài đặt dependencies
npm install
```

### Chạy môi trường phát triển

```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

### Build production

```bash
npm run build
```

---

## 📊 Cấu trúc dữ liệu

Mỗi câu hỏi trong `questions.json` có cấu trúc:

```json
{
  "id": 1,
  "question": "Đối tượng nghiên cứu của môn học Giáo dục quốc phòng – an ninh là gì?",
  "options": [
    "A. Đường lối quân sự của Đảng, công tác quốc phòng, an ninh và kỹ năng quân sự cần thiết",
    "B. Quan điểm đường lối quân sự của Đảng về xây dựng nền quốc phòng toàn dân.",
    "C. Quan điểm của chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh về công tác quốc phòng, an ninh.",
    "D. Quan điểm của Chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh về chiến tranh và quân đội"
  ],
  "correctAnswer": "A"
}
```

---

## 🔧 Cập nhật ngân hàng câu hỏi

Câu hỏi được lưu trong `QP1_full.md` theo định dạng Markdown. Để cập nhật `questions.json`:

1. Chỉnh sửa file `QP1_full.md` — thêm câu hỏi mới hoặc sửa đáp án
2. Chạy script cập nhật:

```bash
node update_questions.js
```

### Định dạng câu hỏi trong QP1_full.md

```markdown
**Câu 1:** Đối tượng nghiên cứu của môn học là gì?
A. Đường lối quân sự...
B. Quan điểm đường lối...
C. Quan điểm của chủ nghĩa...
D. Quan điểm của Chủ nghĩa...
**Đáp án: A**
```

---

## 🧭 Luồng điều hướng

```
HOME
├── Ôn tập theo thứ tự  → [PRACTICE]  → câu 1..N → hiện đáp án → RESULT
├── Ôn tập xáo trộn     → [SHUFFLE]   → câu xáo → hiện đáp án → RESULT
├── Bộ đề (15 câu)      → [SET_SELECT]
│   ├── Bộ X > Ôn tập   → [SET_PRACTICE] → 15 câu → hiện đáp án → RESULT
│   └── Bộ X > Thi thử  → [SET_EXAM]    → 15 câu → nộp bài → SET_RESULT (chi tiết)
└── Thi thử (60 câu)    → [EXAM]       → 60 câu → nộp bài → RESULT (điểm thang 10)
```

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| **React** | 18.x | UI framework |
| **Vite** | 5.x | Build tool & dev server |
| **Vanilla CSS** | — | Styling, không dùng framework CSS |
| **Google Fonts** | — | Font Oswald & Inter |
| **Node.js scripts** | — | Xử lý & parse dữ liệu câu hỏi |

---

## 📝 License

Dự án được tạo cho mục đích học tập và ôn thi môn Giáo dục Quốc phòng - An ninh.

---

<div align="center">
  <strong>⭐ BỘ QUỐC PHÒNG VIỆT NAM ⭐</strong><br>
  <em>Giáo dục Quốc phòng & An ninh — 336 câu hỏi · 23 bộ đề</em>
</div>

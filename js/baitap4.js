/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + chiều dài
 * + chiều rộng 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo biến và gán giá trị khởi tạo
 * B2: Xây dựng công thức tính toán
 * + diện tích = chiều dài * chiều rộng;
 * + chu vi = (chiều dài + chiều rộng)*2;
 * 
 * B3: Hiển thị kết quả (console.log)
 * 
 * Khối 3: Output (kết quả)
 * + diện tích
 * + chu vi
 */

// B1:
var chieuDai = 3;
var chieuRong = 2;
var dienTich = 0;
var chuVi = 0;

// B2:
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) *2;

// B3:
console.log("Diện tích của hình chữ nhật là " + dienTich);
console.log("Chu vi của hình chữ nhật là " + chuVi);

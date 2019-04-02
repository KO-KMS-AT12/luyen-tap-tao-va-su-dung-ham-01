// Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi  "Xin chao".
// Gọi hàm từ trong phần <body> của trang web.
function alertMessage() {
    alert("Xin chao");
}

//Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1
// và trả lại giá trị cho lời gọi hàm.
// Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.

function bai2(number) {
    number = parseInt(number);
    number++;
    alert("Bai 2: result = "+number);
}

// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai,
// trả về tổng của hai tham số.
function bai3(a, b) {
    if (a > b) {
        alert(a + " > " + b);
    } else if (a <= b) {
        alert("Tong hai so: " + (a + b));
    }
}

// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để
// bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

function mainBai4() {
    addNumbers();
    result = 0;
    alert("result dc goi trc function addNumbers la : " + result);
    result = addNumbers();
    alert("result dc goi sau khi goi ham function addNumbers la : " + result);
}


//Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau:
// Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus.
// Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị
// là tên các chòm sao tương ứng chứa các ngôi sao:
// Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo.
// Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất.
// Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao.
// Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai.
// Nói cách khác, trả lại tên chòm sao của ngôi sao đó.
// Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập
// vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào.
// Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào.
// Cho kết quả hiển thị trên màn hình.

var arrStar = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']
var arrConstellation = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo']
var result = document.getElementById("result");

function bai5(str) {
    for (let i = 0; i < arrStar.length; i++) {
        if (str == arrStar[i]) {
            result.innerHTML = "Ngoi sao " + arrStar[i] + " chom sao tuong ung la: " + arrConstellation[i];
            break;
        } else {
            result.innerHTML = "Ngoi sao " + arrStar[i] + " khong tim thay";
        }
    }
}

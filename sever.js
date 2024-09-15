document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không cho form tự động gửi

    // Lấy giá trị từ các trường
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin (ví dụ đơn giản, bạn có thể thay đổi tùy theo yêu cầu)
    if (username === 'nguyenthiquynhhoa' && password === '220710') {
        // Nếu thông tin đúng, chuyển hướng đến trang hình ảnh
        window.location.href = 'cute.jpg'; // Đường dẫn đến trang hình ảnh
    } else {
        // Hiển thị thông báo lỗi nếu thông tin không đúng
        document.getElementById('error-message').textContent = 'Tên người dùng hoặc mật khẩu không đúng!';
    }
});

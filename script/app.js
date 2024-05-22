// Tính toán thời gian còn lại từ thời điểm hiện tại đến ngày 25/05/2024 21h UTC
function calculateCountdown() {
    const endDate = new Date("2024-05-22T15:00:00Z").getTime(); // Ngày cụ thể
    const now = new Date().getTime(); // Thời gian hiện tại
    const timeRemaining = endDate - now; // Tính thời gian còn lại

    // Tính toán số ngày, giờ, phút, giây còn lại
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Hiển thị kết quả trong phần tử có id là "countdown"
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${days} Days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Cập nhật thời gian mỗi giây
setInterval(calculateCountdown, 1000);

// Khởi chạy tính toán lần đầu
calculateCountdown();

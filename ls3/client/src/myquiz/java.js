// Lấy các thành phần giao diện
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

const startBtn = document.getElementById('start-btn');
const saveBtn = document.getElementById('save-btn');

// Hàm chuyển màn hình
function showScreen(screenToShow) {
    homeScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    
    screenToShow.classList.remove('hidden');
}

// Sự kiện khi nhấn Bắt đầu
startBtn.addEventListener('click', () => {
    showScreen(quizScreen);
    // Ở bài sau, bạn sẽ viết logic tải câu hỏi tại đây
});

// Sự kiện khi nhấn Lưu điểm
saveBtn.addEventListener('click', () => {
    const name = document.getElementById('username').value;
    if (name === "") {
        alert("Vui lòng nhập tên trước khi lưu!");
        return;
    }
    console.log(`Đã lưu điểm cho: ${name}`);
    alert("Điểm đã được lưu (giả lập)!");
    location.reload(); // Quay lại trang chủ
});
// import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
// import { db } from "./firebase-config";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDn8-WFnJrZjeksLysPj7WeVyx4ES535kQ",
//     authDomain: "test-da037.firebaseapp.com",
//     projectId: "test-da037",
//     storageBucket: "test-da037.firebasestorage.app",
//     messagingSenderId: "502121516938",
//     appId: "1:502121516938:web:92017fb02465017888c273"
// };


// const app = initializeApp(firebaseConfig);


// const q = query(
//     collection(db, "leaderboard"),
//     orderBy("score", "desc"), // Sắp xếp giảm dần
//     limit(10)                 // Chỉ lấy Top 10
// );

// // Lắng nghe thay đổi thời gian thực
// onSnapshot(q, (querySnapshot) => {
//     const topScores = [];
//     querySnapshot.forEach((doc) => {
//         topScores.push(doc.data());
//     });

//     console.log("Top 10 hiện tại:", topScores);
//     // Gọi hàm hiển thị dữ liệu lên giao diện của bạn tại đây
//     renderLeaderboard(topScores);
// });

// import { collection, query, where, getDocs } from "firebase/firestore";

// async function searchUserScore(username) {
//     const q = query(
//         collection(db, "leaderboard"),
//         where("username", "==", username)
//     );

//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//         querySnapshot.forEach((doc) => {
//             console.log(`Người dùng ${username} có điểm là: ${doc.data().score}`);
//         });
//     } else {
//         console.log("Không tìm thấy người dùng này.");
//     }
// }

// function renderLeaderboard(dataList) {
//     const tableBody = document.getElementById('leaderboardBody');
//     tableBody.innerHTML = ''; // Xóa dữ liệu cũ

//     dataList.forEach((user, index) => {
//         const row = `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${user.username}</td>
//                 <td><strong>${user.score}</strong></td>
//             </tr>
//         `;
//         tableBody.innerHTML += row;
//     });
// }

// // Hàm xử lý khi nhấn nút Tìm kiếm
// async function handleSearch()  {
//     const name = document.getElementById('searchInput').value;
//     if (!name) 
//         return alert("Vui lòng nhập tên!");

//     // Gọi hàm searchUserScore đã viết ở bước trước
//     await searchUserScore(name);
// }


import { collection, query, where, limit, getDocs, orderBy, startAt } from "firebase/firestore";
import { db } from "./firebase-config";

async function getRandomQuestions(selectedDifficulty) {
    const questionsRef = collection(db, "questions");

    // Tạo một số ngẫu nhiên để làm điểm bắt đầu lấy dữ liệu
    const randomStart = Math.random();

    const q = query(
        questionsRef,
        where("difficulty", "==", selectedDifficulty),
        orderBy("randomKey"), // Phải tạo field randomKey trong DB trước
        startAt(randomStart),
        limit(10)
    );

    const querySnapshot = await getDocs(q);
    let questions = [];
    querySnapshot.forEach((doc) => {
        questions.push({ id: doc.id, ...doc.data() });
    });

    // Nếu không đủ 10 câu (do randomStart nằm ở cuối danh sách), lấy lại từ đầu
    if (questions.length < 10) {
        const fallbackQuery = query(
            questionsRef,
            where("difficulty", "==", selectedDifficulty),
            orderBy("randomKey"),
            limit(10)
        );
        const fallbackSnapshot = await getDocs(fallbackQuery);
        questions = [];
        fallbackSnapshot.forEach(doc => questions.push({ id: doc.id, ...doc.data() }));
    }

    return questions;
}

let currentScore = 0;

// Hàm hiển thị câu hỏi (Giả định bạn có div id="quiz-container")
function displayQuestion(question) {
    const container = document.getElementById("quiz-container");
    container.innerHTML = `
    <h3>${question.questionText}</h3>
    ${question.options.map(opt => `
      <button onclick="checkAnswer('${opt}', '${question.correctAnswer}')">
        ${opt}
      </button>
    `).join('')}
  `;
}

// Hệ thống chấm điểm
function checkAnswer(selected, correct) {
    if (selected === correct) {
        currentScore += 10; // Mỗi câu đúng cộng 10 điểm
        alert("Chính xác!");
    } else {
        alert(`Sai rồi! Đáp án đúng là: ${correct}`);
    }
    console.log("Điểm hiện tại:", currentScore);
    // Sau đó gọi hàm để chuyển sang câu hỏi tiếp theo
}
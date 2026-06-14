import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef..."
};


const app = initializeApp(firebaseConfig);


if (app) {
    console.log("🔥 Firebase đã kết nối thành công vào dự án QUIZ!");
} else {
    console.log("❌ Kết nối Firebase thất bại, hãy kiểm tra lại cấu hình.");
}

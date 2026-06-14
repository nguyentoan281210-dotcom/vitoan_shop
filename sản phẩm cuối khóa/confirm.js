
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyDIRKCwnv7wFyGKtRM0nxhNoZdC2PNtoAE",
    authDomain: "spck-404dd.firebaseapp.com",
    projectId: "spck-404dd",
    storageBucket: "spck-404dd.firebasestorage.app",
    messagingSenderId: "634818298076",
    appId: "1:634818298076:web:912c6a1a51113069fa7419",
    measurementId: "G-KG00RXL0VK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
export { auth, db }

function getInput() {
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    return { email, password }
}

window.register = async function () {
    const { email, password } = getInput()
    if (!email || !password) {
        document.getElementById(".message").innerText = "Vui long dang nhap thong tin"
        return;
    }
    const user = await createUserWithEmailAndPassword(auth, email, password)
    document.getElementById("message").innerHTML = "Dang ky thanh cong"
}


// if (app) {
//     console.log("🔥 Firebase đã kết nối thành công vào dự án QUIZ!");
// } else {
//     console.log("❌ Kết nối Firebase thất bại, hãy kiểm tra lại cấu hình.");
// }

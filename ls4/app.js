import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyB9gKgHmXY1DujLwnM8AGaiOkTLa0sUvAo",
    authDomain: "test-a6a8a.firebaseapp.com",
    projectId: "test-a6a8a",
    storageBucket: "test-a6a8a.firebasestorage.app",
    messagingSenderId: "225596284299",
    appId: "1:225596284299:web:59c698b04b5acaf332238e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app)
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


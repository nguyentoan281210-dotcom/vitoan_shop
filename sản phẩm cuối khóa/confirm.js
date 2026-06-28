

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js"




const firebaseConfig = {
    apiKey: "AIzaSyCsazhg-XN02UcJbeJKhTS1vikgGiNckZk",
    authDomain: "spck2-822ad.firebaseapp.com",
    projectId: "spck2-822ad",
    storageBucket: "spck2-822ad.firebasestorage.app",
    messagingSenderId: "248899152311",
    appId: "1:248899152311:web:9cd7c46eb2740c0358a032",
    measurementId: "G-ZJV7MK7WLP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
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






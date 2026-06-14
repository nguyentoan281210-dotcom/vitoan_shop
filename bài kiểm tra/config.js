
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/ui/12.0.12/firebase-ui-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.12/firebase-firestore.js"

  const firebaseConfig = {
    apiKey: "AIzaSyBtdepYGODdG2MSymhyRa6tx-z6oYxEWdY",
    authDomain: "test-1234-31b8a.firebaseapp.com",
    projectId: "test-1234-31b8a",
    storageBucket: "test-1234-31b8a.firebasestorage.app",
    messagingSenderId: "277875379040",
    appId: "1:277875379040:web:0abcd7ca7a48ffaf376c05",
    measurementId: "G-Y5WV5E5CLE"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app)
  export { auth , db}

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



  
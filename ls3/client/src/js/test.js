import {db} from "./firebase-config.js";
import {collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

addDoc(collection(db, "test"), {
    message: "Kết nối thành công",
    time: new Date()
})
.then(() => {
    console.log("Firebase đã kết nối thành công!");
})
.catch((error) => {
    console.error("Lỗi:", error);
})
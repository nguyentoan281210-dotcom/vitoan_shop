// const products = [
//     {
//         id: 1,
//         name: "Áo thun in hình dáng rộng",
//         price: "350.000đ",
//         desc: "Áo thun cotton cao cấp, form rộng trẻ trung, mặc thoải mái.",
//         image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQum7lX7otNboYJ_kRHe_8HHpvE9ggrR7CHyvJrHFagIsVnGffq5-SWtjp_TSEYi7vf6VSlmmRQF6X0qM_CsNDNlUsAsKwZ5XRcFk1spS5jT2xBiE-iswDBnBoZZK9D4fSfq_6XA64&usqp=CAc"
//     },

//     {
//         id: 2,
//         name: "Áo thun cotton in hình",
//         price: "320.000đ",
//         desc: "Áo thun cotton mềm mại, thấm hút mồ hôi tốt.",
//         image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYaT2bvfVuO9NC1IbiRkzI82RgHUIFhoQejxB83aeH_LFkvlXNL8KeAL6PgY8WJkp0xELdRY2ZLpek6XszXOKCBenst_wT5qKvlZPdEAjGi5aSVRDGxHV7UJrJ-koDall-rZTrTuk&usqp=CAc"
//     },

//     {
//         id: 3,
//         name: "Áo Thun Cổ Tròn Big Size Navy BS2763",
//         price: "450.000đ",
//         desc: "Áo big size phù hợp nhiều vóc dáng, chất liệu co giãn.",
//         image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiIa1UKt2JA6yTr0VSUKYxMFeT1XUNUGV9KeVJD38Yi8XT0MyDgZhjgSXYm_pe5VIKJCoHjvpWDObR-pTT60ZgZoHSHmIZj2uTDZyL2vPce9clzTt0eqjpWv6di2AmTWAf-8zIxwU&usqp=CAc"
//     }

//     // Thêm các sản phẩm còn lại...
// ];

// // Lấy id trên URL
// const params = new URLSearchParams(window.location.search);

// const id = Number(params.get("id"));

// const product = products.find(item => item.id === id);

// if (product) {

//     document.getElementById("product-img").src = product.image;

//     document.getElementById("product-img").alt = product.name;

//     document.getElementById("product-name").innerText = product.name;

//     document.getElementById("product-desc").innerText = product.desc;

//     document.getElementById("product-price").innerText = product.price;

// } else {

//     document.querySelector(".detail-container").innerHTML =
//         "<h2>Không tìm thấy sản phẩm</h2>";

// }

// import { products } from "./product.js";

// // 1. Phải đồng nhất tên biến (Thêm chữ 's' vào params)
// const params = new URLSearchParams(window.location.search);
// const id = Number(params.get("idhtml")); // Sửa thành params.get

// // 2. Tìm kiếm sản phẩm
// const product = products.find(item => Number(item.id) === idhtml);

// // 3. Kiểm tra và đổ dữ liệu ra giao diện
// if (product) {
//     document.getElementById("product-img").src = product.image;
//     document.getElementById("product-img").alt = product.name;
//     document.getElementById("product-name").innerText = product.name;
//     document.getElementById("product-desc").innerText = product.desc;
//     document.getElementById("product-price").innerText = product.price;
// } else {
//     document.querySelector(".detail-container").innerHTML = "<h2>Không tìm thấy sản phẩm</h2>";
// }


import { products } from "../product/product.js";
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("idhtml"));
const product = products.find(item => Number(item.id) === id);

console.log("product tìm được =", product);
if (product) {
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-img").alt = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-desc").textContent = product.desc;
    document.getElementById("product-price").textContent = product.price;
} else {
    document.querySelector(".detail-container").innerHTML =
        "<h2>Không tìm thấy sản phẩm</h2>";
}
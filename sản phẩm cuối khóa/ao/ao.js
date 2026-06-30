import { products } from "../products.js";
const list = document.getElementById("product-list");
products.forEach(product => {
    list.innerHTML += `
<div class="card" style="width:18rem">
<img
class="card-img-top"
src="${product.image}"
alt="${product.name}">
<div class="card-body">
<p class="card-text">
${product.name}
</p>
<h5>${product.price}</h5>
<a
href="../detail/detail.html?id=${product.id}"
class="btn btn-primary">
Mua hàng
</a>
</div>
</div>
`;
});
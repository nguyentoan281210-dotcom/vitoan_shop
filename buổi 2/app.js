const product = "Laptop";
const price = 1500;
const vat = 0.1;
const totalPrice = price + price * vat
const invoice = `Sản phẩm: ${product}
Giá: $${price}
Thuế VAT: ${vat * 100}%
Tổng thanh toán: $${totalPrice}.`;
console.log(invoice)




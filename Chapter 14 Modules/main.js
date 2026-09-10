import { calculateTotal } from "./order.js";
import { displayProduct } from "./product.js";
const product = {
    id: 1,
    name: "Laptop",
    price: 37000,
    category: "Electronics"
};
displayProduct(product);
const quantity = 3;
const Total = calculateTotal(product.price, quantity);
console.log("Quantity:", quantity);
console.log("Total Price:", Total);

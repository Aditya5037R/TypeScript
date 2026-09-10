import { calculateTotal } from "./order.js";
import { displayProduct, Product } from "./product.js";

const product:Product={
    id:1,
    name:"Laptop",
    price:37000,
    category:"Electronics"
}
displayProduct(product)
const quantity:number=3
const Total:number=calculateTotal(product.price,quantity)
console.log("Quantity:",quantity);
console.log("Total Price:",Total);


// output
// Product ID: 1
// Product Name: Laptop
// Product Price: 37000
// Product Category: Electronics
// Quantity: 3
// Total Price: 111000
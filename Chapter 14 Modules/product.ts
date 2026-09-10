export interface Product{
    id:number;
    name:string;
    price:number;
    category:string;
}

export function displayProduct(product:Product){
    console.log("Product ID:",product.id);
    console.log("Product Name:",product.name);
    console.log("Product Price:",product.price);
    console.log("Product Category:",product.category); 
}
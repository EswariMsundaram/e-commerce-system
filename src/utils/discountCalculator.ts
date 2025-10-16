/*Create a calculateDiscount() function to handle discount calculations for products.
This function should return the dollar amount that a product is discounted by. 
For example, if a product costs $100 and has a 10% discount, the function should return $10.*/

import Product from "/Users/eswar/Desktop/2025-rtt-54/mod6/e-commerce-system/src/models/Product.ts"

export function calculateDiscount(product: Product){

    const discountedPrice= product.getPriceWithDiscount();
    console.log(`Discounted amount for the product $ ${discountedPrice.toFixed(2)}`)
    const discountedAmount=product.price-discountedPrice;
    console.log(`Product price after discount is $ ${discountedAmount.toFixed(2)}`);
    return discountedAmount;
    

}
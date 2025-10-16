import Product from "/Users/eswar/Desktop/2025-rtt-54/mod6/e-commerce-system/src/models/Product.ts";


export function calculateTax(product:Product){
    const discountedPrice:number=product.getPriceWithDiscount()
    const priceAfterDiscount=product.price-discountedPrice;

    let taxCalc:number=priceAfterDiscount;
    if(product.category==='groceries'){
        taxCalc=taxCalc+(taxCalc*3/100);
        console.log(`Price with Tax of 3% for groceries is $ ${taxCalc.toFixed(2)}`);
        return taxCalc;
    }else{
        taxCalc=taxCalc+(taxCalc*4.75/100);
        console.log(`Price with Tax of 4.75% is $ ${taxCalc.toFixed(2)}`);
        return taxCalc;
    }

}
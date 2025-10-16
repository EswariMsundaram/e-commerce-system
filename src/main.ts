import Product from  "./models/Product.ts";
import {calculateDiscount} from "./utils/discountCalculator.ts";
import {calculateTax} from "./utils/taxCalculator.ts";
import {fetchProducts} from "./services/apiService.ts";
import {handleAPIError, APIError} from "/Users/eswar/Desktop/2025-rtt-54/mod6/e-commerce-system/src/utils/errorHandler.ts";


async function main(){
    try{
        const productsData=await fetchProducts();
        const products: Product[]=productsData.map(p=>new Product(
            p.sku,
            p.title,
            p.category,
            Number(p.price),
            Number(p.weight),
            Number(p.discountPercentage),
            p.reviews 
        ));
        products.forEach(product=>{
            console.log(product.displayDetails());
            const discounted=calculateDiscount(product);
            const taxed=calculateTax(product);
            
        });
    }catch(e: APIError|any){
        handleAPIError(e);
        console.error(e);
    }
    
}
main()


import {handleAPIError, APIError} from "/Users/eswar/Desktop/2025-rtt-54/mod6/e-commerce-system/src/utils/errorHandler.ts";

const API_URL='https://dummyjson.com/products?limit=10&skip=10&select=sku,category,title,price,discountPercentage,weight,reviews';
export async function fetchProducts(){
    try{
        const response=await fetch(`${API_URL}`);
        if(!response.ok){
            throw new APIError('Error fetching data from API', response.status);
        }
        const data=await response.json()
        console.log(data);
        return data.products;
        
    }catch(e: APIError|any){
        handleAPIError(e)
        console.error(e);
    }
}
fetchProducts()
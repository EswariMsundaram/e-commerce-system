/*Product Base Class (Product.ts):
Define a Product class that includes the appropriate properties based on data provided in the API response.
Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.*/
type Review={
        comment:string;
    } 
export default class Product{
    sku:string;
    title:string;
    category:string;
    price:number;
    weight:number;
    discountPercentage:number;
    reviews: Review[];

    constructor(sku:string, title:string, category:string, price:number, 
        weight:number,discountPercentage:number,reviews:Review[]){
            this.sku=sku;
            this.title=title;
            this.category=category;
            this.price=price;
            this.weight=weight;
            this.discountPercentage=discountPercentage;
            this.reviews=reviews?.map(r=>({
                comment: r.comment
        }))||[];
        }

        
    
    displayDetails():string{
        const reviewStr=this.reviews.length
        ?this.reviews.map(r=>`${r.comment}`)
        :'No Reviews';
        
        console.log(`SKU: ${this.sku} 
                     Title:  ${this.title}
                     Category:  ${this.category}
                     Price:  ${this.price}
                     Weight: ${this.weight}
                     Discount Percentage: ${this.discountPercentage}
                     Reviews:  ${reviewStr}`)
        return `${this.sku} ${this.title} ${this.category} ${this.price} ${this.weight} ${this.discountPercentage} ${reviewStr} `
    }
    

    getPriceWithDiscount():number{
        const discountAmount:number=this.price*this.discountPercentage/100;
        return discountAmount;
    }
}
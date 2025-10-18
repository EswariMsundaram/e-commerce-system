**How you implemented TypeScript features and OOP principles.**
I implemented the features by creating multiple files and used for its own purpose. OOP principles are really helpful saving time and reduces code by not repeating the same set of codes.
Used Encapsulation,Inheritance, Polymorphism and Abstraction. The Product class acts as a base class for other classes. It encapsulates the data like Product id, name, price in common and 
certain functions like displayfeatures(). Inheritance used while using features of other classes. Used by importing particular functions or the class itself or any variables using the link.
Polymorphism is helpful when using single method in a different way in multiple classes. In this project getPriceWithDiscount() is calculated differently in each class. Physical product has 
high tax and in the digital product it has different, while using tax it has different price. Abstraction in this projects is calculateTax() and calculateDiscount().
It abstracts the calculations like the product with discount and tax, product without tax, product without discount with tax etc.
**The challenges you encountered and how you overcame them.**
Every new thing is a challenge. In this project, fetching the Review data from the API as it was keeping displaying as object in the console, the rest are not. As I was trying to fetch the array of 
object using the type string. Tried different options and used multiple online resources, previous labs and projects, Module lessons, got mentor and peer inputs. So chaged the reviews as type
so that it can fetch data of different types.
**How you handled asynchronous operations and error management.**
Used asyn function, await and error handler, the try catch block. Used custom error message for the API error to handle the error smoothly.


import { productsArray as products } from "./products.js";


if ('content' in document.createElement('template')) {
    console.log("Your browser supports the HTML template element.");

    const container = document.getElementById("productsContainer");
    const template = document.getElementsByTagName("template")[0];  

    products.forEach((item) => item.populate(container, template));    
}
else{
    alert('The HTML template element is not supported.');
}
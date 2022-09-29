
import { productsArray as products } from "./products.js";
import {clone, create} from './template.js';

let show = true;

function render(product){
    const container = document.getElementById("productsContainer");
    let productNode;
    if (false){//'content' in document.createElement('template')) {
        console.log("Your browser supports the HTML template element.");
        productNode = clone(product); 
    }
    else{
        if(show == true){
            alert('The HTML template element is not supported.');
           show = false; 
        }

        productNode = create(product);
    }

    container.appendChild(productNode);
}

products.forEach((item) => {
    item.populate();
    render(item);
});    

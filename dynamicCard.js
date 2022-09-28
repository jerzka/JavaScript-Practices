if ('content' in document.createElement('template')) {
    console.log("Your browser supports the HTML template element.");

    const container = document.getElementById("productsContainer");
    const template = document.getElementsByTagName("template")[0];  

    const productConstructor = (prodName, prodPhoto, prodDescription) => {
        return {
            cardTitle: prodName,
            cardImage: prodPhoto,
            cardDesc: prodDescription,
            cardPrice: (Math.random()*10).toFixed(2),
            get quantity() {
                return this._quantity;
            },
            set quantity(value){
                this._quantity = value;
            },
            sellOne: function(evt){
                console.log("one sold");
              
                if(this.quantity > 0){
                    this.quantity -= 1; 
                    evt.target.textContent = `Buy one of ${this.quantity}`;  
                    }
                else{
                    evt.target.classList.add('disabled');
                    alert("Sorry, product is not available.");
                }
            },
            populate: function() {
                this.quantity = Number((Math.random()*10).toFixed());
                const clone = template.content.cloneNode(true);
                cardImgClone = clone.querySelector("#cardImg");
                cardImgClone.src = this.cardImage;
                cardDiv = clone.querySelector("div");
                cardTitleClone = cardDiv.querySelector("#cardTitle");
                cardTitleClone.textContent = this.cardTitle;
                cardDescClone = clone.querySelector("#cardDesc");
                cardDescClone.textContent = this.cardDesc;
                cardPriceClone = clone.querySelector("#cardPrice");
                cardPriceClone.textContent = `${this.cardPrice} CAD`;
                cardOrderBtnClone = clone.querySelector("#cardOrderBtn");
                cardOrderBtnClone.textContent = `Buy one of ${this.quantity}`;
                this.sellOne = this.sellOne.bind(this);
                cardOrderBtnClone.addEventListener('click', this.sellOne);
                container.appendChild(clone);
            },
        }
    };

    const productsArray = [
        productConstructor("Café Americano", "https://www.starbucksathome.com/ca/sites/default/files/styles/rdp_banner_image/public/2021-03/3-CaffeAmericano_ContactShadow_Green.png?itok=Kl-bJG_e", "In the morning"),
        productConstructor("Café au Lait", "https://www.starbucksathome.com/ca/sites/default/files/styles/rdp_banner_image/public/2021-05/10032021_BAB_CAFE_AU_LAIT_CS-min.png?itok=JoWLDPcf", "In the afternoon"),
        productConstructor("Capuccino", "https://www.starbucksathome.com/ca/sites/default/files/styles/rdp_banner_image/public/2021-05/10032021_CAPPUCCINO_CS-min.png?itok=n_45xlrE", "In the evening")
    ];
    
    productsArray.forEach((item) => item.populate());    
}
else{
    alert('The HTML template element is not supported.');
}
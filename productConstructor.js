export const productConstructor = (prodName, prodPhoto, prodDescription) => {
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
        populate: function(container, template) {
            this.quantity = Number((Math.random()*10).toFixed());
            const clone = template.content.cloneNode(true);
            const cardImgClone = clone.querySelector("#cardImg");
            cardImgClone.src = this.cardImage;
            const cardDiv = clone.querySelector("div");
            const cardTitleClone = cardDiv.querySelector("#cardTitle");
            cardTitleClone.textContent = this.cardTitle;
            const cardDescClone = clone.querySelector("#cardDesc");
            cardDescClone.textContent = this.cardDesc;
            const cardPriceClone = clone.querySelector("#cardPrice");
            cardPriceClone.textContent = `${this.cardPrice} CAD`;
            const cardOrderBtnClone = clone.querySelector("#cardOrderBtn");
            cardOrderBtnClone.textContent = `Buy one of ${this.quantity}`;
            this.sellOne = this.sellOne.bind(this);
            cardOrderBtnClone.addEventListener('click', this.sellOne);
            container.appendChild(clone);
        },
    }
};

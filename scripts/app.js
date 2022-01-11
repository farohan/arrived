//Welcome to App.js! 
//This file is like a handyman. It does all the applicable work in the document.

/*______________________________________________________________________________________*/

import { allProducts } from "./products.js";
import { pockets } from "./pockets.js";

//For "Most Bought Item"

for (let z = 0; z < pockets.wholeProduct.length; z++) {
    let currentSpace = pockets.wholeProduct[z];
    let randomMerchandise = allProducts[Math.floor(Math.random() * allProducts.length)];

    currentSpace.children[0].src = randomMerchandise.imageURL;
    currentSpace.children[0].alt = randomMerchandise.imageAlt;
    currentSpace.children[1].children[0].innerHTML = randomMerchandise.name;

    let mostBoughtStats = currentSpace.children[1].children[1];
    console.log(mostBoughtStats);

    mostBoughtStats.children[0].innerHTML = `$ ${randomMerchandise.price}`;
    mostBoughtStats.children[1].innerHTML = randomMerchandise.starRating;
    mostBoughtStats.children[2].innerHTML = `Shipping Fee: $${randomMerchandise.shippingFee}`;
}

//For "Trending Items" and "Newly-Added Products"

for (let a = 0; a < pockets.thirdsProduct.length; a++) {
    let currentPocket = pockets.thirdsProduct[a];
    let randomItem = allProducts[Math.floor(Math.random() * allProducts.length)];

    currentPocket.children[0].innerHTML = randomItem.name;
    currentPocket.children[1].src = randomItem.imageURL;
    currentPocket.children[1].alt = randomItem.imageURL;
    currentPocket.children[2].innerHTML = `$ ${randomItem.price}`;
    currentPocket.children[3].innerHTML = randomItem.starRating;
    currentPocket.children[4].innerHTML = `Shipping Fee: $${randomItem.shippingFee}`;
}

//For "Other Products You May Like"

for (let i = 0; i < pockets.fourthsProduct.length; i++) { 
    let currentSlot = pockets.fourthsProduct[i];
    let randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];

    currentSlot.children[0].innerHTML = randomProduct.name;
    currentSlot.children[1].src = randomProduct.imageURL;
    currentSlot.children[1].alt = randomProduct.imageAlt;
    currentSlot.children[2].innerHTML = `$ ${randomProduct.price}`;
    currentSlot.children[3].innerHTML = randomProduct.starRating;
    currentSlot.children[4].innerHTML = `Shipping Fee: $${randomProduct.shippingFee}`;
}


//Welcome to App.js! 
//This file is like a handyman. It does all the applicable work in the document.

/*______________________________________________________________________________________*/

//These two functions open and close the sidebar
const sideMenu = document.getElementById('all-content-div');

function openSideBar() {
    sideMenu.style.width = "33vw";
}

function closeSideBar() {
    sideMenu.style.width = "0px";
}

//Applying data from products.js to index.html

// import allProducts from "./products";

// console.log(allProducts);
// console.log(allProducts.length);

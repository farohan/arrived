//Welcome to the ultimate log of products on Arrived, Inc. 
//All the products and their data will be kept here.

/*______________________________________________________________________________*/ 

//General Structure of Products (GSP)
class Product {
    constructor(name, imageURL, imageAlt, price, starRating, shippingFee) {
        this.name = name;
        this.imageURL = imageURL;
        this.imageAlt = imageAlt;
        this.price = price;
        this.starRating = starRating;
        this.shippingFee = shippingFee;
    }
}

//Home + Garden

let hardwoodTable = new Product(
    'Hardwood Table', 
    'https://www.smow.com/pics/mu-063-000/muuto-linear-wood-table-h74xl200xb90-01_zoom.jpg',
    'Wood table',
    '$39.99',
    '',
    '$6.75'
);

console.log(hardwoodTable);

let tableLamp = new Product(
    'Lovely Table Lamp 27.5" with Fabric Shade',
    'https://mobileimages.lowes.com/productimages/c5492ce9-f725-43da-a043-92e8f8796edd/10524199.jpg?size=pdhi',
    'A nice table lamp',
    '$34.99',
    '',
    'Free Shipping'
);

console.log(tableLamp);

// Tools and Equipment

// Clothing / Fashion / Jewelry

// Grocery

// Movies + Entertainment

// Parties + Celebrations

// Books

let harryPotterSeven = new Product(
    'Harry Potter Paperback Boxed Set - Books 1 to 7',
    'https://prodimage.images-bn.com/pimages/9780545162074_p3_v1_s550x406.jpg',
    'Harry Potter books - complete set',
    '$84.99',
    '',
    'Free Shipping'
);

console.log(harryPotterSeven);

// Electronics

let msSurfaceComputer = new Product(
    'Microsoft Surface Laptop Computer 13.5" Touch-Screen',
    'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg',
    'Microsoft Surface laptop computer',
    '$1,149.99',
    '',
    'Free Shipping'
);

console.log(msSurfaceComputer);
// Sports + Fitness Equipment

let nikeAirMaxMens = new Product(
    "Nike Air Max 270 Men's Shoes",
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
    'Nike Air Max 270 Shoes for Men',
    '$149.99',
    '',
    '$1.50'
);

console.log(nikeAirMaxMens);

// Toys / Baby / Kids

let beachBall = new Product(
    'Beach Ball for Kids (Multicolored)',
    'https://target.scene7.com/is/image/Target/GUEST_c6d1bfca-3003-4245-b46e-f7f94cf6908c?wid=488&hei=488&fmt=pjpeg',
    'A beach ball',
    '$4.99',
    '',
    'Free Shipping'
);

console.log(beachBall);

let caterpillarDumpTruck = new Product(
    'Caterpillar Dump Truck Toy Construction Vehicle',
    'https://m.media-amazon.com/images/I/81L9jVxosKL._AC_SL1500_.jpg',
    'Caterpillar Dump Truck',
    '$9.99',
    '',
    'Free Shipping'
);

console.log(caterpillarDumpTruck);

// School + Academics

// Pet Supplies

// Industrial



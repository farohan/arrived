//Welcome to the ultimate database of products on Arrived, Inc. 
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

const hardwoodTable = new Product(
    'Hardwood Table', 
    'https://www.smow.com/pics/mu-063-000/muuto-linear-wood-table-h74xl200xb90-01_zoom.jpg',
    'Wood table',
    39.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    6.75
);

const tableLamp = new Product(
    'Lovely Table Lamp 27.5" with Fabric Shade',
    'https://mobileimages.lowes.com/productimages/c5492ce9-f725-43da-a043-92e8f8796edd/10524199.jpg?size=pdhi',
    'A nice table lamp',
    34.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const threeSeatSofa = new Product(
    'Three Seater Sofa with Wood Legs',
    'https://mobileimages.lowes.com/productimages/8d4d4e14-4809-4d54-bc32-d31abdb6696f/17761046.jpg?size=pdhi',
    'beige, three-seater sofa on white background',
    479.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    9.25
);

// Clothing / Fashion / Jewelry

const menWinterJacket = new Product(
    "Men's Waterproof Winter Jacket",
    'https://ae01.alicdn.com/kf/H40ca4e3b5f3d412a80485cade1dce632u/2020-New-Waterproof-Winter-Jacket-Men-Hoodied-Parka-Men-Warm-Winter-Coat-Men-Thicken-Zipper-Camouflage.jpg_Q90.jpg_.webp',
    'blue winter jacket',
    19.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    1.25
);

const strawHat = new Product(
    'Straw Hat for All',
    'https://mobileimages.lowes.com/productimages/49047d7c-2993-4ad9-8def-54364e61b80e/08532487.jpg?size=pdhi',
    'yellow straw hat',
    10.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const poloShirt = new Product(
    'Short Sleeve Polo Shirt for Summer',
    'https://m.media-amazon.com/images/I/51VRoS04WjL._AC_UX342_.jpg',
    'polo shirt for men',
    14.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

// Grocery

const orangePeachMangoJuice = new Product(
    "Trader Joe's Orange, Peach, and Mango Juice",
    'https://i.pinimg.com/originals/b6/c0/02/b6c0025b4806684930c09f1490d7e93e.jpg',
    "Trader Joe's Orange Peach and Mango Juice (container shown)",
    2.79,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0.21
);

const boxOfApples = new Product(
    'Bushel of Fresh, Red Apples',
    'https://st2.depositphotos.com/4917295/12363/i/950/depositphotos_123634562-stock-photo-wooden-box-full-of-fresh.jpg',
    'wooden box of apples',
    9.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const milkGallon = new Product(
    '1 Gallon of Organic Whole Milk',
    'https://bjs.scene7.com/is/image/bjs/147476?$bjs-Zoom$',
    'gallon of milk',
    3.19,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

// Books

const harryPotterSeven = new Product(
    'Harry Potter Paperback Boxed Set - Books 1 to 7',
    'https://prodimage.images-bn.com/pimages/9780545162074_p3_v1_s550x406.jpg',
    'Harry Potter books - complete set',
    84.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const lordOfTheRings = new Product(
    'Lord of the Rings Books - All 3',
    'https://images-na.ssl-images-amazon.com/images/I/510DQ2D1RJL._SX346_BO1,204,203,200_.jpg',
    'Lord of the Rings books - all 3 of them in a black box',
    19.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0.99
);

const mobyDick = new Product(
    'Moby Dick by Herman Melville',
    'https://my-live-05.slatic.net/p/52272a1621566b7c84bab552f8ecb84d.jpg_720x720q80.jpg_.webp',
    'Moby Dick; or the Whale by Herman Melville',
    9.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

// Electronics

const msSurfaceComputer = new Product(
    'Microsoft Surface Laptop Computer 13.5" Touch-Screen',
    'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg',
    'Microsoft Surface laptop computer',
    1,149.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const appleIpadMini = new Product(
    'Apple iPad Mini Wi-Fi 64GB - Gray',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-spacegray-201911_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1573825365923',
    'Apple iPad Mini',
    399.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    5.00
);

const appleDesktop = new Product(
    'Apple iMac 512GB with Retina Display (5.0 GHz)',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-27-selection-hero-202008?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1594932848000',
    'apple imac computer',
    2,299.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    25.00
);

// Sports + Fitness Equipment

const nikeAirMaxMens = new Product(
    "Nike Air Max 270 Men's Shoes",
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
    'Nike Air Max 270 Shoes for Men',
    149.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    1.50
);

const fitbitVersaTwo = new Product(
    'Fitbit Versa 2 Smartwatch',
    'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/versa2/hero-static/black-carbon-aluminum/versa2-3qtr-black.png',
    'Fitbit Versa 2 Smartwatch',
    199.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

// Toys / Baby / Kids

const beachBall = new Product(
    'Beach Ball for Kids (Multicolored)',
    'https://target.scene7.com/is/image/Target/GUEST_c6d1bfca-3003-4245-b46e-f7f94cf6908c?wid=488&hei=488&fmt=pjpeg',
    'A beach ball',
    4.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const caterpillarDumpTruck = new Product(
    'Caterpillar Dump Truck Toy Construction Vehicle',
    'https://m.media-amazon.com/images/I/81L9jVxosKL._AC_SL1500_.jpg',
    'Caterpillar Dump Truck',
    9.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const teddyBear = new Product(
    'Soft & Cuddly Teddy Bear 21.5"',
    'https://target.scene7.com/is/image/Target/GUEST_a6fdb107-33d6-4ce2-8f67-28698cc3285a?wid=488&hei=488&fmt=pjpeg',
    'Soft and Cuddly Teddy Bear',
    22.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0.50
);

const monsterTruck = new Product(
    'Green Monster Truck with Remote Control',
    'https://target.scene7.com/is/image/Target/GUEST_35367bf2-741c-4685-92aa-04df7b3fd472?wid=488&hei=488&fmt=pjpeg',
    'Green monster truck with remote controller by it.',
    29.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

// School + Academics

const ticonderogaPencils = new Product(
    'Ticonderoga Pencil #2 Lead 12-Pack',
    'https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_666,q_auto,w_500/c_pad,h_666,w_500/v1/products/314417/314417_o01_ticonderoga_wood_cased_pencils_12_count_093019?pgw=1',
    'Dixon Ticonderoga Pencils 12-Pack',
    5.00,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const magnifyingGlass = new Product(
    'Magnifying Glass - 2x Magnification',
    'https://cdn.shopify.com/s/files/1/2581/7358/products/RG190004_1_413x@3x.progressive.jpg',
    'magnifying glass 2x magnification',
    11.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

// Industrial

const batterySet = new Product(
    'Duracell Ultra AAA Batteries (8 Total)',
    'https://m.media-amazon.com/images/I/51yOzDWHhzL.jpg',
    'duracell batteries 8',
    7.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);

const toolBox = new Product(
    '16 Inch Toolbox - Black and Yellow',
    'https://www.stanleytools.com/NA/product/images/3000x3000x96/STST16410/STST16410_1.jpg',
    'yellow and black stanley toolbox',
    49.99,
    '<i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i> <i class="fa fa-star oranged"></i>',
    0
);


//All products in one array - easy for selection and randomization

const allProducts = [hardwoodTable, tableLamp, threeSeatSofa, menWinterJacket, strawHat, poloShirt, orangePeachMangoJuice,
    boxOfApples, milkGallon, harryPotterSeven, lordOfTheRings, mobyDick, msSurfaceComputer, appleIpadMini, appleDesktop,
    nikeAirMaxMens, fitbitVersaTwo, beachBall, caterpillarDumpTruck, teddyBear, monsterTruck, ticonderogaPencils,
    magnifyingGlass, batterySet, toolBox];

export {allProducts};

const products = [
    {
        name : "White Shirt",
        imageSrc : "https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/4600/views/alt/front_large_extended.png?ixlib=rails-2.1.4&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "Black Shirt",
        imageSrc : "http://cdn.shopify.com/s/files/1/1320/3823/products/black_6cb902dd-9514-40a8-baad-57bbe96aed2d_600x.jpg?v=1475015924",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "Green Shirt",
        imageSrc : "http://bobo-bear.com/wp-content/uploads/2017/01/APPAREL-T-SHIRTS-TRI-BLEND-T-SHIRT.png",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "White Shirt",
        imageSrc : "https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/4600/views/alt/front_large_extended.png?ixlib=rails-2.1.4&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "Black Shirt",
        imageSrc : "http://cdn.shopify.com/s/files/1/1320/3823/products/black_6cb902dd-9514-40a8-baad-57bbe96aed2d_600x.jpg?v=1475015924",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "Green Shirt",
        imageSrc : "http://bobo-bear.com/wp-content/uploads/2017/01/APPAREL-T-SHIRTS-TRI-BLEND-T-SHIRT.png",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "White Shirt",
        imageSrc : "https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/4600/views/alt/front_large_extended.png?ixlib=rails-2.1.4&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    },
    {
        name : "Black Shirt",
        imageSrc : "http://cdn.shopify.com/s/files/1/1320/3823/products/black_6cb902dd-9514-40a8-baad-57bbe96aed2d_600x.jpg?v=1475015924",
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?'
    }
];

function createProductList() {
let container = document.querySelector('.product-container');
products.forEach(el => {
    el.id = products.indexOf(el) + 1;
});

function changeBackground() {
    let productList = [...document.querySelectorAll(".card")];

    let evenProducts = productList.filter(e => productList.indexOf(e) % 2 === 0);
    let oddProducts = productList.filter(e => productList.indexOf(e) % 2 != 0);

    evenProducts.forEach(function(e) {
        if (evenProducts.indexOf(e) % 2 === 0) {
            e.style.backgroundColor = "#ff8000";
        } else {
            e.style.backgroundColor = "#fff";
        }
    })

    oddProducts.forEach(function(e) {
        if (oddProducts.indexOf(e) % 2 === 0) {
            e.style.backgroundColor = "#fff";
        } else {
            e.style.backgroundColor = "#ff8000";
        }
    })
};

const productPieces = products.length - 1;

for(let i = 0; i <= productPieces; i++) {
    container.innerHTML += `<div class=\"card\"><img src=${products[i].imageSrc} alt=\"Product image\" class=\"product-image\"><h2 class=\"product-name\">Product Number ${products[i].id}</h2><p class=\"description\">${products[i].desc}</p></div>`;
};
changeBackground();
};

createProductList();

let images = document.querySelectorAll('.product-image');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let productName = document.querySelector('.product-realname');
let productPicture = document.querySelector('.product-picture');

images.forEach(el => el.addEventListener('click', function(e) {
    
    products.forEach((element) => {
        if (element.id === parseInt(e.target.nextSibling.textContent.charAt(e.target.nextSibling.textContent.length - 1))) {productName.textContent = element.name;}});

    modal.style = 'display: block;' ;
    body.style.overflow = 'hidden';
    productPicture.src = e.target.src;

}));

document.querySelector('.close-button').addEventListener('click', e => {modal.style = 'display: none;';
                                                                        body.style.overflowY = 'auto';});

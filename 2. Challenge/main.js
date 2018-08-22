const products = [
    {
        id : 1,
        imageSrc : "https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/4600/views/alt/front_large_extended.png?ixlib=rails-2.1.4&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress"
    },
    {
        id : 2,
        imageSrc : "http://cdn.shopify.com/s/files/1/1320/3823/products/black_6cb902dd-9514-40a8-baad-57bbe96aed2d_600x.jpg?v=1475015924"
    },
    {
        id : 3,
        imageSrc : "http://bobo-bear.com/wp-content/uploads/2017/01/APPAREL-T-SHIRTS-TRI-BLEND-T-SHIRT.png"
    },
    {
        id : 4,
        imageSrc : "https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/4600/views/alt/front_large_extended.png?ixlib=rails-2.1.4&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress"
    },
    {
        id : 5,
        imageSrc : "http://cdn.shopify.com/s/files/1/1320/3823/products/black_6cb902dd-9514-40a8-baad-57bbe96aed2d_600x.jpg?v=1475015924"
    },
    {
        id : 6,
        imageSrc : "http://bobo-bear.com/wp-content/uploads/2017/01/APPAREL-T-SHIRTS-TRI-BLEND-T-SHIRT.png"
    },
    {
        id : 7,
        imageSrc : "https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/4600/views/alt/front_large_extended.png?ixlib=rails-2.1.4&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress"
    },
    {
        id : 8,
        imageSrc : "http://cdn.shopify.com/s/files/1/1320/3823/products/black_6cb902dd-9514-40a8-baad-57bbe96aed2d_600x.jpg?v=1475015924"
    }
];

function createProductList() {
let container = document.querySelector('.product-container');

const productPieces = products.length - 1;

for(let i = 0; i <= productPieces; i++) {
    container.innerHTML += `<div class=\"card\"><img src=${products[i].imageSrc} alt=\"Product image\" class=\"product-image\"><h2 class=\"product-name\">Product Number ${products[i].id}</h2><p class=\"description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis, perferendis ipsam reprehenderit porro consectetur minima voluptas nostrum impedit nam?</p></div>`;
};
changeBackground();
};


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

createProductList();

let images = document.querySelectorAll('.product-image');

images.forEach(el => el.addEventListener('click', function(e) {
    document.querySelector('.modal').style = 'visibility: visible;' ;

    document.querySelector('.product-picture').src = e.target.src;

    //console.log(document.querySelector('.product-picture').src);

    
    //console.log(e.target.src);

   // document.querySelector('.product-image').style.src = e.target.style.src;
}));

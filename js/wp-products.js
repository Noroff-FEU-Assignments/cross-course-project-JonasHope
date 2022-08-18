const url = "http://localhost/rD-products/wp-json/wc/store/products";
const productContainer = document.querySelector(".jackets");
const details = document.querySelector(".product-details")
const cart = document.querySelector(".cart")
const cartList = document.querySelector(".cart-list")

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(jackets){
    jackets.forEach(function(product){
        productContainer.innerHTML +=
        `<a href="product-spes.html?id=${product.id}" class=arrange-jackets>
            <img src="${product.images[0].src}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">${product.price_html}</p>
        </a>`
    })
}
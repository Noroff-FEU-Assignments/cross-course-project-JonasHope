const url = "https://rd-products.site/wp-json/wc/store/products";
const productContainer = document.querySelector(".jackets");


async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error, "error");
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
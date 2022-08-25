const detailContainer = document.querySelector(".detail-container");
const cart = document.querySelector(".cart")
const cartList = document.querySelector(".cart-list")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rd-products.site/wp-json/wc/store/products/" + id;

async function getJackets() {

    try{
        const respons = await fetch(url);
        const details = await respons.json();
        
        createHTML(details)
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

getJackets();

function createHTML(details) {
    detailContainer.innerHTML = `<div class=jck-detail>
                                     <h1>${details.name}</h1>
                                     <h3>${details.price_html}</h3>
                                     <img src="${details.images[0].src}" alt="${details.name}">
                                     <p>${details.description}</p>
                                     <button id="btn" class="cart-button" data-details="${details.id}">Add to cart</button>
                                 </div>`;



let cartArray = [];

const addToCartButtons = document.querySelectorAll("button");
addToCartButtons.forEach(function(addToCartButton){
  addToCartButton.onclick = function(event){
    const itemToAdd = details
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  }
})

const totalContainer = document.querySelector(".total")

function showCart(cartItems){
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function(cartElement){
    total += parseFloat(cartElement.prices.price / 100);
    cartList.innerHTML +=
    `
    <div class="cart-item">
         <img src="${cartElement.images[0].src}" class="cart-img" alt="${cartElement.name}">
         <h4>${cartElement.name}</h4>
         <p class="price">${cartElement.price_html}</p>
         <hr>
    </div>
    `
  })
  totalContainer.innerHTML = `Total: $ ${total}`
}


const closeCart = document.querySelectorAll(".close-cart")

for (const close of closeCart) {
    close.onclick = function(){
    cart.style.display = 'none'
    }
}
};
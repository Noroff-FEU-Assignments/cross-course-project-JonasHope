//import { products } from "./product-array/products.js";

// Product list and modal

const productsContainer = document.querySelector(".jackets")
const details = document.querySelector(".product-details")
const cart = document.querySelector(".cart")
const cartList = document.querySelector(".cart-list")


//products.forEach(product => {
 //   productsContainer.innerHTML +=
 //   `
  //  <div id="arrange-jackets-${product.id}" class="arrange-jackets">
  //     <img src="${product.image}" alt="${product.name}">
 //      <h4>${product.name}</h4>
 //      <p class="price">£${product.price}</p>
 //   </div>
 //   `
//});

products.forEach(detailed => {
    details.innerHTML +=
    `
    <div id="${detailed.id}" class="modal">
       <div class="modal-content">
          <span class="close">&times;</span>
          <h4>${detailed.name}</h4>
          <hr>
          <p>${detailed.description}</p>
          <img src="${detailed.image}" class="jck-img" alt="${detailed.name}">
          <p class="price">£${detailed.price}</p>
          <button id="btn" class="cart-button" data-detailed="${detailed.id}">Add to cart</button>
       </div>
    </div>
    `;
});

let openModal;

products.forEach(detailed => {

    const modal = document.getElementById(detailed.id);
    modal.style.display="none";
    
    document.getElementById(`arrange-jackets-${detailed.id}`).addEventListener("click", displayModal);
   
    function displayModal() {
      modal.style.display = "block";
      openModal = modal
    }
});

window.onclick = function(event) {
  if (event.target == openModal) {
  openModal.style.display = "none";
  }
}
    
const buttons = document.querySelectorAll(".close")

for (const button of buttons) {
    button.onclick = function(){
    openModal.style.display = 'none'
    }
}

let cartArray = [];

const addToCartButtons = document.querySelectorAll("button");
addToCartButtons.forEach(function(addToCartButton){
  addToCartButton.onclick = function(event){
    const itemToAdd = products.find(item => item.id === event.target.dataset.detailed)
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
    total += parseFloat(cartElement.price);
    cartList.innerHTML +=
    `
    <div class="cart-item">
         <img src="${cartElement.image}" class="cart-img" alt="${cartElement.name}">
         <h4>${cartElement.name}</h4>
         <p class="price">£${cartElement.price}</p>
         <hr>
    </div>
    `
  })
  totalContainer.innerHTML = `Total: £ ${total}`
}

const closeCart = document.querySelectorAll(".close-cart")

for (const close of closeCart) {
    close.onclick = function(){
    cart.style.display = 'none'
    }
}
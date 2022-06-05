const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".sho-cart");
const totalContainer = document.querySelector(".sho-total");

let total = 0;
cartItems.forEach(function(cartElement){
    total += parseFloat(cartElement.price);
    cartContainer.innerHTML +=
        `
    <div class="cart-item cart-page">
         <img src="${cartElement.image}" class="cart-img" alt="${cartElement.name}">
         <h4>${cartElement.name}</h4>
         <p class="price">£${cartElement.price}</p>
    </div>
    `
})
totalContainer.innerHTML = `Total: £ ${total}`
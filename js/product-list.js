import { products } from "./product-array/products.js";

const productsContainer = document.querySelector(".jackets")
const details = document.querySelector(".product-details")

products.forEach(product => {
    productsContainer.innerHTML +=
    `
    <div class="arrange-jackets">
       <img src="${product.image}" alt="${product.name}">
       <h4>${product.name}</h4>
       <p class="price">£${product.price}</p>
       
    </div>
    `
});

products.forEach(detailed => {
    details.innerHTML +=
    `
    <div id="myModal" class="modal">
       <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${detailed.image}" alt="${detailed.name}">
          <h4>${detailed.name}</h4>
          <p class="price">£${detailed.price}</p>
       </div>
    </div>
    `
});


const modal = document.querySelector("#myModal");
const span = document.querySelector(".close");

productsContainer.addEventListener("click", myFunction);

function myFunction() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
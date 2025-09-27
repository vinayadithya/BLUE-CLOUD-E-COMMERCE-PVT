const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPriceEl = document.getElementById("totalPrice");

let cart = [];

// Add to cart
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.parentElement;
    const id = product.getAttribute("data-id");
    const name = product.querySelector("h3").innerText;
    const price = parseInt(product.querySelector("p").innerText.replace("₹", ""));
    
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }
    updateCart();
  });
});

// Update cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (x${item.qty}) - ₹${item.price * item.qty}
      <button onclick="removeFromCart('${item.id}')">❌</button>
    `;
    cartItems.appendChild(li);
  });

  cartCount.innerText = cart.length;
  totalPriceEl.innerText = total;
}

// Remove item
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Open/Close cart
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

const submitComment = document.getElementById("submitComment");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    submitComment.addEventListener("click", () => {
      const commentText = commentInput.value.trim();
      if (commentText !== "") {
        const li = document.createElement("li");
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = "";
      }
    });

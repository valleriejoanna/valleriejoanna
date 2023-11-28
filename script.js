document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total');
  const existingCartData = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  updateCartBadge(existingCartData.length);

  function saveToLocalStorage(images,name,price,quantity) {
    // Get existing cart data from local storage or create an empty array

    // Add the current item to the cart data
    const newItem = {
      images,
      name,
      price,
      quantity
    };

    existingCartData.push(newItem);

    // Save the updated cart data back to local storage
    localStorage.setItem('cart', JSON.stringify(existingCartData));

    // Update the cart badge
    updateCartBadge(existingCartData.length);
  }

  function updateCartBadge(count) {
    const badge = document.querySelector('.badge');
    // console.log(count);
    badge.textContent = count == (null || undefined || []) ? 0 : count;
  }

  Array.from(document.querySelectorAll(".category")).map(item => {
    const countSpan = item.querySelector('.count');
    const minusBtn = item.querySelector('.minus');
    const plusBtn = item.querySelector('.plus');
    const addToCartBtn = item.querySelector('.addToCart');

    let quantity = 0;

    minusBtn.addEventListener("click", function () {
      if (quantity > 0) {
        quantity--;
        countSpan.textContent = quantity;
      }
    });

    plusBtn.addEventListener("click", function () {
      quantity++;
      countSpan.textContent = quantity;
    });

    addToCartBtn.addEventListener("click", function () {
      const parentDiv = this.parentNode; // Common parent of the button, image, and name
      const productImage = parentDiv.querySelector('img').src;
      const productName = parentDiv.querySelector('p').textContent;
      const productPrice = 28; // You can get the actual price from your data or UI
      if (quantity > 0) {
        saveToLocalStorage(productImage, productName, productPrice, quantity);
      }
      alert("Success add your items to cart")
    });
  });
});

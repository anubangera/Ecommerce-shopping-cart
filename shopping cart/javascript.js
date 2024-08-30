// // move to products
// document.getElementById("scrolltoproducts").addEventListener("click", function () {
//     document.querySelector(".categories1").scrollIntoView({ behavior: 'smooth' });
// });

// //move to products for explore button
// document.getElementById("scrolltoexplore").addEventListener("click", function () {
//     document.querySelector(".categories1").scrollIntoView({ behavior: 'smooth' });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var openButtons = document.querySelectorAll('.open-modal');
//     var closeButtons = document.querySelectorAll('.close');
//     var modals = document.querySelectorAll('.modal');

//     function openModal(modalId) {
//         var modal = document.getElementById(modalId);
//         if (modal) {
//             modal.style.display = 'block';
//             modal.setAttribute('aria-hidden', 'false');
//         }
//     }

//     function closeModal(modalId) {
//         var modal = document.getElementById(modalId);
//         if (modal) {
//             modal.style.display = 'none';
//             modal.setAttribute('aria-hidden', 'true');
//         }
//     }

//     openButtons.forEach(function (button) {
//         button.addEventListener('click', function (event) {
//             event.preventDefault();
//             var modalId = button.getAttribute('data-modal');
//             var productName = button.getAttribute('data-product-name');
//             var productPrice = button.getAttribute('data-product-price');
//             var productImageUrl = button.getAttribute('data-product-image');

//             var modal = document.getElementById(modalId);
//             var form = modal.querySelector('#product-form');
//             form.dataset.productName = productName;
//             form.dataset.productPrice = productPrice;
//             form.dataset.productImage = productImageUrl;

//             openModal(modalId);
//         });
//     });

//     closeButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             var modalId = button.getAttribute('data-modal');
//             closeModal(modalId);
//         });
//     });

//     window.addEventListener('click', function (event) {
//         modals.forEach(function (modal) {
//             if (event.target === modal) {
//                 closeModal(modal.id);
//             }
//         });
//     });

//     document.addEventListener('submit', function (event) {
//         if (event.target.matches('#product-form')) {
//             event.preventDefault();

//             const form = event.target;
//             const size = form.querySelector('[name="size"]').value;
//             const quantity = form.querySelector('[name="quantity1"]').value;

//             const productName = form.dataset.productName;
//             const productPrice = parseFloat(form.dataset.productPrice);
//             const productImageUrl = form.dataset.productImage;

//             if (!size) {
//                 alert('Please select a size.');
//                 return false;
//             }

//             if (!quantity) {
//                 alert('Please select a quantity.');
//                 return false;
//             }

//             addToCart(productName, productPrice, productImageUrl, parseInt(quantity));
//             closeModal(form.closest('.modal').id);
//         }
//     });
// });


// function addToCart(name, price, imageUrl, quantity) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let item = cart.find(item => item.name === name);

//     if (item) {
//         item.quantity += quantity; // Increment quantity if item already in cart
//     } else {
//         cart.push({ name: name, price: price, imageUrl: imageUrl, quantity: quantity });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${name} has been added to your cart.`);
// }

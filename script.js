function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
}

function viewCart() {
    let cart = sessionStorage.getItem("cart");

    if (!cart) {
        alert("Your cart is empty.");
        return;
    }

    cart = JSON.parse(cart);

    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Cart Items:\n" + cart.join("\n"));
    }
}

function clearCart() {
    sessionStorage.removeItem("cart");
    alert("Cart cleared.");
}

function processOrder() {
    sessionStorage.removeItem("cart");
    alert("Thank you for your order!");
}

function subscribeUser() {
    alert("Thank you for subscribing.");
}

function saveForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem("customer", JSON.stringify(formData));

    alert("Thank you for your message!");
}
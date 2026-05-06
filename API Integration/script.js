let allProducts = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fetch API
fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(data => {
        document.getElementById("status").innerText = "";
        allProducts = data;
        displayProducts(data);
        loadCategories(data);
    })
    .catch(() => {
        document.getElementById("status").innerText = "Failed to load data";
    });

// Display function
function displayProducts(data) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" />
            <h3>${product.title.substring(0, 50)}</h3>
            <p>₹ ${product.price}</p>
            <p>${product.description.substring(0, 60)}...</p>
            <button onclick="viewMore('${product.title}','${product.description}')">View More</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

// View More
function viewMore(title, desc) {
    alert(title + "\n\n" + desc);
}

// Search
document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    let filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});

// Category Filter
function loadCategories(data) {
    let categories = ["all", ...new Set(data.map(p => p.category))];
    let select = document.getElementById("categoryFilter");

    categories.forEach(cat => {
        let option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

document.getElementById("categoryFilter").addEventListener("change", function () {
    let value = this.value;

    if (value === "all") {
        displayProducts(allProducts);
    } else {
        let filtered = allProducts.filter(p => p.category === value);
        displayProducts(filtered);
    }
});

// Sort
document.getElementById("sortPrice").addEventListener("change", function () {
    let sorted = [...allProducts];

    if (this.value === "low") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (this.value === "high") {
        sorted.sort((a, b) => b.price - a.price);
    }

    displayProducts(sorted);
});

// Add to Cart
function addToCart(id) {
    let product = allProducts.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}
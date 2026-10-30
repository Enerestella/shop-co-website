const products = {
    newArrivals: [
    {
        name: "T-shirt with Tape Details",
        price: 120,
        rating: "4.5/5",
        image: "images/Frame 38.png "
    },
    {
        name: "Skinny Fit Jeans",
        price: 240,
        oldPrice: 260,
        rating: "4.5/5",
        image: "images/Frame 33.png",
        discount: "-20%"
    },
    {
        name: "Checkered Shirt",
        price: 180,
        rating: "4.5/5",
        image: "images/Frame 34.png"
    },
    {
        name: "Sleeve Striped T-shirt",
        price: 130,
        oldPrice: 160,
        rating: "4.5/5",
        image: "images/Frame 38.png",
        discount: "-30%"
    },
    {
        name: "Classic Cotton Tee",
        price: 95,
        rating: "4.4/5",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Everyday Denim",
        price: 210,
        rating: "4.6/5",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
    }
],

topProducts: [
    {
        name: "Vertical Striped Shirt",
        price: 212,
        oldPrice: 232,
        rating: "5.0/5",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
        discount: "-20%"
    },
    {
        name: "Courage Graphic T-shirt",
        price: 145,
        rating: "4.0/5",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        rating: "4.5/5",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Faded Skinny Jeans",
        price: 210,
        rating: "4.5/5",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Relaxed Fit Shirt",
        price: 175,
        rating: "4.7/5",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80"
    }
],

relatedProducts: [
    {
        name: "Polo with Contrast Trims",
        price: 212,
        oldPrice: 242,
        rating: "4.5/5",
        image: "https://images.unsplash.com/photo-1625910513413-5fc45e9b7a7a?auto=format&fit=crop&w=600&q=80",
        discount: "-20%"
    },
    {
        name: "Gradient Graphic T-shirt",
        price: 145,
        rating: "4.5/5",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Polo with Tipping Details",
        price: 180,
        rating: "4.5/5",
        image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Black Striped T-shirt",
        price: 120,
        oldPrice: 150,
        rating: "5.0/5",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
        discount: "-30%"
    }
]
};

let reviews = [
    {
    name: "Sarah M.",
    stars: 5,
    text: "I absolutely love this T-shirt! The design is unique and the fabric feels so comfortable.",
    date: "August 14, 2023"
  },
  {
    name: "Alex M.",
    stars: 4,
    text: "The shirt exceeded my expectations! The colours are vibrant and the print quality is top-notch.",
    date: "August 15, 2023"
  },
  {
    name: "Ethan R.",
    stars: 4,
    text: "This shirt is a must-have for anyone who appreciates good design. The fit is perfect.",
    date: "August 16, 2023"
  },
  {
    name: "Olivia P.",
    stars: 4,
    text: "I value simplicity and functionality. This T-shirt looks great and feels comfortable.",
    date: "August 12, 2023"
  },
  {
    name: "Liam K.",
    stars: 5,
    text: "The fabric is soft, and the design is creative. I highly recommend this shirt.",
    date: "August 18, 2023"
  },
  {
    name: "Ava H.",
    stars: 4,
    text: "A beautiful design and a comfortable fit. This shirt is a great addition to my wardrobe.",
    date: "August 19, 2023"
  }
];


// SHORTCUTS
const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];


// NOTIFICATION MESSAGE
function showToast(message) {
  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


// CREATE A PRODUCT CARD
function productCard(product) {
  return `
    <article class="product-card">
      <a href="product.html" aria-label="View ${product.name}">
        <img
          class="product-photo"
          loading="lazy"
          src="${product.image}"
          alt="${product.name}"
        >
      </a>

      <p class="product-name">${product.name}</p>

      <div class="rating">
        <span>★★★★★</span>
        <small>${product.rating}</small>
      </div>

      <div class="price-line">
        <strong>$${product.price}</strong>

        ${
          product.oldPrice
            ? `<del>$${product.oldPrice}</del>`
            : ""
        }

        ${
          product.discount
            ? `<span class="discount">${product.discount}</span>`
            : ""
        }
      </div>
    </article>
  `;
}


// DISPLAY PRODUCTS
function renderProducts(id, list, limit = 4) {
  const container = $("#" + id);

  if (!container) return;

  container.innerHTML = list
    .slice(0, limit)
    .map(productCard)
    .join("");
}


// CREATE A REVIEW CARD
function reviewCard(review) {
  return `
    <article class="review-card">
      <div class="review-stars">
        ${"★".repeat(review.stars)}
        ${"☆".repeat(5 - review.stars)}
      </div>

      <p class="review-name">
        ${review.name}
        <span class="verified">✓</span>
      </p>

      <p class="review-text">"${review.text}"</p>

      <p class="review-date">
        Posted on ${review.date}
      </p>
    </article>
  `;
}


// HOMEPAGE
function initHome() {
  renderProducts("newArrivals", products.newArrivals);
  renderProducts("topProducts", products.topProducts);

  const reviewContainer = $("#reviews");
  let reviewOffset = 0;

  function displayHomeReviews() {
    if (!reviewContainer) return;

    const visibleReviews = [
      ...reviews.slice(reviewOffset),
      ...reviews.slice(0, reviewOffset)
    ].slice(0, 3);

    reviewContainer.innerHTML =
      visibleReviews.map(reviewCard).join("");
  }

  displayHomeReviews();

  $("#nextReview")?.addEventListener("click", () => {
    reviewOffset = (reviewOffset + 3) % reviews.length;
    displayHomeReviews();
  });

  $("#previousReview")?.addEventListener("click", () => {
    reviewOffset =
      (reviewOffset - 3 + reviews.length) % reviews.length;

    displayHomeReviews();
  });

  // VIEW ALL / SHOW LESS
  $$("[data-expand]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.expand;
      const expanded = button.dataset.expanded === "true";

      renderProducts(
        id,
        products[id],
        expanded ? 4 : products[id].length
      );

      button.dataset.expanded = String(!expanded);
      button.textContent = expanded ? "View All" : "Show Less";
    });
  });
}


// PRODUCT PAGE
function initProduct() {
  renderProducts("relatedProducts", products.relatedProducts);

  // PRODUCT IMAGE GALLERY
  const galleryImages = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85"
  ];

  $$(".thumb").forEach(button => {
    button.addEventListener("click", () => {
      $$(".thumb").forEach(thumb =>
        thumb.classList.remove("active")
      );

      button.classList.add("active");

      $("#mainProductImage").src =
        galleryImages[Number(button.dataset.image)];
    });
  });


  // COLOUR SELECTION
  $$(".swatch").forEach(button => {
    button.addEventListener("click", () => {
      $$(".swatch").forEach(swatch =>
        swatch.classList.remove("selected")
      );

      button.classList.add("selected");

      $("#colorNote").textContent =
        button.dataset.color + " selected";
    });
  });


  // SIZE SELECTION
  $$(".sizes button").forEach(button => {
    button.addEventListener("click", () => {
      $$(".sizes button").forEach(size =>
        size.classList.remove("selected")
      );

      button.classList.add("selected");

      $("#sizeNote").textContent =
        button.textContent + " selected";
    });
  });


  // QUANTITY
  let quantity = 1;
  const quantityDisplay = $("#quantity");

  $("#minusQty")?.addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    quantityDisplay.textContent = quantity;
  });

  $("#plusQty")?.addEventListener("click", () => {
    quantity = Math.min(99, quantity + 1);
    quantityDisplay.textContent = quantity;
  });


  // ADD TO CART
  $("#addToCart")?.addEventListener("click", () => {
    const cartCount = $("#cartCount");

    const currentCount = Number(cartCount.textContent || 0);
    cartCount.textContent = currentCount + quantity;

    const colour =
      $(".swatch.selected")?.dataset.color || "Olive";

    const size =
      $(".sizes .selected")?.textContent || "Large";

    $("#cartMessage").textContent =
      `Added ${quantity} ${colour} / ${size} to your cart.`;

    showToast("Product added to cart!");
  });


  // PRODUCT DETAILS, REVIEWS AND FAQ TABS
  const tabNames = ["details", "reviews", "faqs"];

  $$(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
      $$(".tab-button").forEach(tab =>
        tab.classList.toggle("active", tab === button)
      );

      tabNames.forEach(name => {
        const panel = $("#" + name + "Panel");

        if (panel) {
          panel.hidden = name !== button.dataset.tab;
        }
      });
    });
  });


  // DISPLAY PRODUCT REVIEWS
  let visibleReviews = 4;

  function displayProductReviews() {
    let sortedReviews = [...reviews];

    const sortValue = $("#reviewSort")?.value || "latest";

    if (sortValue === "highest") {
      sortedReviews.sort((a, b) => b.stars - a.stars);
    }

    if (sortValue === "lowest") {
      sortedReviews.sort((a, b) => a.stars - b.stars);
    }

    $("#productReviews").innerHTML = sortedReviews
      .slice(0, visibleReviews)
      .map(reviewCard)
      .join("");
  }

  displayProductReviews();

  $("#reviewSort")?.addEventListener(
    "change",
    displayProductReviews
  );

  $("#loadReviews")?.addEventListener("click", () => {
    visibleReviews = Math.min(
      visibleReviews + 2,
      reviews.length
    );

    displayProductReviews();

    if (visibleReviews >= reviews.length) {
      $("#loadReviews").textContent = "All Reviews Loaded";
      $("#loadReviews").disabled = true;
    }
  });


  // WRITE A REVIEW
  $("#writeReview")?.addEventListener("click", () => {
    const name = prompt("Enter your name:");

    if (!name || !name.trim()) return;

    const text = prompt("Write your review:");

    if (!text || !text.trim()) return;

    reviews.unshift({
      name: name.trim(),
      stars: 5,
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    });

    visibleReviews = Math.min(
      visibleReviews + 1,
      reviews.length
    );

    displayProductReviews();
    showToast("Thank you for your review!");
  });
}


// SHARED FEATURES
function initCommon() {
  // MOBILE MENU
  $("#menuToggle")?.addEventListener("click", () => {
    $("#mainNav")?.classList.toggle("open");
    $(".search")?.classList.toggle("open");
  });

  // NEWSLETTER
  $("#newsletterForm")?.addEventListener("submit", event => {
    event.preventDefault();

    showToast("Thank you for subscribing!");
    event.target.reset();
  });

  // CART BUTTON
  $("#cartButton")?.addEventListener("click", event => {
    event.preventDefault();

    showToast(
      `Your cart contains ${$("#cartCount")?.textContent || 0} item(s).`
    );
  });

  // PRODUCT SEARCH
  $("#siteSearch")?.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;

    const query = event.target.value.trim().toLowerCase();

    if (!query) return;

    const allProducts = [
      ...products.newArrivals,
      ...products.topProducts,
      ...products.relatedProducts
    ];

    const matches = allProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      showToast(`Found ${matches.length} matching product(s).`);

      if ($("#newArrivals")) {
        $("#arrivals").scrollIntoView({ behavior: "smooth" });
      } else {
        $("#relatedProducts").scrollIntoView({ behavior: "smooth" });
      }
    } else {
      showToast("No matching products found.");
    }
  });
}


// START THE WEBSITE
document.addEventListener("DOMContentLoaded", () => {
  initCommon();

  if ($("#newArrivals")) {
    initHome();
  }

  if ($("#mainProductImage")) {
    initProduct();
  }
});

/* ==================================
   CART AND CATEGORY PAGE FEATURES
================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Shared demo products for the new pages
  const catalog = [
    ...products.newArrivals,
    ...products.topProducts,
    ...products.relatedProducts
  ];

  const categoryData = catalog.map((product, index) => ({
    ...product,
    id: "shop-" + index,
    color: ["White", "Blue", "Red", "Black", "Green"][index % 5],
    size: ["Large", "Medium", "Large", "Small"][index % 4],
    category: /jeans|denim/i.test(product.name) ? "Jeans"
      : /shorts/i.test(product.name) ? "Shorts"
      : /shirt/i.test(product.name) ? "Shirts"
      : "T-shirts",
    style: "Casual",
    popularity: catalog.length - index
  }));

  const money = amount =>
    "$" + Number(amount).toFixed(0);

  function notify(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.shopToastTimer);
    window.shopToastTimer = setTimeout(
      () => toast.classList.remove("show"), 2500
    );
  }

  // Demo cart: starts with the three items shown in your screenshot.
  // Cart changes persist in this browser using localStorage.
  const cartKey = "shopco_demo_cart";

  function readCart() {
    try {
      const saved = localStorage.getItem(cartKey);
      if (saved !== null) return JSON.parse(saved);
    } catch (error) {
      console.warn("Cart storage is unavailable.");
    }

    return [
      { name: "Gradient Graphic T-shirt", price: 145,
        image: categoryData.find(p =>
          /gradient graphic/i.test(p.name))?.image,
        size: "Large", color: "White", quantity: 1 },
      { name: "Checkered Shirt", price: 180,
        image: categoryData.find(p =>
          /checkered/i.test(p.name))?.image,
        size: "Medium", color: "Red", quantity: 1 },
      { name: "Skinny Fit Jeans", price: 240,
        image: categoryData.find(p =>
          /skinny fit jeans/i.test(p.name))?.image,
        size: "Large", color: "Blue", quantity: 1 }
    ];
  }

  let cart = readCart();
  let promoApplied = false;

  function saveCart() {
    try {
      localStorage.setItem(cartKey, JSON.stringify(cart));
    } catch (error) {
      console.warn("Could not save cart.");
    }
  }

  function updateCartBadges() {
    const count = cart.reduce(
      (total, item) => total + item.quantity, 0
    );

    document.querySelectorAll("#cartCount").forEach(element => {
      element.textContent = count;
    });
  }

  // CART PAGE
  function initCartPage() {
    const container = document.getElementById("cartItems");
    if (!container) return;

    const emptyCart = document.getElementById("emptyCart");
    const subtotalElement = document.getElementById("subtotal");
    const discountElement = document.getElementById("discount");
    const deliveryElement = document.getElementById("delivery");
    const totalElement = document.getElementById("total");

    function renderCart() {
      container.innerHTML = "";

      emptyCart.hidden = cart.length !== 0;
      container.hidden = cart.length === 0;

      cart.forEach((item, index) => {
        const row = document.createElement("article");
        row.className = "cart-item";

        const image = document.createElement("img");
        image.src = item.image || "";
        image.alt = item.name;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const name = document.createElement("h3");
        name.textContent = item.name;

        const size = document.createElement("p");
        size.textContent = "Size: " + item.size;

        const color = document.createElement("p");
        color.textContent = "Color: " + item.color;

        const price = document.createElement("div");
        price.className = "cart-item-price";
        price.textContent = money(item.price);

        info.append(name, size, color, price);

        const actions = document.createElement("div");
        actions.className = "cart-item-actions";

        const remove = document.createElement("button");
        remove.className = "remove-item";
        remove.textContent = "▣";
        remove.setAttribute("aria-label", "Remove " + item.name);

        remove.addEventListener("click", () => {
          cart.splice(index, 1);
          saveCart();
          renderCart();
        });

        const quantityBox = document.createElement("div");
        quantityBox.className = "cart-quantity";

        const minus = document.createElement("button");
        minus.textContent = "−";
        minus.setAttribute("aria-label", "Decrease quantity");

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("aria-label", "Increase quantity");

        minus.addEventListener("click", () => {
          item.quantity--;

          if (item.quantity <= 0) {
            cart.splice(index, 1);
          }

          saveCart();
          renderCart();
        });

        plus.addEventListener("click", () => {
          item.quantity = Math.min(99, item.quantity + 1);
          saveCart();
          renderCart();
        });

        quantityBox.append(minus, quantity, plus);
        actions.append(remove, quantityBox);
        row.append(image, info, actions);
        container.appendChild(row);
      });

      const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
      );

      const discount = promoApplied ? subtotal * 0.20 : 0;
      const delivery = subtotal > 0 ? 15 : 0;
      const total = subtotal - discount + delivery;

      subtotalElement.textContent = money(subtotal);
      discountElement.textContent = "-" + money(discount);
      deliveryElement.textContent = money(delivery);
      totalElement.textContent = money(total);

      updateCartBadges();
    }

    document.getElementById("promoForm")
      ?.addEventListener("submit", event => {
        event.preventDefault();

        const code = document.getElementById("promoCode")
          .value.trim().toUpperCase();

        const message = document.getElementById("promoMessage");

        if (code === "SAVE20") {
          promoApplied = true;
          message.textContent = "20% discount applied!";
          renderCart();
        } else {
          message.textContent = "Try the demo code SAVE20.";
          promoApplied = false;
          renderCart();
        }
      });

    document.getElementById("checkoutButton")
      ?.addEventListener("click", () => {
        const message = document.getElementById("checkoutMessage");

        message.textContent = cart.length
          ? "Demo checkout only. A payment system is not connected yet."
          : "Your cart is empty.";
      });

    renderCart();
  }

  // CATEGORY PAGE
  function initCategoryPage() {
    const grid = document.getElementById("categoryGrid");
    if (!grid) return;

    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const sortSelect = document.getElementById("sortProducts");
    const countLabel = document.getElementById("resultsCount");
    const pageNumbers = document.getElementById("pageNumbers");

    let selectedColor = "";
    let selectedSize = "";
    let selectedStyle = "";
    let selectedCategory = "";
    let currentPage = 1;
    const perPage = 9;

    function filterProducts() {
      let result = [...categoryData];

      const min = Number(minPrice.value) || 0;
      const max = Number(maxPrice.value) || 500;

      result = result.filter(product =>
        product.price >= min &&
        product.price <= max
      );

      if (selectedColor) {
        result = result.filter(p => p.color === selectedColor);
      }

      if (selectedSize) {
        result = result.filter(p => p.size === selectedSize);
      }

      if (selectedStyle) {
        result = result.filter(p => p.style === selectedStyle);
      }

      if (selectedCategory) {
        result = result.filter(p => {
          if (selectedCategory === "T-shirts") {
            return /t-shirt|tee/i.test(p.name);
          }

          return p.category === selectedCategory;
        });
      }

      const query = document.getElementById("siteSearch")
        ?.value.trim().toLowerCase();

      if (query) {
        result = result.filter(p =>
          p.name.toLowerCase().includes(query)
        );
      }

      switch (sortSelect.value) {
        case "latest":
          result.reverse();
          break;
        case "priceLow":
          result.sort((a, b) => a.price - b.price);
          break;
        case "priceHigh":
          result.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          result.sort((a, b) =>
            parseFloat(b.rating) - parseFloat(a.rating)
          );
          break;
        default:
          result.sort((a, b) => b.popularity - a.popularity);
      }

      return result;
    }

    function renderCategory() {
      const result = filterProducts();
      const pageCount = Math.max(1, Math.ceil(result.length / perPage));

      currentPage = Math.min(currentPage, pageCount);

      const start = (currentPage - 1) * perPage;
      const visible = result.slice(start, start + perPage);

      grid.innerHTML = "";

      visible.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        const link = document.createElement("a");
        link.href = "product.html";
        link.setAttribute("aria-label", "View " + product.name);

        const image = document.createElement("img");
        image.className = "product-photo";
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        link.appendChild(image);

        const name = document.createElement("p");
        name.className = "product-name";
        name.textContent = product.name;

        const rating = document.createElement("div");
        rating.className = "rating";

        const stars = document.createElement("span");
        stars.textContent = "★★★★★";

        const ratingText = document.createElement("small");
        ratingText.textContent = product.rating;

        rating.append(stars, ratingText);

        const priceLine = document.createElement("div");
        priceLine.className = "price-line";

        const price = document.createElement("strong");
        price.textContent = money(product.price);
        priceLine.appendChild(price);

        if (product.oldPrice) {
          const oldPrice = document.createElement("del");
          oldPrice.textContent = money(product.oldPrice);
          priceLine.appendChild(oldPrice);
        }

        if (product.discount) {
          const discount = document.createElement("span");
          discount.className = "discount";
          discount.textContent = product.discount;
          priceLine.appendChild(discount);
        }

        card.append(link, name, rating, priceLine);
        grid.appendChild(card);
      });

      countLabel.textContent = result.length
        ? `Showing ${start + 1}–${Math.min(start + perPage, result.length)} of ${result.length} Products`
        : "No matching products found";

      pageNumbers.innerHTML = "";

      for (let page = 1; page <= pageCount; page++) {
        const button = document.createElement("button");
        button.textContent = page;

        if (page === currentPage) button.classList.add("active");

        button.addEventListener("click", () => {
          currentPage = page;
          renderCategory();
        });

        pageNumbers.appendChild(button);
      }

      document.getElementById("previousPage").disabled =
        currentPage === 1;

      document.getElementById("nextPage").disabled =
        currentPage === pageCount;
    }

    // PRICE SLIDERS
    minRange.addEventListener("input", () => {
      minPrice.value = minRange.value;
      if (+minPrice.value > +maxPrice.value) {
        maxPrice.value = minPrice.value;
        maxRange.value = minRange.value;
      }
    });

    maxRange.addEventListener("input", () => {
      maxPrice.value = maxRange.value;
      if (+maxPrice.value < +minPrice.value) {
        minPrice.value = maxPrice.value;
        minRange.value = maxRange.value;
      }
    });

    // COLOR FILTERS
    document.querySelectorAll(".color-dot").forEach(button => {
      button.addEventListener("click", () => {
        const wasSelected = button.classList.contains("selected");

        document.querySelectorAll(".color-dot").forEach(dot =>
          dot.classList.remove("selected")
        );

        selectedColor = wasSelected ? "" : button.dataset.color;

        if (!wasSelected) button.classList.add("selected");
      });
    });

    // SIZE FILTERS
    document.querySelectorAll(".size-options button").forEach(button => {
      button.addEventListener("click", () => {
        const wasSelected = button.classList.contains("selected");

        document.querySelectorAll(".size-options button").forEach(size =>
          size.classList.remove("selected")
        );

        selectedSize = wasSelected ? "" : button.dataset.size;

        if (!wasSelected) button.classList.add("selected");
      });
    });

    // DRESS STYLE FILTERS
    document.querySelectorAll("[data-style]").forEach(button => {
      button.addEventListener("click", () => {
        selectedStyle = button.dataset.style;
        document.querySelectorAll("[data-style]").forEach(style => {
          style.style.fontWeight =
            style === button ? "bold" : "normal";
        });
      });
    });

    // CATEGORY LINKS
    document.querySelectorAll("[data-category]").forEach(link => {
      link.addEventListener("click", () => {
        selectedCategory = link.dataset.category;
        currentPage = 1;
        renderCategory();
      });
    });

    document.getElementById("applyFilters")
      .addEventListener("click", () => {
        currentPage = 1;
        renderCategory();

        document.getElementById("filtersPanel")
          .classList.remove("open");
      });

    document.getElementById("resetFilters")
      .addEventListener("click", () => {
        minPrice.value = 0;
        maxPrice.value = 500;
        minRange.value = 0;
        maxRange.value = 500;

        selectedColor = "";
        selectedSize = "";
        selectedStyle = "";
        selectedCategory = "";

        document.querySelectorAll(
          ".color-dot, .size-options button"
        ).forEach(button => button.classList.remove("selected"));

        document.querySelectorAll("[data-style]").forEach(button => {
          button.style.fontWeight = "normal";
        });

        sortSelect.value = "popular";
        currentPage = 1;
        renderCategory();
      });

    sortSelect.addEventListener("change", () => {
      currentPage = 1;
      renderCategory();
    });

    document.getElementById("previousPage")
      .addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          renderCategory();
        }
      });

    document.getElementById("nextPage")
      .addEventListener("click", () => {
        currentPage++;
        renderCategory();
      });

    // MOBILE FILTER DRAWER
    document.getElementById("openFilters")
      .addEventListener("click", () => {
        document.getElementById("filtersPanel")
          .classList.add("open");
      });

    document.getElementById("closeFilters")
      .addEventListener("click", () => {
        document.getElementById("filtersPanel")
          .classList.remove("open");
      });

    document.getElementById("siteSearch")
      ?.addEventListener("input", () => {
        currentPage = 1;
        renderCategory();
      });

    renderCategory();
  }

  if (document.body.dataset.page === "cart") {
    initCartPage();
  }

  if (document.body.dataset.page === "casual") {
    initCategoryPage();
  }

  updateCartBadges();
});

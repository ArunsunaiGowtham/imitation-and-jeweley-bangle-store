/**
 * Mayuri Jewels & Bangles - Master Interactive Controller
 * Project 27: Imitation Jewellery & Bangles Store
 * Strictly No Backend / No Dashboard / Pure Frontend E-Commerce Experience
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. GLOBAL STATE & LOCAL STORAGE KEYS
     ========================================================================== */
  const STORAGE_KEYS = {
    CART: "mayuri_cart_v1",
    WISHLIST: "mayuri_wishlist_v1",
    THEME: "mayuri_theme_v1",
    DIRECTION: "mayuri_dir_v1"
  };

  let cart = [];
  let wishlist = [];

  // Initialize Storage
  try {
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (savedCart) cart = JSON.parse(savedCart);
    const savedWish = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    if (savedWish) wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.warn("Storage access failed, using session memory:", e);
  }

  /* ==========================================================================
     2. IMMEDIATE PHONE & INPUT VALIDATION GUARDS
     ========================================================================== */
  function setupInputProtection() {
    function isPhoneField(el) {
      if (!el || typeof el.matches !== "function") return false;
      return (
        el.matches('input[type="tel"], input[name*="phone"], #contactPhone, #quickPhone') ||
        el.getAttribute("type") === "tel" ||
        (el.getAttribute("name") && el.getAttribute("name").toLowerCase().includes("phone"))
      );
    }

    // Intercept invalid non-numeric keys for phone fields
    document.addEventListener(
      "keydown",
      function (e) {
        if (isPhoneField(e.target)) {
          if (e.key === " " || e.code === "Space") {
            e.preventDefault();
            return;
          }
          const allowedKeys = [
            "Backspace", "Delete", "Tab", "Escape", "Enter",
            "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"
          ];
          if (allowedKeys.indexOf(e.key) !== -1 || e.ctrlKey || e.metaKey || e.altKey) return;
          if (!/^[0-9+]$/.test(e.key)) {
            e.preventDefault();
          }
        }
      },
      true
    );

    // Sanitize phone on paste and input
    document.addEventListener("input", function (e) {
      if (isPhoneField(e.target)) {
        const input = e.target;
        const cleaned = input.value.replace(/[^0-9+]/g, "");
        if (input.value !== cleaned) {
          input.value = cleaned;
        }
      }
    });
  }

  setupInputProtection();

  /* ==========================================================================
     3. THEME TOGGLE (LIGHT & DARK MODE)
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
    updateThemeIcons(savedTheme);

    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-bs-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-bs-theme", next);
        localStorage.setItem(STORAGE_KEYS.THEME, next);
        updateThemeIcons(next);
      });
    });
  }

  function updateThemeIcons(theme) {
    document.querySelectorAll(".theme-toggle-btn i").forEach((icon) => {
      if (theme === "dark") {
        icon.className = "bi bi-sun-fill";
      } else {
        icon.className = "bi bi-moon-stars";
      }
    });
  }

  /* ==========================================================================
     4. RTL TOGGLE (LTR / RTL)
     ========================================================================== */
  function initRTL() {
    const savedDir = localStorage.getItem(STORAGE_KEYS.DIRECTION) || "ltr";
    document.documentElement.setAttribute("dir", savedDir);
    updateRTLText(savedDir);

    document.querySelectorAll(".rtl-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("dir") || "ltr";
        const next = current === "rtl" ? "ltr" : "rtl";
        document.documentElement.setAttribute("dir", next);
        localStorage.setItem(STORAGE_KEYS.DIRECTION, next);
        updateRTLText(next);
        showToast(`Layout Direction: ${next.toUpperCase()}`);
      });
    });
  }

  function updateRTLText(dir) {
    document.querySelectorAll(".rtl-toggle-btn .dir-text").forEach((el) => {
      el.textContent = dir === "rtl" ? "LTR" : "RTL";
    });
  }

  /* ==========================================================================
     5. STICKY NAVBAR BEHAVIOR
     ========================================================================== */
  function initStickyNavbar() {
    const navbar = document.querySelector(".navbar-jewel");
    if (!navbar) return;

    function handleScroll() {
      if (window.scrollY > 15) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  /* ==========================================================================
     6. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  function showToast(message, iconClass = "bi-check-circle-fill") {
    let container = document.querySelector(".jewel-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "jewel-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "jewel-toast";
    toast.innerHTML = `
      <i class="bi ${iconClass} text-gold fs-5"></i>
      <div class="toast-text fw-medium" style="font-size: 0.9rem;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /* ==========================================================================
     7. CART SYSTEM (PERSISTENT & DYNAMIC)
     ========================================================================== */
  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {}
    updateCartBadges();
    renderCartDrawer();
  }

  function updateCartBadges() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll(".cart-count-badge").forEach((b) => {
      b.textContent = count;
      b.style.display = count > 0 ? "flex" : "none";
    });
  }

  function addToCart(productId, qty = 1, selectedColor = null, selectedSize = null) {
    if (!window.JEWELRY_PRODUCTS) return;
    const product = window.JEWELRY_PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex((item) => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        qty: qty,
        color: selectedColor || (product.colors && product.colors[0]) || "",
        size: selectedSize || (product.sizes && product.sizes[0]) || ""
      });
    }

    saveCart();
    showToast(`Added <strong>${product.name}</strong> to Cart!`, "bi-bag-check-fill");
  }

  function updateCartQty(productId, delta) {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((i) => i.id !== productId);
      showToast("Item removed from Cart.", "bi-trash");
    }
    saveCart();
  }

  function removeCartItem(productId) {
    cart = cart.filter((i) => i.id !== productId);
    saveCart();
    showToast("Item removed from Cart.", "bi-trash");
  }

  function clearCart() {
    cart = [];
    saveCart();
    showToast("Cart cleared.", "bi-trash");
  }

  function renderCartDrawer() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cartSubtotalEl = document.getElementById("cartSubtotal");
    const cartTotalEl = document.getElementById("cartTotal");
    const freeShippingProgress = document.getElementById("freeShippingProgress");
    const freeShippingText = document.getElementById("freeShippingText");
    const cartEmptyNotice = document.getElementById("cartEmptyNotice");
    const cartFooter = document.getElementById("cartFooter");

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-5">
          <div class="mb-3 text-muted">
            <i class="bi bi-bag-x" style="font-size: 3.5rem; opacity: 0.5;"></i>
          </div>
          <h5 class="fw-bold">Your Shopping Cart is Empty</h5>
          <p class="text-muted small">Explore our handcrafted necklaces, vibrant bangles, and bridal collections.</p>
          <a href="shop.html" class="btn btn-gold btn-sm mt-2">Explore Shop</a>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = "none";
      if (freeShippingProgress) freeShippingProgress.style.width = "0%";
      if (freeShippingText) freeShippingText.textContent = "Add items worth ₹1,499 for FREE Delivery!";
      return;
    }

    if (cartFooter) cartFooter.style.display = "block";

    let subtotal = 0;
    cartItemsContainer.innerHTML = cart
      .map((item) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h6 class="cart-item-title">${item.name}</h6>
            <div class="cart-item-price mb-2">₹${item.price.toLocaleString("en-IN")} ${item.size ? `<span class="badge bg-light text-dark ms-1">${item.size}</span>` : ""}</div>
            <div class="d-flex align-items-center gap-2">
              <div class="qty-stepper">
                <button type="button" class="qty-btn" data-cart-action="dec" data-id="${item.id}">-</button>
                <input type="text" class="qty-input" value="${item.qty}" readonly>
                <button type="button" class="qty-btn" data-cart-action="inc" data-id="${item.id}">+</button>
              </div>
              <button type="button" class="btn btn-link text-danger p-0 ms-auto" data-cart-action="del" data-id="${item.id}" title="Remove item">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    if (cartTotalEl) cartTotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;

    // Free shipping threshold: ₹1499
    const threshold = 1499;
    if (freeShippingProgress && freeShippingText) {
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      freeShippingProgress.style.width = `${pct}%`;
      if (subtotal >= threshold) {
        freeShippingText.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-check-circle-fill"></i> Congratulations! You qualified for FREE Insured Express Delivery!</span>`;
      } else {
        const needed = threshold - subtotal;
        freeShippingText.innerHTML = `Add <strong>₹${needed.toLocaleString("en-IN")}</strong> more to get <strong>FREE Express Delivery</strong>!`;
      }
    }
  }

  // Delegated cart drawer events
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cart-action]");
    if (!btn) return;

    const action = btn.getAttribute("data-cart-action");
    const id = btn.getAttribute("data-id");

    if (action === "inc") updateCartQty(id, 1);
    if (action === "dec") updateCartQty(id, -1);
    if (action === "del") removeCartItem(id);
  });

  /* ==========================================================================
     8. WISHLIST SYSTEM
     ========================================================================== */
  function saveWishlist() {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (e) {}
    updateWishlistBadges();
    updateWishlistButtons();
  }

  function updateWishlistBadges() {
    const count = wishlist.length;
    document.querySelectorAll(".wishlist-count-badge").forEach((b) => {
      b.textContent = count;
      b.style.display = count > 0 ? "flex" : "none";
    });
  }

  function updateWishlistButtons() {
    document.querySelectorAll("[data-wishlist-id]").forEach((btn) => {
      const id = btn.getAttribute("data-wishlist-id");
      if (wishlist.includes(id)) {
        btn.classList.add("active-wishlist");
        const icon = btn.querySelector("i");
        if (icon) icon.className = "bi bi-heart-fill";
      } else {
        btn.classList.remove("active-wishlist");
        const icon = btn.querySelector("i");
        if (icon) icon.className = "bi bi-heart";
      }
    });
  }

  function toggleWishlist(productId) {
    if (!window.JEWELRY_PRODUCTS) return;
    const product = window.JEWELRY_PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`Removed <strong>${product.name}</strong> from Wishlist.`);
    } else {
      wishlist.push(productId);
      showToast(`Added <strong>${product.name}</strong> to Wishlist!`, "bi-heart-fill");
    }
    saveWishlist();
  }

  // Global Wishlist Button Click
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-wishlist-id]");
    if (btn) {
      e.preventDefault();
      const id = btn.getAttribute("data-wishlist-id");
      toggleWishlist(id);
    }
  });

  // Global Add to Cart Click
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add-cart-id]");
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-add-cart-id");
      addToCart(id, 1);

      // Instant visual confirmation on button
      const origHtml = btn.innerHTML;
      btn.innerHTML = `<i class="bi bi-check2"></i> Added!`;
      btn.classList.add("btn-added-feedback");
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.classList.remove("btn-added-feedback");
      }, 1200);
    }
  });

  /* ==========================================================================
     9. QUICK VIEW MODAL
     ========================================================================== */
  function openQuickView(productId) {
    if (!window.JEWELRY_PRODUCTS) return;
    const product = window.JEWELRY_PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById("quickViewTitle");
    const modalCategory = document.getElementById("quickViewCategory");
    const modalPrice = document.getElementById("quickViewPrice");
    const modalOldPrice = document.getElementById("quickViewOldPrice");
    const modalDiscount = document.getElementById("quickViewDiscount");
    const modalDesc = document.getElementById("quickViewDesc");
    const modalImg = document.getElementById("quickViewImg");
    const modalThumbs = document.getElementById("quickViewThumbs");
    const modalSizes = document.getElementById("quickViewSizes");
    const modalSpecs = document.getElementById("quickViewSpecs");
    const modalAddBtn = document.getElementById("quickViewAddBtn");
    const modalDetailsLink = document.getElementById("quickViewDetailsLink");

    if (modalTitle) modalTitle.textContent = product.name;
    if (modalCategory) modalCategory.textContent = product.category;
    if (modalPrice) modalPrice.textContent = `₹${product.price.toLocaleString("en-IN")}`;
    if (modalOldPrice) modalOldPrice.textContent = `₹${product.originalPrice.toLocaleString("en-IN")}`;
    if (modalDiscount) modalDiscount.textContent = product.discount || "";
    if (modalDesc) modalDesc.textContent = product.shortDesc;
    if (modalImg) {
      modalImg.src = product.image;
      modalImg.alt = product.name;
    }
    if (modalDetailsLink) modalDetailsLink.href = `product-details.html?id=${product.id}`;

    // Gallery Thumbs
    if (modalThumbs && product.gallery) {
      modalThumbs.innerHTML = product.gallery
        .map(
          (img, idx) => `
        <div class="thumb-item ${idx === 0 ? "active" : ""}" data-thumb-src="${img}">
          <img src="${img}" alt="${product.name} thumb">
        </div>
      `
        )
        .join("");
    }

    // Sizes
    if (modalSizes) {
      if (product.sizes && product.sizes.length > 0) {
        modalSizes.innerHTML = `
          <label class="form-label fw-bold small text-uppercase text-muted">Available Sizes / Fit:</label>
          <div class="size-selector">
            ${product.sizes.map((s, idx) => `<button type="button" class="size-pill-btn ${idx === 0 ? "active" : ""}">${s}</button>`).join("")}
          </div>
        `;
      } else {
        modalSizes.innerHTML = "";
      }
    }

    // Dynamic Specs
    if (modalSpecs && product.specs) {
      const keys = Object.keys(product.specs).slice(0, 4);
      modalSpecs.innerHTML = `
        <table class="table table-sm spec-table mb-0 mt-3">
          <tbody>
            ${keys.map((k) => `<tr><th>${k}</th><td>${product.specs[k]}</td></tr>`).join("")}
          </tbody>
        </table>
      `;
    }

    // Add to Cart handler inside quick view
    if (modalAddBtn) {
      modalAddBtn.onclick = () => {
        const qtyInput = document.getElementById("quickViewQty");
        const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
        addToCart(product.id, qty);
        const modalEl = document.getElementById("quickViewModal");
        if (modalEl && window.bootstrap) {
          const bsModal = bootstrap.Modal.getInstance(modalEl);
          if (bsModal) bsModal.hide();
        }
      };
    }

    const modalEl = document.getElementById("quickViewModal");
    if (modalEl && window.bootstrap) {
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    }
  }

  // Quick View click trigger
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-quickview-id]");
    if (btn) {
      e.preventDefault();
      const id = btn.getAttribute("data-quickview-id");
      openQuickView(id);
    }

    // Thumb click in quick view
    const thumb = e.target.closest(".thumb-item[data-thumb-src]");
    if (thumb) {
      const targetSrc = thumb.getAttribute("data-thumb-src");
      const parent = thumb.parentElement;
      if (parent) {
        parent.querySelectorAll(".thumb-item").forEach((t) => t.classList.remove("active"));
      }
      thumb.classList.add("active");
      const mainImg = document.getElementById("quickViewImg") || document.getElementById("productMainImg");
      if (mainImg) mainImg.src = targetSrc;
    }

    // Size pill click
    const sizePill = e.target.closest(".size-pill-btn");
    if (sizePill) {
      const selector = sizePill.parentElement;
      if (selector) {
        selector.querySelectorAll(".size-pill-btn").forEach((b) => b.classList.remove("active"));
      }
      sizePill.classList.add("active");
    }
  });

  /* ==========================================================================
     10. SHOP PAGE: FILTERING, SEARCHING & SORTING ENGINE
     ========================================================================== */
  function initShopPage() {
    const productsGrid = document.getElementById("shopProductsGrid");
    if (!productsGrid || !window.JEWELRY_PRODUCTS) return;

    let activeCategory = "All";
    let activePriceRange = "all";
    let activeSort = "featured";
    let searchQuery = "";

    const searchInput = document.getElementById("shopSearchInput");
    const searchBtn = document.getElementById("shopSearchBtn");

    // Parse URL params (?cat=... & ?search=... or ?q=...)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat");
    const searchParam = urlParams.get("search") || urlParams.get("q");

    if (searchParam) {
      searchQuery = decodeURIComponent(searchParam).trim();
      if (searchInput) searchInput.value = searchQuery;
    }
    if (catParam && !searchParam) {
      activeCategory = decodeURIComponent(catParam);
    }

    // Comprehensive search query matcher
    function matchesSearch(product, query) {
      if (!query) return true;
      const clean = query.toLowerCase().trim();
      if (!clean) return true;
      const singular = clean.endsWith("s") && clean.length > 3 ? clean.slice(0, -1) : clean;

      const searchableText = [
        product.name || "",
        product.category || "",
        product.subCategory || "",
        product.shortDesc || "",
        product.badge || "",
        Object.values(product.specs || {}).join(" "),
        (product.colors || []).join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(clean) || searchableText.includes(singular);
    }

    function renderProducts() {
      let filtered = [...window.JEWELRY_PRODUCTS];

      // Auto-fallback: If search query is present, check whether activeCategory restricts it to 0 results
      // while matching products exist across the entire catalogue.
      if (searchQuery.trim().length > 0 && activeCategory !== "All") {
        const categoryMatches = filtered.filter((p) => {
          const matchCat =
            p.category.toLowerCase() === activeCategory.toLowerCase() ||
            (p.subCategory && p.subCategory.toLowerCase() === activeCategory.toLowerCase());
          return matchCat && matchesSearch(p, searchQuery);
        });

        // If no matches inside the selected category, but matches exist globally,
        // automatically switch activeCategory to All so the user finds what they searched for
        if (categoryMatches.length === 0) {
          const globalMatches = window.JEWELRY_PRODUCTS.filter((p) => matchesSearch(p, searchQuery));
          if (globalMatches.length > 0) {
            activeCategory = "All";
            document.querySelectorAll("[data-filter-category]").forEach((b) => {
              b.classList.toggle("active", b.getAttribute("data-filter-category") === "All");
            });
          }
        }
      }

      // Category filter
      if (activeCategory !== "All") {
        filtered = filtered.filter(
          (p) =>
            p.category.toLowerCase() === activeCategory.toLowerCase() ||
            (p.subCategory && p.subCategory.toLowerCase() === activeCategory.toLowerCase())
        );
      }

      // Price filter
      if (activePriceRange === "under-1000") {
        filtered = filtered.filter((p) => p.price < 1000);
      } else if (activePriceRange === "1000-2000") {
        filtered = filtered.filter((p) => p.price >= 1000 && p.price <= 2000);
      } else if (activePriceRange === "2000-4000") {
        filtered = filtered.filter((p) => p.price > 2000 && p.price <= 4000);
      } else if (activePriceRange === "above-4000") {
        filtered = filtered.filter((p) => p.price > 4000);
      }

      // Search query filter
      if (searchQuery.trim().length > 0) {
        filtered = filtered.filter((p) => matchesSearch(p, searchQuery));
      }

      // Sorting
      if (activeSort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (activeSort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (activeSort === "popularity") {
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
      } else if (activeSort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      // Update Result Count
      const resultCountEl = document.getElementById("shopResultCount");
      if (resultCountEl) {
        resultCountEl.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? "" : "s"}`;
      }

      // Active Filter Pills
      const activeFilterPills = document.getElementById("activeFilterPills");
      if (activeFilterPills) {
        let pillsHtml = "";
        if (activeCategory !== "All") {
          pillsHtml += `<span class="badge bg-gold text-dark me-2 py-2 px-3">${activeCategory} <i class="bi bi-x-circle ms-1 cursor-pointer" id="clearCatPill" title="Clear category filter"></i></span>`;
        }
        if (activePriceRange !== "all") {
          pillsHtml += `<span class="badge bg-secondary text-white me-2 py-2 px-3">Price Filter <i class="bi bi-x-circle ms-1 cursor-pointer" id="clearPricePill" title="Clear price filter"></i></span>`;
        }
        if (searchQuery) {
          pillsHtml += `<span class="badge bg-crimson text-white me-2 py-2 px-3">"${searchQuery}" <i class="bi bi-x-circle ms-1 cursor-pointer" id="clearSearchPill" title="Clear search query"></i></span>`;
        }
        activeFilterPills.innerHTML = pillsHtml;
      }

      // Render Empty State or Cards
      if (filtered.length === 0) {
        productsGrid.innerHTML = `
          <div class="col-12 py-5 text-center">
            <div class="mb-3 text-muted"><i class="bi bi-search fs-1"></i></div>
            <h4 class="fw-bold">No Matching Jewellery Products Found</h4>
            <p class="text-muted">No products found matching <strong>"${searchQuery}"</strong>${activeCategory !== "All" ? ` under <em>${activeCategory}</em>` : ""}.</p>
            <div class="d-flex flex-wrap justify-content-center gap-2 mt-3">
              <button type="button" class="btn btn-gold btn-sm" id="resetAllFiltersBtn"><i class="bi bi-arrow-counterclockwise me-1"></i> Reset All Filters</button>
              ${searchQuery ? `<button type="button" class="btn btn-outline-crimson btn-sm" id="clearSearchBtn"><i class="bi bi-x-circle me-1"></i> Clear Search</button>` : ""}
            </div>
            <div class="mt-4 pt-3 border-top border-subtle">
              <span class="small text-muted me-2">Popular searches:</span>
              <button type="button" class="badge bg-cream text-dark border me-1 py-2 px-3 quick-search-tag" data-search-term="Bangles">Bangles</button>
              <button type="button" class="badge bg-cream text-dark border me-1 py-2 px-3 quick-search-tag" data-search-term="Choker">Choker</button>
              <button type="button" class="badge bg-cream text-dark border me-1 py-2 px-3 quick-search-tag" data-search-term="Jhumkas">Jhumkas</button>
              <button type="button" class="badge bg-cream text-dark border me-1 py-2 px-3 quick-search-tag" data-search-term="Bridal">Bridal</button>
              <button type="button" class="badge bg-cream text-dark border py-2 px-3 quick-search-tag" data-search-term="Kundan">Kundan</button>
            </div>
          </div>
        `;
        return;
      }

      productsGrid.innerHTML = filtered.map((p) => createProductCardHtml(p, "col-md-6 col-lg-4 mb-4")).join("");
      updateWishlistButtons();
    }

    // Function to execute user search
    function handleSearchInput(query) {
      searchQuery = query;
      // When a user initiates a search query, reset activeCategory to "All"
      // so the search runs across all categories rather than being restricted
      // to whatever category was clicked earlier
      if (searchQuery.trim().length > 0 && activeCategory !== "All") {
        activeCategory = "All";
        document.querySelectorAll("[data-filter-category]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-filter-category") === "All");
        });
      }
      renderProducts();
    }

    // Bind Search Input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        handleSearchInput(e.target.value);
      });
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSearchInput(searchInput.value);
        }
      });
    }

    // Bind Search Button
    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        if (searchInput) handleSearchInput(searchInput.value);
      });
    }

    // Bind Category Buttons
    document.querySelectorAll("[data-filter-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-filter-category]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-filter-category");
        renderProducts();
      });
    });

    // Bind Price Radio
    document.querySelectorAll('input[name="priceFilter"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        activePriceRange = e.target.value;
        renderProducts();
      });
    });

    // Bind Sort Select
    const sortSelect = document.getElementById("shopSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        activeSort = e.target.value;
        renderProducts();
      });
    }

    // Delegated click handlers for filters & pills
    document.addEventListener("click", (e) => {
      if (e.target.id === "resetAllFiltersBtn" || e.target.id === "clearAllFiltersLink") {
        activeCategory = "All";
        activePriceRange = "all";
        searchQuery = "";
        activeSort = "featured";
        if (searchInput) searchInput.value = "";
        const allRadio = document.getElementById("priceAll");
        if (allRadio) allRadio.checked = true;
        document.querySelectorAll("[data-filter-category]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-filter-category") === "All");
        });
        renderProducts();
      }
      if (e.target.id === "clearCatPill") {
        activeCategory = "All";
        document.querySelectorAll("[data-filter-category]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-filter-category") === "All");
        });
        renderProducts();
      }
      if (e.target.id === "clearPricePill") {
        activePriceRange = "all";
        const allRadio = document.getElementById("priceAll");
        if (allRadio) allRadio.checked = true;
        renderProducts();
      }
      if (e.target.id === "clearSearchPill" || e.target.id === "clearSearchBtn") {
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        renderProducts();
      }
      // Quick search tags inside empty state
      const quickTag = e.target.closest(".quick-search-tag");
      if (quickTag) {
        const term = quickTag.getAttribute("data-search-term");
        if (term) {
          if (searchInput) searchInput.value = term;
          handleSearchInput(term);
        }
      }
    });

    // Sync initial active button if category came from URL
    if (activeCategory !== "All") {
      document.querySelectorAll("[data-filter-category]").forEach((b) => {
        if (b.getAttribute("data-filter-category").toLowerCase() === activeCategory.toLowerCase()) {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });
    }

    // Sync category badge counts dynamically
    document.querySelectorAll("[data-filter-category]").forEach((btn) => {
      const cat = btn.getAttribute("data-filter-category");
      const badge = btn.querySelector(".badge");
      if (badge && window.JEWELRY_PRODUCTS) {
        if (cat === "All") {
          badge.textContent = window.JEWELRY_PRODUCTS.length;
        } else {
          const count = window.JEWELRY_PRODUCTS.filter(
            (p) => p.category.toLowerCase() === cat.toLowerCase() || (p.subCategory && p.subCategory.toLowerCase() === cat.toLowerCase())
          ).length;
          badge.textContent = count;
        }
      }
    });

    renderProducts();
  }

  /* ==========================================================================
     11. PRODUCT CARD HTML GENERATOR
     ========================================================================== */
  function createProductCardHtml(p, colClass = "col-lg-4 col-sm-6 mb-4") {
    const badgeClass =
      p.badge === "Trending"
        ? "badge-trending"
        : p.badge === "Best Seller"
        ? "badge-bestseller"
        : p.badge === "New Arrival"
        ? "badge-new"
        : "badge-sale";

    return `
      <div class="${colClass}">
        <div class="product-card h-100">
          <div class="product-media">
            ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ""}
            <div class="product-actions">
              <button type="button" class="action-btn" data-wishlist-id="${p.id}" title="Add to Wishlist" aria-label="Add to Wishlist">
                <i class="bi bi-heart"></i>
              </button>
              <button type="button" class="action-btn" data-quickview-id="${p.id}" title="Quick View" aria-label="Quick View">
                <i class="bi bi-eye"></i>
              </button>
            </div>
            <a href="product-details.html?id=${p.id}">
              <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
            </a>
          </div>
          <div class="product-body">
            <span class="product-category">${p.category}</span>
            <h5 class="product-title">
              <a href="product-details.html?id=${p.id}">${p.name}</a>
            </h5>
            <div class="product-rating">
              <i class="bi bi-star-fill"></i>
              <span class="fw-bold">${p.rating}</span>
              <span class="rating-count">(${p.reviewsCount})</span>
            </div>
            <div class="product-price-row">
              <span class="price-current">₹${p.price.toLocaleString("en-IN")}</span>
              <span class="price-original">₹${p.originalPrice.toLocaleString("en-IN")}</span>
              <span class="price-discount">${p.discount}</span>
            </div>
            <button type="button" class="btn btn-gold btn-add-cart" data-add-cart-id="${p.id}">
              <i class="bi bi-bag-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     12. PRODUCT DETAILS PAGE LOADER
     ========================================================================== */
  function initProductDetailsPage() {
    const mainDetails = document.getElementById("productDetailsContainer");
    if (!mainDetails || !window.JEWELRY_PRODUCTS) return;

    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get("id") || "neck-01";
    const product = window.JEWELRY_PRODUCTS.find((p) => p.id === prodId) || window.JEWELRY_PRODUCTS[0];

    // Page title
    document.title = `${product.name} | Mayuri Jewels & Bangles`;

    // Populate images
    const mainImg = document.getElementById("detailMainImg");
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }

    const thumbsRow = document.getElementById("detailThumbsRow");
    if (thumbsRow && product.gallery) {
      thumbsRow.innerHTML = product.gallery
        .map(
          (img, i) => `
        <div class="thumb-item ${i === 0 ? "active" : ""}" data-thumb-src="${img}">
          <img src="${img}" alt="${product.name} thumbnail ${i + 1}">
        </div>
      `
        )
        .join("");
    }

    // Populate metadata
    const titleEl = document.getElementById("detailTitle");
    if (titleEl) titleEl.textContent = product.name;

    const catEl = document.getElementById("detailCategory");
    if (catEl) catEl.textContent = product.category;

    const ratingEl = document.getElementById("detailRating");
    if (ratingEl) ratingEl.textContent = product.rating;

    const reviewCountEl = document.getElementById("detailReviewCount");
    if (reviewCountEl) reviewCountEl.textContent = `(${product.reviewsCount} verified customer reviews)`;

    const priceEl = document.getElementById("detailPrice");
    if (priceEl) priceEl.textContent = `₹${product.price.toLocaleString("en-IN")}`;

    const oldPriceEl = document.getElementById("detailOldPrice");
    if (oldPriceEl) oldPriceEl.textContent = `₹${product.originalPrice.toLocaleString("en-IN")}`;

    const discountEl = document.getElementById("detailDiscount");
    if (discountEl) discountEl.textContent = product.discount;

    const descEl = document.getElementById("detailDesc");
    if (descEl) descEl.textContent = product.shortDesc;

    // Breadcrumb
    const breadcrumbCat = document.getElementById("breadcrumbCategory");
    if (breadcrumbCat) {
      breadcrumbCat.textContent = product.category;
      breadcrumbCat.href = `shop.html?cat=${encodeURIComponent(product.category)}`;
    }
    const breadcrumbProd = document.getElementById("breadcrumbProduct");
    if (breadcrumbProd) breadcrumbProd.textContent = product.name;

    // Size / Fit options
    const sizeWrapper = document.getElementById("detailSizesWrapper");
    if (sizeWrapper) {
      if (product.sizes && product.sizes.length > 0) {
        sizeWrapper.innerHTML = `
          <label class="form-label fw-bold small text-uppercase text-muted">Select Size / Fit Option:</label>
          <div class="size-selector">
            ${product.sizes.map((s, idx) => `<button type="button" class="size-pill-btn ${idx === 0 ? "active" : ""}">${s}</button>`).join("")}
          </div>
        `;
      } else {
        sizeWrapper.innerHTML = "";
      }
    }

    // Specifications Table
    const specsTable = document.getElementById("detailSpecsTable");
    if (specsTable && product.specs) {
      specsTable.innerHTML = Object.keys(product.specs)
        .map(
          (k) => `
        <tr>
          <th>${k}</th>
          <td>${product.specs[k]}</td>
        </tr>
      `
        )
        .join("");
    }

    // Buttons
    const addBtn = document.getElementById("detailAddToCartBtn");
    if (addBtn) {
      addBtn.onclick = () => {
        const qty = parseInt(document.getElementById("detailQty").value, 10) || 1;
        addToCart(product.id, qty);
      };
    }

    const wishBtn = document.getElementById("detailWishlistBtn");
    if (wishBtn) {
      wishBtn.setAttribute("data-wishlist-id", product.id);
    }

    // Related Products (same category or popular)
    const relatedGrid = document.getElementById("relatedProductsGrid");
    if (relatedGrid) {
      const related = window.JEWELRY_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
      const fallback = related.length < 4 ? window.JEWELRY_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4) : related;
      relatedGrid.innerHTML = fallback.map((p) => createProductCardHtml(p, "col-lg-3 col-sm-6 mb-4")).join("");
    }

    // Quantity buttons
    const qtyInput = document.getElementById("detailQty");
    const qtyMinus = document.getElementById("detailQtyMinus");
    const qtyPlus = document.getElementById("detailQtyPlus");
    if (qtyInput && qtyMinus && qtyPlus) {
      qtyMinus.onclick = () => {
        let val = parseInt(qtyInput.value, 10) || 1;
        if (val > 1) qtyInput.value = val - 1;
      };
      qtyPlus.onclick = () => {
        let val = parseInt(qtyInput.value, 10) || 1;
        qtyInput.value = val + 1;
      };
    }

    // Pincode delivery checker (Demo)
    const pinBtn = document.getElementById("checkPincodeBtn");
    const pinInput = document.getElementById("deliveryPincodeInput");
    const pinFeedback = document.getElementById("pincodeFeedback");
    if (pinBtn && pinInput && pinFeedback) {
      pinBtn.onclick = () => {
        const pin = pinInput.value.trim();
        if (/^[1-9][0-9]{5}$/.test(pin)) {
          pinFeedback.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-truck"></i> Delivery available to ${pin} by <strong>${new Date(Date.now() + 4 * 86400000).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}</strong> (Free Express Shipping).</span>`;
        } else {
          pinFeedback.innerHTML = `<span class="text-danger">Please enter a valid 6-digit Indian Postal Pincode.</span>`;
        }
      };
    }
  }

  /* ==========================================================================
     13. BLOG PAGE ENGINE (SEARCH & CATEGORIES)
     ========================================================================== */
  function initBlogPage() {
    const blogGrid = document.getElementById("blogPostsGrid");
    if (!blogGrid || !window.BLOG_ARTICLES) return;

    let activeBlogCat = "All";
    let blogSearchQuery = "";

    function renderBlog() {
      let filtered = [...window.BLOG_ARTICLES];

      if (activeBlogCat !== "All") {
        filtered = filtered.filter((b) => b.category.toLowerCase() === activeBlogCat.toLowerCase());
      }

      if (blogSearchQuery.trim()) {
        const q = blogSearchQuery.toLowerCase();
        filtered = filtered.filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            b.category.toLowerCase().includes(q) ||
            b.summary.toLowerCase().includes(q)
        );
      }

      if (filtered.length === 0) {
        blogGrid.innerHTML = `
          <div class="col-12 py-5 text-center">
            <i class="bi bi-journal-x fs-1 text-muted"></i>
            <h4 class="fw-bold mt-2">No Matching Blog Articles Found</h4>
            <p class="text-muted">Try a different search term or category filter.</p>
            <button type="button" class="btn btn-gold btn-sm" id="resetBlogFilters">View All Articles</button>
          </div>
        `;
        return;
      }

      // Render cards with strict equal heights and image alignment
      blogGrid.innerHTML = filtered
        .map(
          (art) => `
        <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
          <article class="blog-card h-100 w-100">
            <div class="blog-media">
              <span class="blog-category-tag">${art.category}</span>
              <a href="blog-details.html?id=${art.id}">
                <img src="${art.image}" alt="${art.title}" class="blog-img" loading="lazy">
              </a>
            </div>
            <div class="blog-body">
              <div class="blog-meta">
                <span><i class="bi bi-calendar3 text-gold"></i> ${art.date}</span>
                <span><i class="bi bi-clock text-gold"></i> ${art.readTime}</span>
              </div>
              <h5 class="blog-title">
                <a href="blog-details.html?id=${art.id}">${art.title}</a>
              </h5>
              <p class="blog-desc">${art.summary}</p>
              <div class="blog-footer">
                <span class="small text-muted"><i class="bi bi-person-circle"></i> ${art.author}</span>
                <a href="blog-details.html?id=${art.id}" class="blog-read-more">
                  Read Article <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      `
        )
        .join("");
    }

    // Category buttons
    document.querySelectorAll("[data-blog-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-blog-category]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeBlogCat = btn.getAttribute("data-blog-category");
        renderBlog();
      });
    });

    // Search input
    const blogSearch = document.getElementById("blogSearchInput");
    if (blogSearch) {
      blogSearch.addEventListener("input", (e) => {
        blogSearchQuery = e.target.value;
        renderBlog();
      });
    }

    document.addEventListener("click", (e) => {
      if (e.target.id === "resetBlogFilters") {
        activeBlogCat = "All";
        blogSearchQuery = "";
        if (blogSearch) blogSearch.value = "";
        document.querySelectorAll("[data-blog-category]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-blog-category") === "All");
        });
        renderBlog();
      }
    });

    renderBlog();
  }

  /* ==========================================================================
     14. BLOG DETAILS PAGE LOADER
     ========================================================================== */
  function initBlogDetailsPage() {
    const articleContainer = document.getElementById("blogArticleContainer");
    if (!articleContainer || !window.BLOG_ARTICLES) return;

    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id") || "blog-01";
    const article = window.BLOG_ARTICLES.find((a) => a.id === blogId) || window.BLOG_ARTICLES[0];

    document.title = `${article.title} | Mayuri Jewels Blog`;

    const titleEl = document.getElementById("articleTitle");
    if (titleEl) titleEl.textContent = article.title;

    const catEl = document.getElementById("articleCategory");
    if (catEl) catEl.textContent = article.category;

    const authorEl = document.getElementById("articleAuthor");
    if (authorEl) authorEl.textContent = article.author;

    const authorRoleEl = document.getElementById("articleAuthorRole");
    if (authorRoleEl) authorRoleEl.textContent = article.authorRole;

    const bioTitleEl = document.getElementById("articleAuthorBioTitle");
    if (bioTitleEl) bioTitleEl.textContent = `Written by ${article.author}`;

    const bioRoleEl = document.getElementById("articleAuthorBioRole");
    if (bioRoleEl) bioRoleEl.textContent = article.authorRole || "";

    const bioTextEl = document.getElementById("articleAuthorBioText");
    if (bioTextEl) bioTextEl.textContent = article.authorBio || "";

    const dateEl = document.getElementById("articleDate");
    if (dateEl) dateEl.textContent = article.date;

    const readTimeEl = document.getElementById("articleReadTime");
    if (readTimeEl) readTimeEl.textContent = article.readTime;

    const imgEl = document.getElementById("articleFeaturedImg");
    if (imgEl) {
      imgEl.src = article.image;
      imgEl.alt = article.title;
    }

    const contentEl = document.getElementById("articleContent");
    if (contentEl) contentEl.innerHTML = article.content;

    // Recent Posts in Sidebar
    const recentSidebar = document.getElementById("recentPostsSidebar");
    if (recentSidebar) {
      const recent = window.BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 4);
      recentSidebar.innerHTML = recent
        .map(
          (r) => `
        <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-subtle">
          <img src="${r.image}" alt="${r.title}" style="width: 70px; height: 60px; object-fit: cover; border-radius: var(--radius-sm);">
          <div>
            <span class="small text-gold fw-bold">${r.category}</span>
            <h6 class="mb-1 small fw-bold">
              <a href="blog-details.html?id=${r.id}" class="text-reset">${r.title}</a>
            </h6>
            <span class="text-muted" style="font-size: 0.75rem;">${r.date}</span>
          </div>
        </div>
      `
        )
        .join("");
    }
  }

  /* ==========================================================================
     15. COUPON CODE COPY SYSTEM
     ========================================================================== */
  function initCouponCopy() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-copy-coupon]");
      if (btn) {
        const code = btn.getAttribute("data-copy-coupon");
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code).then(() => {
            showToast(`Coupon Code <strong>${code}</strong> copied to clipboard!`, "bi-clipboard-check");
            btn.innerHTML = `<i class="bi bi-check2"></i> Copied!`;
            setTimeout(() => {
              btn.innerHTML = `<i class="bi bi-clipboard"></i> Copy Code`;
            }, 2500);
          });
        } else {
          showToast(`Coupon Code: ${code}`);
        }
      }
    });
  }

  /* ==========================================================================
     16. CONTACT FORM VALIDATION & HONEST SUBMISSION
     ========================================================================== */
  function initContactForm() {
    const contactForm = document.getElementById("jewelleryEnquiryForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contactName");
      const emailInput = document.getElementById("contactEmail");
      const phoneInput = document.getElementById("contactPhone");
      const categoryInput = document.getElementById("contactCategory");
      const messageInput = document.getElementById("contactMessage");
      const feedbackAlert = document.getElementById("contactFeedbackAlert");

      let isValid = true;

      // Validate Name (Reject numeric-only or special symbols)
      if (!nameInput.value.trim() || /^\d+$/.test(nameInput.value.trim()) || nameInput.value.trim().length < 2) {
        nameInput.classList.add("is-invalid");
        isValid = false;
      } else {
        nameInput.classList.remove("is-invalid");
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        isValid = false;
      } else {
        emailInput.classList.remove("is-invalid");
      }

      // Validate Phone (Reject letters, require 10-15 digits)
      const phoneClean = phoneInput.value.replace(/[^0-9]/g, "");
      if (!phoneClean || phoneClean.length < 10 || phoneClean.length > 15) {
        phoneInput.classList.add("is-invalid");
        isValid = false;
      } else {
        phoneInput.classList.remove("is-invalid");
      }

      // Validate Category
      if (!categoryInput.value) {
        categoryInput.classList.add("is-invalid");
        isValid = false;
      } else {
        categoryInput.classList.remove("is-invalid");
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add("is-invalid");
        isValid = false;
      } else {
        messageInput.classList.remove("is-invalid");
      }

      if (!isValid) return;

      // Honest feedback notice
      if (feedbackAlert) {
        feedbackAlert.innerHTML = `
          <div class="alert alert-success d-flex align-items-start gap-3 shadow-sm border-0" role="alert">
            <i class="bi bi-check-circle-fill fs-4 text-success"></i>
            <div>
              <h6 class="alert-heading fw-bold mb-1">Enquiry Registered Successfully!</h6>
              <p class="mb-1 small">Thank you <strong>${nameInput.value.trim()}</strong>! Your enquiry for <strong>${categoryInput.value}</strong> has been logged.</p>
              <div class="small text-muted"><em>Notice: This is a frontend demonstration template. Our master jewellery stylists look forward to serving your bridal & festive requirements!</em></div>
            </div>
          </div>
        `;
        feedbackAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      contactForm.reset();
      showToast("Enquiry submitted successfully! (Frontend Demo)");
    });
  }

  /* ==========================================================================
     17. NEWSLETTER FORM VALIDATION
     ========================================================================== */
  function initNewsletter() {
    document.querySelectorAll(".newsletter-form").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input) return;

        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
          input.classList.add("is-invalid");
          showToast("Please enter a valid email address.", "bi-exclamation-triangle-fill");
          return;
        }

        input.classList.remove("is-invalid");
        input.value = "";
        showToast("Subscribed! Enjoy your 10% Welcome Discount code: WELCOME10", "bi-gift-fill");
      });
    });
  }

  /* ==========================================================================
     18. CHECKOUT TRIGGER (REDIRECT TO CHECKOUT PAGE)
     ========================================================================== */
  function initCheckoutTrigger() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("#btnCheckout, .btn-proceed-checkout");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        if (cart.length === 0) {
          showToast("Your cart is empty! Please add jewellery items first.", "bi-bag-x");
          return;
        }
        window.location.href = "checkout.html";
      }
    });
  }

  /* ==========================================================================
     19. COUNTDOWN TIMER COMPONENT
     ========================================================================== */
  function initCountdowns() {
    const timers = document.querySelectorAll("[data-countdown]");
    if (timers.length === 0) return;

    timers.forEach((timer) => {
      let targetDate;
      const targetStr = timer.getAttribute("data-countdown");
      if (targetStr && !isNaN(Date.parse(targetStr))) {
        targetDate = new Date(targetStr).getTime();
      } else {
        targetDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000;
      }

      const daysEl = timer.querySelector(".timer-days");
      const hoursEl = timer.querySelector(".timer-hours");
      const minsEl = timer.querySelector(".timer-mins");
      const secsEl = timer.querySelector(".timer-secs");

      function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
          if (daysEl) daysEl.textContent = "00";
          if (hoursEl) hoursEl.textContent = "00";
          if (minsEl) minsEl.textContent = "00";
          if (secsEl) secsEl.textContent = "00";
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
        if (minsEl) minsEl.textContent = String(mins).padStart(2, "0");
        if (secsEl) secsEl.textContent = String(secs).padStart(2, "0");
      }

      update();
      setInterval(update, 1000);
    });
  }

  /* ==========================================================================
     20. COMING SOON NOTIFY FORM
     ========================================================================== */
  function initNotifyForm() {
    const notifyForm = document.getElementById("comingSoonNotifyForm");
    if (!notifyForm) return;

    notifyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("notifyEmail");
      if (!emailInput) return;
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        emailInput.classList.add("is-invalid");
        showToast("Please enter a valid email address.", "bi-exclamation-triangle-fill");
        return;
      }

      emailInput.classList.remove("is-invalid");
      emailInput.value = "";
      const alertBox = document.getElementById("notifySuccessAlert");
      if (alertBox) {
        alertBox.classList.remove("d-none");
        alertBox.innerHTML = `
          <div class="alert alert-success d-flex align-items-center gap-2 mb-0 py-2">
            <i class="bi bi-bell-fill text-success fs-5"></i>
            <div class="small">You're on our VIP launch list! We will notify you the moment the Grand Royale Collection goes live.</div>
          </div>
        `;
      }
      showToast("VIP notification registered! (Demo Mode)", "bi-bell-fill");
    });
  }

  /* ==========================================================================
     20. CHECKOUT PAGE CONTROLLER
     ========================================================================== */
  function initCheckoutPage() {
    const checkoutItemsContainer = document.getElementById("checkoutCartItems");
    const checkoutForm = document.getElementById("checkoutOrderForm");
    if (!checkoutItemsContainer && !checkoutForm) return;

    let appliedDiscountPercent = 0;
    let shippingFee = 0;

    function renderCheckoutSummary() {
      if (!checkoutItemsContainer) return;

      if (!cart || cart.length === 0) {
        checkoutItemsContainer.innerHTML = `
          <div class="text-center py-4">
            <i class="bi bi-bag-x display-4 text-muted mb-2 d-block"></i>
            <h6 class="fw-bold mb-1">Your Shopping Bag is Empty</h6>
            <p class="text-muted small mb-3">Add your favorite jewellery &amp; bangles before checking out.</p>
            <a href="shop.html" class="btn btn-gold btn-sm"><i class="bi bi-shop me-1"></i> Browse Catalogue</a>
          </div>
        `;
        const subEl = document.getElementById("checkoutSubtotal");
        const totEl = document.getElementById("checkoutGrandTotal");
        const countBadge = document.getElementById("checkoutItemCount");
        const btnPlace = document.getElementById("btnPlaceOrderText");
        if (subEl) subEl.textContent = "₹0";
        if (totEl) totEl.textContent = "₹0";
        if (countBadge) countBadge.textContent = "0";
        if (btnPlace) btnPlace.textContent = "Place Order (₹0)";
        return;
      }

      const countBadge = document.getElementById("checkoutItemCount");
      if (countBadge) countBadge.textContent = cart.reduce((s, i) => s + i.qty, 0);

      checkoutItemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item-row">
          <img src="${item.image}" alt="${item.name}" class="checkout-item-img">
          <div class="flex-grow-1 min-w-0">
            <h6 class="mb-1 text-truncate fw-semibold" style="font-size: 0.92rem;">${item.name}</h6>
            <div class="small text-muted d-flex align-items-center gap-2">
              <span>Qty: <strong>${item.qty}</strong></span>
              ${item.size ? `<span class="badge bg-cream text-dark border">Size: ${item.size}</span>` : ""}
              ${item.color ? `<span class="badge bg-cream text-dark border">${item.color}</span>` : ""}
            </div>
          </div>
          <div class="text-end fw-bold" style="font-size: 0.95rem;">
            ₹${(item.price * item.qty).toLocaleString("en-IN")}
          </div>
        </div>
      `).join("");

      const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      const discountAmount = Math.round(subtotal * (appliedDiscountPercent / 100));
      const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

      const subEl = document.getElementById("checkoutSubtotal");
      const disEl = document.getElementById("checkoutDiscount");
      const disRow = document.getElementById("checkoutDiscountRow");
      const shipEl = document.getElementById("checkoutShipping");
      const totEl = document.getElementById("checkoutGrandTotal");
      const btnPlace = document.getElementById("btnPlaceOrderText");

      if (subEl) subEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
      if (disEl && disRow) {
        if (discountAmount > 0) {
          disRow.classList.remove("d-none");
          disEl.textContent = `-₹${discountAmount.toLocaleString("en-IN")}`;
        } else {
          disRow.classList.add("d-none");
        }
      }
      if (shipEl) {
        shipEl.textContent = shippingFee === 0 ? "FREE" : `₹${shippingFee.toLocaleString("en-IN")}`;
      }
      if (totEl) totEl.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
      if (btnPlace) btnPlace.textContent = `Place Order (₹${grandTotal.toLocaleString("en-IN")})`;
    }

    renderCheckoutSummary();

    // Listen to shipping method toggle
    document.querySelectorAll("input[name='shippingMethod']").forEach(radio => {
      radio.addEventListener("change", (e) => {
        shippingFee = e.target.value === "express" ? 149 : 0;
        renderCheckoutSummary();
      });
    });

    // Listen to coupon apply
    const btnApplyCoupon = document.getElementById("btnApplyCoupon");
    const couponInput = document.getElementById("checkoutCouponCode");
    const couponFeedback = document.getElementById("couponFeedback");

    if (btnApplyCoupon && couponInput) {
      btnApplyCoupon.addEventListener("click", () => {
        const code = couponInput.value.trim().toUpperCase();
        if (!code) {
          if (couponFeedback) {
            couponFeedback.className = "small text-danger mt-1";
            couponFeedback.textContent = "Please enter a promo code.";
          }
          return;
        }

        const validCoupons = {
          "FESTIVE20": 20,
          "ROYAL10": 10,
          "BANGLES15": 15,
          "BRIDAL25": 25,
          "FESTIVE15": 15
        };

        if (validCoupons[code]) {
          appliedDiscountPercent = validCoupons[code];
          if (couponFeedback) {
            couponFeedback.className = "small text-success mt-1 fw-bold";
            couponFeedback.innerHTML = `<i class="bi bi-check-circle-fill me-1"></i> Coupon "${code}" applied! ${appliedDiscountPercent}% OFF`;
          }
          renderCheckoutSummary();
          showToast(`Coupon <strong>${code}</strong> applied! ${appliedDiscountPercent}% OFF`, "bi-tag-fill");
        } else {
          appliedDiscountPercent = 0;
          if (couponFeedback) {
            couponFeedback.className = "small text-danger mt-1";
            couponFeedback.textContent = `Invalid code "${code}". Try FESTIVE20 or ROYAL10.`;
          }
          renderCheckoutSummary();
        }
      });
    }

    // Payment method radio selection styling
    document.querySelectorAll("input[name='paymentMethod']").forEach(radio => {
      radio.addEventListener("change", () => {
        document.querySelectorAll(".payment-method-box").forEach(box => box.classList.remove("selected"));
        const parent = radio.closest(".payment-method-box");
        if (parent) parent.classList.add("selected");
      });
    });

    // Handle Form Submission
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!cart || cart.length === 0) {
          showToast("Your cart is empty! Add products before checking out.", "bi-bag-x");
          return;
        }

        // Validate Phone (10 digits)
        const phoneInput = document.getElementById("checkoutPhone");
        if (phoneInput) {
          const rawPhone = phoneInput.value.replace(/[^0-9]/g, "");
          if (rawPhone.length < 10) {
            phoneInput.classList.add("is-invalid");
            phoneInput.focus();
            showToast("Please enter a valid 10-digit mobile number.", "bi-exclamation-triangle");
            return;
          } else {
            phoneInput.classList.remove("is-invalid");
          }
        }

        // Validate PIN Code (6 digits)
        const pinInput = document.getElementById("checkoutPin");
        if (pinInput) {
          const rawPin = pinInput.value.replace(/[^0-9]/g, "");
          if (rawPin.length !== 6) {
            pinInput.classList.add("is-invalid");
            pinInput.focus();
            showToast("Please enter a valid 6-digit Indian PIN Code.", "bi-exclamation-triangle");
            return;
          } else {
            pinInput.classList.remove("is-invalid");
          }
        }

        // Generate Order ID & display confirmation modal
        const randomNum = Math.floor(10000 + Math.random() * 90000);
        const orderId = `MJB-2026-${randomNum}`;
        const nameVal = document.getElementById("checkoutName") ? document.getElementById("checkoutName").value : "Valued Customer";
        const emailVal = document.getElementById("checkoutEmail") ? document.getElementById("checkoutEmail").value : "";

        const orderIdEl = document.getElementById("orderConfirmedId");
        const orderNameEl = document.getElementById("orderConfirmedName");
        const orderEmailEl = document.getElementById("orderConfirmedEmail");
        if (orderIdEl) orderIdEl.textContent = orderId;
        if (orderNameEl) orderNameEl.textContent = nameVal;
        if (orderEmailEl) orderEmailEl.textContent = emailVal;

        const successModalEl = document.getElementById("orderSuccessModal");
        if (successModalEl && window.bootstrap) {
          const bsModal = new bootstrap.Modal(successModalEl);
          bsModal.show();
        }

        // Reset cart
        cart = [];
        saveCart();
        renderCheckoutSummary();
      });
    }
  }

  /* ==========================================================================
     20b. NAVBAR DROPDOWN ENHANCEMENT
     ========================================================================== */
  function initNavbarDropdowns() {
    document.querySelectorAll(".navbar-nav .nav-item.dropdown").forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      if (!toggle || !menu) return;

      toggle.setAttribute("role", "button");

      // Mobile & Desktop Click Handler
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = menu.classList.contains("show");

        // Close all other open dropdowns
        document.querySelectorAll(".navbar-nav .dropdown-menu.show").forEach((m) => {
          if (m !== menu) m.classList.remove("show");
        });
        document.querySelectorAll(".navbar-nav .dropdown-toggle.show").forEach((t) => {
          if (t !== toggle) {
            t.classList.remove("show");
            t.setAttribute("aria-expanded", "false");
          }
        });
        document.querySelectorAll(".navbar-nav .nav-item.dropdown.show").forEach((d) => {
          if (d !== dropdown) d.classList.remove("show");
        });

        // Toggle state
        if (isOpen) {
          menu.classList.remove("show");
          toggle.classList.remove("show");
          dropdown.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        } else {
          menu.classList.add("show");
          toggle.classList.add("show");
          dropdown.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });

    // Close any open dropdown menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar-nav .nav-item.dropdown")) {
        document.querySelectorAll(".navbar-nav .dropdown-menu.show").forEach((m) => {
          m.classList.remove("show");
        });
        document.querySelectorAll(".navbar-nav .dropdown-toggle.show").forEach((t) => {
          t.classList.remove("show");
          t.setAttribute("aria-expanded", "false");
        });
        document.querySelectorAll(".navbar-nav .nav-item.dropdown.show").forEach((d) => {
          d.classList.remove("show");
        });
      }
    });

    // Close dropdown when mobile hamburger collapse hides
    const navCollapse = document.getElementById("navbarContent");
    if (navCollapse) {
      navCollapse.addEventListener("hidden.bs.collapse", () => {
        document.querySelectorAll(".navbar-nav .dropdown-menu.show").forEach((m) => {
          m.classList.remove("show");
        });
        document.querySelectorAll(".navbar-nav .dropdown-toggle.show").forEach((t) => {
          t.classList.remove("show");
          t.setAttribute("aria-expanded", "false");
        });
        document.querySelectorAll(".navbar-nav .nav-item.dropdown.show").forEach((d) => {
          d.classList.remove("show");
        });
      });
    }
  }

  /* ==========================================================================
     21. INITIALIZATION ON DOM CONTENT LOADED
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initRTL();
    initStickyNavbar();
    initNavbarDropdowns();
    updateCartBadges();
    updateWishlistBadges();
    renderCartDrawer();
    initCouponCopy();
    initContactForm();
    initNewsletter();
    initCheckoutTrigger();
    initCountdowns();
    initNotifyForm();

    // Page-specific initializers
    initShopPage();
    initProductDetailsPage();
    initBlogPage();
    initBlogDetailsPage();
    initCheckoutPage();
  });

  // Global exports for inline button handlers
  window.MayuriStore = {
    addToCart,
    updateCartQty,
    removeCartItem,
    clearCart,
    toggleWishlist,
    openQuickView,
    showToast
  };
})();

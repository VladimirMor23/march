// script.js

"use strict";

// Меняйте здесь картинки (путь), вес (кг) и цену (₽) — всё сразу отобразится в каталоге и корзине.
// Чтобы поставить свою картинку — просто поменяй путь в массиве товаров.
const products = [
  {
    id: 1,
    name: "Ведёрко мелких раков",
    image: "images/crayfish-small-bucket.jpg",
    weight: 1.1,
    price: 2000
  },
  {
    id: 2,
    name: "Ведёрко средних раков",
    image: "images/crayfish-medium-bucket.jpg",
    weight: 1.5,
    price: 3000
  },
  {
    id: 3,
    name: "Ведёрко больших раков",
    image: "images/crayfish-large-bucket.jpg",
    weight: 2,
    price: 4000
  },
  {
    id: 4,
    name: "Раки классические",
    image: "images/crayfish-classic.jpg",
    weight: 1,
    price: 1900
  },
  {
    id: 5,
    name: "Раки с чесноком",
    image: "images/crayfish-garlic.jpg",
    weight: 1,
    price: 2200
  },
  {
    id: 6,
    name: "Раки с лимоном",
    image: "images/crayfish-lemon.jpg",
    weight: 1,
    price: 2200
  },
  {
    id: 7,
    name: "Раки острые",
    image: "images/crayfish-spicy.jpg",
    weight: 1,
    price: 2300
  },
  {
    id: 8,
    name: "Раки для большой компании",
    image: "images/crayfish-party.jpg",
    weight: 3,
    price: 5700
  }
];

const deliveryCity = "Ленинск-Кузнецкий";
const paidDeliveryPrice = 350;

const cart = new Map();

const elements = {
  productsGrid: document.querySelector("#products-grid"),
  cartToggle: document.querySelector("#cart-toggle"),
  cartSection: document.querySelector("#cart-section"),
  closeCart: document.querySelector("#close-cart"),
  cartItems: document.querySelector("#cart-items"),
  cartCount: document.querySelector("#cart-count"),
  cartTotal: document.querySelector("#cart-total"),
  cartWeight: document.querySelector("#cart-weight"),
  cartWeightDetails: document.querySelector("#cart-weight-details"),
  cartTotalDetails: document.querySelector("#cart-total-details"),
  deliveryStatus: document.querySelector("#delivery-status"),
  orderForm: document.querySelector("#order-form"),
  customerAddress: document.querySelector("#customer-address"),
  addressStatus: document.querySelector("#address-status")
};

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

function formatWeight(value) {
  return `${Number(value.toFixed(2))} кг`;
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^а-яa-z0-9]/g, "");
}

function isDeliveryAddressValid(address) {
  const normalizedAddress = normalizeText(address);
  const normalizedCity = normalizeText(deliveryCity);

  return normalizedAddress.includes(normalizedCity);
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function getCartCount() {
  let count = 0;

  cart.forEach((quantity) => {
    count += quantity;
  });

  return count;
}

function getCartTotal() {
  let total = 0;

  cart.forEach((quantity, productId) => {
    const product = getProduct(productId);

    if (product) {
      total += product.price * quantity;
    }
  });

  return total;
}

function getCartWeight() {
  let weight = 0;

  cart.forEach((quantity, productId) => {
    const product = getProduct(productId);

    if (product) {
      weight += product.weight * quantity;
    }
  });

  return Number(weight.toFixed(2));
}

function setProductQuantity(productId, quantity) {
  const safeQuantity = Math.max(0, Number(quantity) || 0);

  if (safeQuantity === 0) {
    cart.delete(productId);
  } else {
    cart.set(productId, safeQuantity);
  }

  renderProducts();
  renderCart();
}

function changeProductQuantity(productId, change) {
  const currentQuantity = cart.get(productId) || 0;
  setProductQuantity(productId, currentQuantity + change);
}

function renderProducts() {
  if (!elements.productsGrid) {
    return;
  }

  elements.productsGrid.innerHTML = products
    .map((product) => {
      const quantity = cart.get(product.id) || 0;

      return `
        <article class="product-card">
          <div class="product-card__sticker" aria-hidden="true">🦞</div>

          <img
            class="product-card__image"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/600x450/5bc8c0/343b43?text=🦞+Раки';"
          />

          <div class="product-card__content">
            <h3>${product.name}</h3>

            <div class="product-card__meta">
              <span>${formatWeight(product.weight)}</span>
              <strong class="product-card__price">
                ${formatPrice(product.price)}
              </strong>
            </div>

            <div class="product-card__actions">
              <div class="quantity-control" aria-label="Количество">
                <button
                  class="quantity-button"
                  type="button"
                  data-action="decrease"
                  data-product-id="${product.id}"
                  aria-label="Уменьшить количество"
                >
                  −
                </button>

                <span class="quantity-value">${quantity}</span>

                <button
                  class="quantity-button"
                  type="button"
                  data-action="increase"
                  data-product-id="${product.id}"
                  aria-label="Увеличить количество"
                >
                  +
                </button>
              </div>

              <button
                class="add-button"
                type="button"
                data-action="add"
                data-product-id="${product.id}"
              >
                ${quantity > 0 ? "Добавить ещё" : "В корзину"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  const count = getCartCount();
  const total = getCartTotal();
  const weight = getCartWeight();

  elements.cartCount.textContent = count;
  elements.cartTotal.textContent = formatPrice(total);
  elements.cartWeight.textContent = formatWeight(weight);
  elements.cartWeightDetails.textContent = formatWeight(weight);
  elements.cartTotalDetails.textContent = formatPrice(total);

  if (cart.size === 0) {
    elements.cartItems.innerHTML = `
      <p class="empty-cart">
        <span aria-hidden="true">🦞</span>
        В корзине пока пусто
      </p>
    `;
  } else {
    elements.cartItems.innerHTML = Array.from(cart.entries())
      .map(([productId, quantity]) => {
        const product = getProduct(productId);

        if (!product) {
          return "";
        }

        return `
          <div class="cart-item">
            <img
              class="cart-item__image"
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/160x120/5bc8c0/343b43?text=🦞';"
            />

            <div class="cart-item__info">
              <strong>${product.name}</strong>
              <span>${formatWeight(product.weight)} × ${quantity}</span>
            </div>

            <strong class="cart-item__price">
              ${formatPrice(product.price * quantity)}
            </strong>

            <div class="cart-quantity">
              <button
                class="cart-quantity-button"
                type="button"
                data-cart-action="decrease"
                data-product-id="${product.id}"
                aria-label="Уменьшить количество"
              >
                −
              </button>

              <strong>${quantity}</strong>

              <button
                class="cart-quantity-button"
                type="button"
                data-cart-action="increase"
                data-product-id="${product.id}"
                aria-label="Увеличить количество"
              >
                +
              </button>
            </div>

            <button
              class="remove-item"
              type="button"
              data-cart-action="remove"
              data-product-id="${product.id}"
              aria-label="Удалить ${product.name}"
            >
              ×
            </button>
          </div>
        `;
      })
      .join("");
  }

  updateDeliveryStatus(weight);
}

function updateDeliveryStatus(weight) {
  elements.deliveryStatus.classList.remove(
    "delivery-status--free",
    "delivery-status--paid"
  );

  // Доставка теперь бесплатная всегда по г. Ленинск-Кузнецкий.
  elements.deliveryStatus.classList.add("delivery-status--free");
  elements.deliveryStatus.textContent =
    "🦞 Бесплатная доставка по г. Ленинск-Кузнецкий";
}

function setCartVisibility(isVisible, shouldScroll = false) {
  elements.cartSection.hidden = !isVisible;
  elements.cartToggle.setAttribute("aria-expanded", String(isVisible));
  elements.cartToggle.classList.toggle("is-open", isVisible);

  if (shouldScroll && isVisible) {
    elements.cartSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function updateAddressStatus() {
  const address = elements.customerAddress.value.trim();

  elements.customerAddress.classList.remove(
    "address-valid",
    "address-invalid"
  );
  elements.addressStatus.classList.remove("valid", "invalid");

  if (!address) {
    elements.addressStatus.textContent = "Введите адрес с городом";
    return false;
  }

  const isValid = isDeliveryAddressValid(address);

  if (isValid) {
    elements.customerAddress.classList.add("address-valid");
    elements.addressStatus.classList.add("valid");
    elements.addressStatus.textContent = "Доставка возможна";
  } else {
    elements.customerAddress.classList.add("address-invalid");
    elements.addressStatus.classList.add("invalid");
    elements.addressStatus.textContent =
      "В этот город доставка не осуществляется";
  }

  return isValid;
}

function getOrderItemsText() {
  return Array.from(cart.entries())
    .map(([productId, quantity]) => {
      const product = getProduct(productId);

      if (!product) {
        return "";
      }

      return `${product.name} — ${quantity} шт.`;
    })
    .filter(Boolean)
    .join("\n");
}

function handleOrderSubmit(event) {
  event.preventDefault();

  const formData = new FormData(elements.orderForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const comment = String(formData.get("comment") || "").trim();
  const addressIsValid = updateAddressStatus();

  if (!name || !phone || !address) {
    alert("Пожалуйста, заполните имя, телефон и адрес.");
    return;
  }

  if (!addressIsValid) {
    alert("Укажите адрес в Ленинске-Кузнецком.");
    return;
  }

  if (cart.size === 0) {
    alert("Добавьте хотя бы один товар в корзину.");
    return;
  }

  const total = getCartTotal();
  const weight = getCartWeight();

  const orderMessage = [
    "Заказ принят!",
    "",
    `Клиент: ${name}`,
    `Телефон: ${phone}`,
    `Адрес: ${address}`,
    `Комментарий: ${comment || "нет"}`,
    "",
    "Состав заказа:",
    getOrderItemsText(),
    "",
    `Общий вес: ${formatWeight(weight)}`,
    `Сумма товаров: ${formatPrice(total)}`,
    "Доставка: бесплатно по г. Ленинск-Кузнецкий"
  ].join("\n");

  alert(orderMessage);

  elements.orderForm.reset();
  cart.clear();
  updateAddressStatus();
  renderProducts();
  renderCart();
  setCartVisibility(false);
}

elements.productsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.productId);
  const action = button.dataset.action;

  if (action === "increase" || action === "add") {
    changeProductQuantity(productId, 1);
  }

  if (action === "decrease") {
    changeProductQuantity(productId, -1);
  }
});

elements.cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.productId);
  const action = button.dataset.cartAction;

  if (action === "increase") {
    changeProductQuantity(productId, 1);
  }

  if (action === "decrease") {
    changeProductQuantity(productId, -1);
  }

  if (action === "remove") {
    setProductQuantity(productId, 0);
  }
});

elements.cartToggle.addEventListener("click", () => {
  const isVisible = elements.cartSection.hidden;
  setCartVisibility(isVisible, isVisible);
});

elements.closeCart.addEventListener("click", () => {
  setCartVisibility(false);
});

elements.customerAddress.addEventListener("input", updateAddressStatus);
elements.orderForm.addEventListener("submit", handleOrderSubmit);

document.querySelectorAll('a[href="#order-form"]').forEach((link) => {
  link.addEventListener("click", () => {
    setCartVisibility(false);
  });
});

renderProducts();
renderCart();
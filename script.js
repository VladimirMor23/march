// Файл: script.js

"use strict";

/*
  Меняйте здесь картинки, вес, цену и дополнительные сведения —
  всё автоматически отобразится в каталоге и корзине.
*/

const semiProducts = [
  {
    name: "Курочка копчёная (половинки)",
    image: "images/chicken.png",
    weight: 0.95,
    price: 550,
    unit: "кг",
    details: "половинки, вес 0,8–1,1 кг"
  },
  {
    name: "Фарш мясной (нежирный)",
    image: "images/farsh.png",
    weight: 1,
    price: 550,
    unit: "кг",
    details: "свежий мясной фарш"
  },
  {
    name: "Рагу говяжье",
    image: "images/ragu.jpeg",
    weight: 1,
    price: 750,
    unit: "кг",
    details: "мясное рагу"
  },
  {
    name: "Печень говяжья",
    image: "images/liver.jpeg",
    weight: 1,
    price: 450,
    unit: "кг",
    details: "говяжья печень"
  },
  {
    name: "Сальце солёное в рассоле",
    image: "images/salo.jpg",
    weight: 2.5,
    price: 1400,
    unit: "кг",
    details: "в 3-литровой банке"
  },
  {
    name: "Беляши жареные",
    image: "images/belyashi.jpg",
    weight: 1,
    price: 560,
    unit: "кг",
    details: "7 шт./кг, 1 шт. — 80 руб."
  },
  {
    name: "Сосиски в тесте",
    image: "images/sausages-dough.jpg",
    weight: 1,
    price: 560,
    unit: "кг",
    details: "8–9 шт./кг, 1 шт. — 70 руб."
  },
  {
    name: "Пирожки с капустой",
    image: "images/pies.jpg",
    weight: 1,
    price: 460,
    unit: "кг",
    details: "10 шт./кг, 1 шт. — 46 руб."
  },
  {
    name: "Блины жареные, фаршированные мясом",
    image: "images/blini.jpg",
    weight: 1,
    price: 440,
    unit: "кг",
    details: "12 шт./кг"
  },
  {
    name: "Чебупели жареные с мясом",
    image: "images/chebupelis.jpg",
    weight: 0.5,
    price: 350,
    unit: "кг",
    details: "упаковка 0,5 кг"
  },
  {
    name: "Каша перловая с мясом",
    image: "images/perlovkas.jpeg",
    weight: 0.5,
    price: 250,
    unit: "кг",
    details: "упаковка 0,5 кг"
  },
  {
    name: "Каша гречневая с мясом",
    image: "images/grechka.jpg",
    weight: 0.5,
    price: 250,
    unit: "кг",
    details: "упаковка 0,5 кг"
  },
  {
    name: "Сардельки по-домашнему",
    image: "images/sardelki.jpg",
    weight: 1,
    price: 750,
    unit: "кг",
    details: "домашний рецепт"
  },
  {
    name: "Свиной окорок горячего копчения",
    image: "images/okorock.jpg",
    weight: 1,
    price: 680,
    unit: "кг",
    details: "горячее копчение"
  },
  {
    name: "Рёбрышки маринованные для жарки",
    image: "images/ribs-marinated.jpg",
    weight: 1,
    price: 550,
    unit: "кг",
    details: "готовы для жарки"
  },
  {
    name: "Манты из говядины",
    image: "images/manti-beef.jpeg",
    weight: 1,
    price: 550,
    unit: "кг",
    details: "с говядиной"
  },
  {
    name: "Рёбрышки копчёные",
    image: "images/ribs-smoked.png",
    weight: 1,
    price: 650,
    unit: "кг",
    details: "копчёные"
  },
  {
    name: "Пельмени «Любительские»",
    image: "images/pelmeni-lub.jpg",
    weight: 1,
    price: 550,
    unit: "кг",
    details: "говядина 80% + свинина 10% + лук 10%"
  },
  {
    name: "Грудинка копчёная",
    image: "images/ham.jpg",
    weight: 1,
    price: 700,
    unit: "кг",
    details: "копчёная грудинка"
  },
  {
    name: "Шашлык маринованный из свиной шейки",
    image: "images/shashlik.jpg",
    weight: 1,
    price: 600,
    unit: "кг",
    details: "в банке"
  },
  {
    name: "Купаты для жарки",
    image: "images/kupaty.jpg",
    weight: 1,
    price: 460,
    unit: "кг",
    details: "говядина + свинина"
  },
  {
    name: "Пельмени",
    image: "images/pelmeni.png",
    weight: 1,
    price: 410,
    unit: "кг",
    details: "говядина + свинина"
  },
  {
    name: "Пельмени «Крестьянские»",
    image: "images/pelmeni-krest.jpg",
    weight: 1,
    price: 380,
    unit: "кг",
    details: "фарш + капуста + лук"
  },
  {
    name: "Вареники",
    image: "images/vareniki.jpg",
    weight: 1,
    price: 310,
    unit: "кг",
    details: "картошка + шкварки + лук"
  },
  {
    name: "Манты",
    image: "images/manti-beef.jpeg",
    weight: 1,
    price: 460,
    unit: "кг",
    details: "говядина + свинина"
  },
  {
    name: "Котлеты",
    image: "images/cutlets.jpg",
    weight: 1,
    price: 460,
    unit: "кг",
    details: "говядина + свинина"
  },
  {
    name: "Тефтели",
    image: "images/tefteli.jpeg",
    weight: 1,
    price: 410,
    unit: "кг",
    details: "говядина + свинина"
  },
  {
    name: "Ленивые голубцы",
    image: "images/lazy-cabbage-rolls.jpeg",
    weight: 1,
    price: 350,
    unit: "кг",
    details: "говядина + свинина + капуста"
  },
  {
    name: "Перец фаршированный",
    image: "images/stuffep.jpg",
    weight: 1,
    price: 420,
    unit: "кг",
    details: "свинина + говядина"
  },
  {
    name: "Сосиски по-домашнему",
    image: "images/homemade-saus.jpg",
    weight: 1,
    price: 750,
    unit: "кг",
    details: "домашний рецепт"
  },
  {
    name: "Колбаса по-домашнему",
    image: "images/homemade-sausage.jpg",
    weight: 0.5,
    price: 450,
    unit: "кг",
    details: "мясная, упаковка 0,5 кг"
  },
  {
    name: "Голубцы",
    image: "images/olubecs.jpg",
    weight: 1,
    price: 440,
    unit: "кг",
    details: "свинина + говядина"
  },
  {
    name: "Чебуреки",
    image: "images/chebupeli.jpg",
    weight: 1,
    price: 440,
    unit: "кг",
    details: "свинина + говядина"
  }
];

const meatPlaceholders = [
  {
    name: "ГОВЯДИНА МЯСНЫМИ НАБОРАМИ 11,5 – 13 кг — 7 400 – 8 500 ₽",
    image: "images/nabor.jpeg",
    price: 0,
    details: "Шейка на кости (~2 кг)\n Окорок блином (~5 кг) \n Ляжка с косточкой (~2,5 кг) \n Рёбрышки с мясом (~2 кг)"
  },
  {
    name: "СВИНИНА ЧЕТВЕРТЯМИ",
    image: "images/svininad.jpeg",
    price: 0,
    details: "Передняя четверть свинины 24–26 кг — 360 ₽/кг: шейка, лопатка, рёбрышки, сальце с мясными прослойками. \n Задняя четверть свинины 22–24 кг — 370 ₽/кг: с окороком. \n Полтуши свинины 47–52 кг — 360 ₽/кг: передняя и задняя четверти, полный набор отрубов"
  },
  {
    name: "Набор из свинины, 12–13 кг, 6200–6300 ₽",
    image: "images/naborsvin.jpeg",
    price: 0,
    details: "Шейка (чистая мякоть) ~2,5 кг \n Окорок (без сала и шкуры) ~3,5 кг \n Балычок на кости (стейками, без сала и шкуры) ~2,5 кг \n Рёбрышки ~1,5 кг \n Грудинка с мясными прослойками (на засолку/запекание) 1 кг \n Мясное рагу (на суп/тушение) 1 кг."
  },
  {
    name: "Баранина романовской породы",
    image: "images/naborbor.jpeg",
    price: 0,
    details: " Вся тушка (15–25 кг) — 700 ₽/кг. \n Полтушки (8–13 кг) — 750 ₽/кг."
  },
  {
    name: "Говядина частями",
    image: "images/govid.jpeg",
    price: 0,
    details: "Передняя ляжка (19–22 кг) — 550 ₽/кг, много мякоти.\n Шейка на кости (14–16 кг) — 570 ₽/кг, нежное мясо.\n Мясная часть задней ляжки окорока (20–24 кг) — 580 ₽/кг, очень много мякоти.\n Карбонат на кости (12–14 кг) — 550 ₽/кг, подойдёт для стейков.\n Рёбрышки с мясом (9–11 кг) — 500 ₽/кг."
  },

];


const cart = [];
const FREE_DELIVERY_WEIGHT = 8;

const meatGrid = document.querySelector("#meat-grid");
const semiProductsGrid = document.querySelector("#semi-products-grid");
const cartSection = document.querySelector("#cart-section");
const cartContent = document.querySelector("#cart-content");
const cartToggle = document.querySelector("#cart-toggle");
const clearCartButton = document.querySelector("#clear-cart");
const orderForm = document.querySelector("#order-form");

const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const cartWeight = document.querySelector("#cart-weight");

function formatPrice(value) {
  return `${Math.round(value).toLocaleString("ru-RU")} ₽`;
}

function formatWeight(value) {
  const rounded = Math.round(value * 100) / 100;
  return `${rounded.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })} кг`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProductWeight(product) {
  return Number.isFinite(product.weight) && product.weight > 0
    ? product.weight
    : 1;
}

function getCartItemWeight(item) {
  if (item.isPlaceholder || !Number.isFinite(item.weightPerUnit)) {
    return 0;
  }

  return item.qty * item.weightPerUnit;
}

function getCartItemTotal(item) {
  if (item.isPlaceholder || !Number.isFinite(item.price)) {
    return 0;
  }

  return item.qty * item.price;
}

function getCartTotals() {
  return cart.reduce(
    (totals, item) => {
      totals.count += item.qty;
      totals.total += getCartItemTotal(item);
      totals.weight += getCartItemWeight(item);
      return totals;
    },
    {
      count: 0,
      total: 0,
      weight: 0
    }
  );
}

function createPlaceholderCard(item, index) {
  // item теперь объект, поэтому берем свойства item.name, item.price и т.д.
  return `
    <article class="product-card placeholder-card">
      <div class="product-image placeholder-image"> <img
          src="${escapeHtml(item.image)}"
          alt="${escapeHtml(item.name)}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');"
        ></div>
      <div class="product-card-body">
        <h3>${escapeHtml(item.name)}</h3>
        <p class="product-details">
          ${escapeHtml(item.details)}
        </p>
        <div class="product-meta">
          <span class="product-weight">Точный вес и сумма — при сборке заказа. </span>
          <strong class="product-price">${formatPrice(item.price)}</strong>
        </div>
        <button
          class="button button-primary"
          type="button"
          data-action="add-placeholder"
          data-name="${escapeHtml(item.name)}"
        >
          В корзину
        </button>
      </div>
    </article>
  `;
}


function createProductCard(product, index) {
  const productId = `semi-${index}`;
  const displayWeight = getProductWeight(product);

  return `
    <article class="product-card">
   <div class="product-image">
  <img
    src="${escapeHtml(product.image)}"
    alt="${escapeHtml(product.name)}"
    loading="lazy"
    onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');"
  >
</div>


      <div class="product-card-body">
        <h3>${escapeHtml(product.name)}</h3>

        <p class="product-details">
          ${escapeHtml(product.details || "Домашний продукт")}
        </p>

        <div class="product-meta">
          <span class="product-weight">
            ${formatWeight(displayWeight)}
          </span>
          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>
        </div>

        <div class="quantity-control">
          <button
            class="quantity-button"
            type="button"
            data-action="product-minus"
            data-product-id="${productId}"
            aria-label="Уменьшить количество"
          >
            −
          </button>

          <span class="quantity-value" id="quantity-${productId}">0</span>

          <button
            class="quantity-button"
            type="button"
            data-action="product-plus"
            data-product-id="${productId}"
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  meatGrid.innerHTML = meatPlaceholders
    .map(createPlaceholderCard)
    .join("");

  semiProductsGrid.innerHTML = semiProducts
    .map(createProductCard)
    .join("");

  updateProductQuantities();
}

function findCartItem(id) {
  return cart.find((item) => item.id === id);
}

function addItem(itemData) {
  const existingItem = findCartItem(itemData.id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      ...itemData,
      qty: 1
    });
  }

  renderCart();
}

function increaseItem(id) {
  const item = findCartItem(id);

  if (!item) {
    return;
  }

  item.qty += 1;
  renderCart();
}

function decreaseItem(id) {
  const item = findCartItem(id);

  if (!item) {
    return;
  }

  item.qty -= 1;

  if (item.qty <= 0) {
    removeItem(id);
    return;
  }

  renderCart();
}

function removeItem(id) {
  const itemIndex = cart.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return;
  }

  cart.splice(itemIndex, 1);
  renderCart();
}

function updateProductQuantities() {
  semiProducts.forEach((product, index) => {
    const element = document.querySelector(`#quantity-semi-${index}`);

    if (!element) {
      return;
    }

    const item = findCartItem(`semi-${index}`);
    element.textContent = item ? item.qty : "0";
  });
}

function renderCart() {
  const totals = getCartTotals();

  cartCount.textContent = totals.count;
  cartTotal.textContent = formatPrice(totals.total);
  cartWeight.textContent = formatWeight(totals.weight);

  cartSection.hidden = false;

  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        🛒 Корзина пока пуста. Добавьте товары из каталога.
      </div>
    `;

    updateProductQuantities();
    return;
  }

  const cartItemsHtml = cart
    .map((item) => {
      const itemWeight = getCartItemWeight(item);
      const itemTotal = getCartItemTotal(item);

      const weightText = item.isPlaceholder
        ? "Вес и сумма уточняются"
        : `${formatWeight(itemWeight)} — ${formatPrice(itemTotal)}`;

      return `
        <article class="cart-item">
          <div class="cart-item-info">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${weightText}</span>
          </div>

          <div class="cart-quantity">
            <button
              class="quantity-button"
              type="button"
              data-action="cart-minus"
              data-id="${escapeHtml(item.id)}"
              aria-label="Уменьшить количество"
            >
              −
            </button>

            <span class="cart-quantity-value">${item.qty}</span>

            <button
              class="quantity-button"
              type="button"
              data-action="cart-plus"
              data-id="${escapeHtml(item.id)}"
              aria-label="Увеличить количество"
            >
              +
            </button>
          </div>

          <strong class="cart-item-total">
            ${item.isPlaceholder ? "Уточняется" : formatPrice(itemTotal)}
          </strong>

          <button
            class="cart-remove"
            type="button"
            data-action="cart-remove"
            data-id="${escapeHtml(item.id)}"
          >
            Удалить
          </button>
        </article>
      `;
    })
    .join("");

  const isFreeDelivery = totals.weight >= FREE_DELIVERY_WEIGHT;
  const progressValue = Math.min(
    (totals.weight / FREE_DELIVERY_WEIGHT) * 100,
    100
  );

  const deliveryText = isFreeDelivery
    ? "Бесплатная доставка активирована!"
    : `Добавьте ещё ${formatWeight(FREE_DELIVERY_WEIGHT - totals.weight)} для бесплатной доставки`;

  const deliveryCostText = isFreeDelivery
    ? "Бесплатно"
    : "Рассчитывается после подтверждения";

  cartContent.innerHTML = `
    <div class="cart-list">
      ${cartItemsHtml}
    </div>

    <div class="cart-summary">
      <div class="cart-summary-main">
        <div class="cart-total-line">
          <span>Товаров:</span>
          <strong>${totals.count}</strong>
        </div>

        <div class="cart-total-line">
          <span>Общий вес:</span>
          <strong>${formatWeight(totals.weight)}</strong>
        </div>

        <div class="cart-total-line">
          <span>Сумма товаров:</span>
          <strong>${formatPrice(totals.total)}</strong>
        </div>

        <div class="cart-total-line">
          <span>Доставка:</span>
          <strong class="${isFreeDelivery ? "delivery-free" : "delivery-cost"}">
            ${deliveryCostText}
          </strong>
        </div>

        <div class="cart-total-line cart-total-line-final">
          <span>Итого:</span>
          <strong>${formatPrice(totals.total)}</strong>
        </div>
      </div>

      <div class="free-delivery-box ${isFreeDelivery ? "is-free" : ""}">
        <div class="free-delivery-icon">
          ${isFreeDelivery ? "🎉" : "🚚"}
        </div>

        <strong>${deliveryText}</strong>

        <p>
          Бесплатная доставка — при весе заказа больше 8 кг.
        </p>

        <div class="delivery-progress" aria-label="Прогресс бесплатной доставки">
          <span style="width: ${progressValue}%"></span>
        </div>
      </div>
    </div>
  `;

  updateProductQuantities();
}

function getOrderText(formData) {
  const totals = getCartTotals();
  const isFreeDelivery = totals.weight > FREE_DELIVERY_WEIGHT;

  const itemsText = cart
    .map((item) => {
      const itemWeight = getCartItemWeight(item);
      const itemTotal = getCartItemTotal(item);

      if (item.isPlaceholder) {
        return `— ${item.name}: ${item.qty} шт.; вес и сумма уточняются`;
      }

      return `— ${item.name}: ${item.qty} шт., ${formatWeight(itemWeight)}, ${formatPrice(itemTotal)}`;
    })
    .join("\n");

  return [
    "Новый заказ",
    "",
    `Имя: ${formData.get("name")}`,
    `Телефон: ${formData.get("phone")}`,
    `Город доставки: ${formData.get("city")}`,
    `Адрес доставки: ${formData.get("address") || "не указан"}`,
    `Комментарий: ${formData.get("comment")?.trim() ? formData.get("comment") : "нет"}`,
    "",
    "Состав заказа:",
    itemsText || "Корзина пуста",
    "",
    `Общий вес: ${formatWeight(totals.weight)}`,
    `Сумма товаров: ${formatPrice(totals.total)}`,
    `Доставка: ${isFreeDelivery ? "БЕСПЛАТНО" : "ПЛАТНО"}`,
    `Итого за полуфабрикаты: ${formatPrice(totals.total)} \nЦена НАБОРА с МЯСОМ-напишите клиенту ${formData.get("phone")}`
  ].join("\n");
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");

  if (!actionElement) {
    return;
  }

  const action = actionElement.dataset.action;

  if (action === "add-placeholder") {
    const name = actionElement.dataset.name;

   
  // 1. Сохраняем исходный текст кнопки прямо здесь, ДО любых изменений
  const originalBtnText = actionElement.textContent;

  // 2. Добавляем товар в корзину (эта функция не должна трогать кнопку)
  addItem({
    id: `placeholder-${name}`,
    name: "МЯСНОЙ НАБОР - " + name,
    price: null,
    weightPerUnit: null,
    unit: "кг",
    isPlaceholder: true
  });
     // Меняем кнопку: текст и блокировка
  actionElement.textContent = "Добавлено!";
  actionElement.disabled = true;
  actionElement.style.opacity = "0.7";

  // Возвращаем кнопку в исходное состояние через 2 секунды
  setTimeout(() => {
    actionElement.textContent = originalBtnText;
    actionElement.disabled = false;
    actionElement.style.opacity = "1";
  }, 2000);

    return;
  }

  if (action === "product-plus") {
    const productIndex = Number(
      actionElement.dataset.productId.replace("semi-", "")
    );
    const product = semiProducts[productIndex];

    if (!product) {
      return;
    }

    addItem({
      id: `semi-${productIndex}`,
      name: product.name,
      price: product.price,
      weightPerUnit: getProductWeight(product),
      unit: product.unit,
      isPlaceholder: false
    });

    return;
  }

  if (action === "product-minus") {
    decreaseItem(actionElement.dataset.productId);
    return;
  }

  if (action === "cart-plus") {
    increaseItem(actionElement.dataset.id);
    return;
  }

  if (action === "cart-minus") {
    decreaseItem(actionElement.dataset.id);
    return;
  }

  if (action === "cart-remove") {
    removeItem(actionElement.dataset.id);
  }
});

cartToggle.addEventListener("click", () => {
  cartSection.hidden = false;
  cartSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

clearCartButton.addEventListener("click", () => {
  cart.length = 0;
  renderCart();
});
const btnMaxAction = document.getElementById('btn-max-action');
if (btnMaxAction) {
  btnMaxAction.addEventListener('click', sendToMax);
}


orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // ПРОВЕРКА: если корзина пуста — останавливаем отправку
  if (cart.length === 0) {
    const orderStatus = document.getElementById('order-status');
    if (orderStatus) {
      orderStatus.style.display = 'block';
      orderStatus.textContent = '❌ Сначала добавьте товары в корзину!';
      orderStatus.style.color = '#d9534f';
    }
    return; // выходим из функции — дальше ничего не делаем
  }
   const orderStatus = document.getElementById('order-status');
  if (orderStatus) {
    orderStatus.style.display = 'block';
    orderStatus.textContent = '⏳ Отправка ждите…';
    orderStatus.style.color = '#007bff';
  }
   const submitBtn = orderForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправлен ✅';
  }

  const formData = new FormData(orderForm);
  const orderText = getOrderText(formData);

  const templateParams = {
    to_name: "Администратор",
    message: orderText
  };

  console.log("Отправляем данные:", templateParams);

  emailjs.send('service_3svwzit', 'template_7a1fhjn', templateParams)
    .then((response) => {

      orderForm.reset();
    }, (error) => {
      console.error('Ошибка отправки:', error);
      const orderStatus = document.getElementById('order-status');
      if (orderStatus) {
        orderStatus.style.display = 'block';
        orderStatus.textContent = '❌ Ошибка отправки. Проверьте консоль (F12) или напишите в MAX.';
        orderStatus.style.color = '#d9534f';
      }
    });
});
// Блокируем кнопку отправки, если корзина пустая
function updateSubmitButtonState() {
  const submitBtn = document.querySelector('#order-form button[type="submit"]');
  if (!submitBtn) return;

  if (cart.length === 0) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
    submitBtn.textContent = '🛒 Сначала добавьте товары';
  } else {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.textContent = '📧 Отправить заказ на почту';
  }
}

// Вызываем при каждом изменении корзины
const originalRenderCart = renderCart;
function renderCartWithUpdate() {
  originalRenderCart();
  updateSubmitButtonState();
}
renderCart = renderCartWithUpdate;

// Инициализация при загрузке
updateSubmitButtonState();

// Функция для отправки в MAX: копирует + открывает ссылку
async function sendToMax() {
  if (cart.length === 0) {
    alert("Сначала добавьте товары в корзину!");
    return;
  }

  const orderForm = document.querySelector("#order-form");

  if (!orderForm) {
    alert("Форма заказа не найдена.");
    return;
  }

  const formData = new FormData(orderForm);

  formData.set(
    "name",
    formData.get("name")?.trim() || "не указано"
  );

  formData.set(
    "phone",
    formData.get("phone")?.trim() || "не указан"
  );

  formData.set(
    "city",
    formData.get("city")?.trim() || "не указан"
  );

  formData.set(
    "address",
    formData.get("address")?.trim() || "не указан"
  );

  formData.set(
    "comment",
    formData.get("comment")?.trim() || "через кнопку MAX"
  );

  const orderText = getOrderText(formData);

  const maxProfileLink =
    "https://max.ru/";

  try {
    await navigator.clipboard.writeText(orderText);
  } catch (error) {
    console.error("Не удалось скопировать корзину:", error);
  }

  window.open(maxProfileLink, "_blank", "noopener,noreferrer");
}

function showMaxStatus(message) {
  const status = document.getElementById("copy-hint");

  if (!status) {
    return;
  }

  status.textContent = message;
  status.style.display = "block";

  clearTimeout(showMaxStatus.timer);

  showMaxStatus.timer = setTimeout(() => {
    status.style.display = "none";
  }, 5000);
}
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('max-help-popup');
  const btnHelp = document.getElementById('btn-max-help');
  const btnClose = popup ? popup.querySelector('.video-popup-close') : null;

  function showPopup() {
    if (popup) popup.style.display = 'flex';
  }

  function hidePopup() {
    if (popup) popup.style.display = 'none';
  }

  if (btnHelp) btnHelp.addEventListener('click', showPopup);
  if (btnClose) btnClose.addEventListener('click', hidePopup);

  // Закрытие по клику вне окна
  if (popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) hidePopup();
    });
  }
});




renderCatalog();
renderCart();
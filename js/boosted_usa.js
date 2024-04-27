refs = {
  avatar: document.querySelector(".js-avatar"),
  cart: document.querySelector(".js-cart"),
  revs: document.querySelector(".js-revs"),
  boards: document.querySelector(".js-boards"),
  shop: document.querySelector(".js-shop"),
};

refs.avatar.addEventListener("click", (e) => {
  alert("тут має бути меню входу або реєстрації");
});
refs.cart.addEventListener("click", (e) => {
  alert("тут має бути корзина із покупками");
});
refs.revs.addEventListener("click", (e) => {
  window.location.href = "Electric-Skateboards.html";
});
refs.boards.addEventListener("click", (e) => {
  window.location.href = "Electric-Scooters.html";
});
refs.shop.addEventListener("click", (e) => {
  window.location.href = "Accessories.html";
});

let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".menu");
let menuLinks = document.querySelectorAll(".menu__link");

hamb.addEventListener("click", () => {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
});

for (const link of menuLinks) {
  link.addEventListener("click", () => {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
  });
}

const productList = document.querySelector(".product__wrapper");
const firstProduct = document.querySelectorAll(".product__item")[0];
const arrows = document.querySelectorAll(".product__arrow");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let firstProductWidth = firstProduct.clientWidth + 107;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    productList.scrollLeft +=
      arrow.id == "left" ? -firstProductWidth : firstProductWidth;

  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = productList.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) {
    return;
  }
  e.preventDefault();
  let positinDiff = e.pageX - prevPageX;
  productList.scrollLeft = prevScrollLeft - positinDiff;
};

const dragStop = () => {
  isDragStart = false;
};

productList.addEventListener("mousedown", dragStart);
productList.addEventListener("mousemove", dragging);
productList.addEventListener("mouseup", dragStop);

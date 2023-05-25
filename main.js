let hamb = document.querySelector('.hamb');
let navMenu = document.querySelector('.menu');
let menuLinks = document.querySelectorAll('.menu__link');

hamb.addEventListener('click', () => {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
});

for (const link of menuLinks){
    link.addEventListener('click', () => {
        hamb.classList.remove("active");
        navMenu.classList.remove("active");
    });
}
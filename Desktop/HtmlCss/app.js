const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');
const mobileMenu = () =>  {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}
menu.addEventListener('click',mobileMenu);

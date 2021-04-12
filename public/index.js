// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })
    })
});

// modal
const signupBtn = document.querySelector('#signup');
const cancelBtn = document.querySelector('#cancel-modal');
const joinBtn = document.querySelector('#success-modal');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
});

joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    joinBtn.classList.add('is-loading');
    setTimeout(() => {
        joinBtn.classList.remove('is-loading');
        modal.classList.remove('is-active');
    }, 5000);
});

// cart
const addToCart = document.querySelector('#add-to-cart');
let cartText = document.querySelector('#shopping-cart');
let itemCount = parseInt(cartText.innerHTML.slice(-2, -1));

addToCart.addEventListener('click', (e) => {
    e.preventDefault();
    itemCount += 1;
    addToCart.classList.add('is-loading');
    setTimeout(() => {
        cartText.innerHTML = `Shopping Cart (${itemCount})`;
        addToCart.classList.remove('is-loading');
    }, 1000);
});
const burger = document.querySelector('.hamburger__menu'),
     sidebar = document.querySelector('.sidebar2'),
        logo = document.querySelector('.logo'),
        main = document.querySelector('main');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar__change');
    burger.classList.toggle('burger__change');
    logo.classList.toggle('logo__change');
});

main.addEventListener('click', () => {
    sidebar.classList.remove('sidebar__change');
    
});
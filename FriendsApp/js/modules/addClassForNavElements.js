function addActiveClass() {
    const header = document.querySelector('.header');
    const burgerBtn = document.querySelector('.navigation-top__list-adaptive-burger');
    const filterMenu = document.querySelector('.navigation-left');
    const resetFiltersBtn = document.querySelector('.navigation-left__reset-btn');

    window.addEventListener('scroll', event => {
        if (window.scrollY > '0') {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    });

    burgerBtn.addEventListener('click', event => {
        burgerBtn.classList.toggle('navigation-top__list-adaptive-burger-active');
        filterMenu.classList.toggle('navigation-left-active');

        resetFiltersBtn.addEventListener('click', event => {
            filterMenu.classList.remove('navigation-left-active');
            burgerBtn.classList.remove('navigation-top__list-adaptive-burger-active');
        });
    });
}

export default addActiveClass;

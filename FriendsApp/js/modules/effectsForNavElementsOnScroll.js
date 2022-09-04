function headerAddActiveClass(headerSelector) {
    const header = document.querySelector('.' + headerSelector);
    window.addEventListener('scroll', event => {
        if (window.scrollY > '0') {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    });
}

export default headerAddActiveClass;
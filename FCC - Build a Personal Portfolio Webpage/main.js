var nav = document.getElementById('navbar');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'transparent';
    }
}
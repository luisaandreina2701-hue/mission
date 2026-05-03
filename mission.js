let selectElem = document.querySelector('select');
let logo = document.querySelector('.logo');
let body = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        body.classList.add('dark');
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";

    } else if (current == 'light') {
        body.classList.remove('dark');
        logo.src = "image/logo.webp";
    }
}
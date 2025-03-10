const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

function toggleMenu() {
    const menu = document.querySelector('.hidden-menu');
    menu.classList.toggle('hidden');
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light');
}

const menuDiv = document.querySelector('.menu');
menuDiv.addEventListener('click', toggleMenu);

const menuChangeThemeItem = document.querySelector('.menu-item')
menuChangeThemeItem.addEventListener('click', toggleTheme);

window.onload = () => {
    const html = document.documentElement;
    html.setAttribute('data-theme', currentTheme);
}
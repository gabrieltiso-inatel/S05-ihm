function renderNavbar() {
    return `
    <header class="header">
        <div class="header-container">
            <div class="icon menu" id="menuBtn">
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div class="logo">
                <svg class="svg_logo_inatel" xmlns="http://www.w3.org/2000/svg" viewBox="100 150 390 116">
                    <path class="path_logo"
                        d="M127.455,156.988h21.287l-21.859,102.835H105.69L127.455,156.988L127.455,156.988z M225.618,208.048\tl-10.941,51.775H194.51l9.726-45.911c0.286-1.168,0.477-2.312,0.62-3.456c0.143-1.144,0.214-2.145,0.214-3.027\tc0-2.86-0.834-4.982-2.527-6.412c-1.668-1.407-4.147-2.122-7.461-2.122c-5.078,0-9.392,1.406-12.968,4.219 c-3.552,2.836-5.888,6.698-6.96,11.633l-9.559,45.076h-20.31l16.186-75.946h19.905l-2.002,9.559 c3.957-3.886,8.105-6.794,12.491-8.701c4.362-1.907,9.011-2.86,13.945-2.86c6.508,0,11.656,1.501,15.447,4.529 c3.79,3.027,5.697,7.151,5.697,12.372c0,1.239-0.096,2.55-0.286,3.933S226.143,205.855,225.618,208.048L225.618,208.048z\t M282.709,222.636c-3.29,1.455-7.318,2.646-12.038,3.6c-4.744,0.954-7.557,1.55-8.438,1.788c-3.218,0.978-5.674,2.526-7.414,4.648\tc-1.716,2.122-2.574,4.672-2.574,7.652c0,2.074,0.739,3.719,2.24,4.887c1.478,1.168,3.552,1.74,6.222,1.74\tc5.078,0,9.487-1.574,13.206-4.721s6.15-7.342,7.271-12.61L282.709,222.636L282.709,222.636z M306.333,202.613l-9.154,43.145\tc-0.238,1.313-0.405,2.432-0.524,3.361s-0.167,1.717-0.167,2.385c0,1.168,0.167,2.098,0.548,2.789 c0.381,0.715,1.049,1.406,2.026,2.098l-0.763,3.432h-21.025c-0.048-0.285-0.143-0.643-0.286-1.119\tc-0.381-1.813-0.572-3.076-0.572-3.768c0-0.428,0.048-1,0.119-1.715c0.072-0.74,0.167-1.574,0.31-2.551\tc-3.218,3.861-7.032,6.793-11.49,8.818c-4.458,2.027-9.344,3.053-14.708,3.053c-5.721,0-10.274-1.455-13.659-4.338\tc-3.361-2.885-5.054-6.771-5.054-11.658c0-9.51,2.574-16.876,7.724-22.097c5.125-5.197,13.206-8.629,24.171-10.25\tc1.788-0.287,4.195-0.645,7.271-1.049c10.131-1.168,15.185-4.53,15.185-10.108c0-2.098-0.834-3.623-2.527-4.577\tc-1.669-0.954-4.338-1.43-8.033-1.43c-4.195,0-7.581,0.93-10.131,2.813c-2.574,1.883-4.052,4.529-4.481,7.914h-19.166\tc1.359-8.2,5.292-14.684,11.824-19.451c6.507-4.768,14.731-7.151,24.672-7.151c8.987,0,15.971,1.454,20.954,4.362\ts7.484,6.984,7.484,12.205c0,0.834-0.047,1.668-0.143,2.503C306.642,201.063,306.5,201.874,306.333,202.613L306.333,202.613z\t M335.081,163.281h20.31l-4.338,20.595h12.634l-3.004,14.303h-12.776l-8.844,42.026c0,0.238-0.048,0.547-0.144,0.93\tc-0.095,0.404-0.144,0.668-0.144,0.811c0,1.119,0.549,1.93,1.67,2.406c1.119,0.502,3.051,0.74,5.792,0.74h4.409l-3.289,15.303\tc-1.168,0.049-2.717,0.096-4.672,0.145c-3.528,0.094-5.84,0.143-6.913,0.143c-6.508,0-11.18-0.883-14.017-2.646\tc-2.837-1.787-4.267-4.672-4.267-8.678c0-1.119,0.118-2.455,0.357-4.051c0.214-1.574,0.596-3.6,1.12-6.08l8.701-41.048h-10.752\tl3.004-14.303h10.895L335.081,163.281L335.081,163.281z M432.339,227.213H383.4c-0.167,1.025-0.311,2.026-0.405,3.004\ts-0.144,1.835-0.144,2.574c0,4.1,0.978,7.199,2.956,9.297s4.911,3.146,8.772,3.146c3.266,0,6.031-0.668,8.344-1.979\tc2.313-1.334,4.434-3.48,6.389-6.46h20.309c-3.576,7.962-8.914,14.208-16.018,18.761c-7.105,4.553-14.994,6.842-23.695,6.842\tc-8.63,0-15.424-2.551-20.43-7.676c-5.006-5.127-7.508-12.016-7.508-20.692c0-6.197,1.096-12.609,3.289-19.236\tc2.17-6.627,5.077-12.325,8.725-17.092c4.172-5.435,9.059-9.559,14.588-12.348c5.531-2.789,11.633-4.195,18.283-4.195\tc8.939,0,15.924,2.36,20.955,7.104c5.029,4.72,7.531,11.275,7.531,19.666c0,2.193-0.213,4.696-0.666,7.534\tC434.246,218.322,433.458,222.232,432.339,227.213L432.339,227.213z M414.46,213.912c0.143-1.119,0.262-2.098,0.334-2.955\tc0.07-0.858,0.096-1.55,0.096-2.05c0-3.385-0.979-6.031-2.957-7.914s-4.768-2.813-8.344-2.813c-4.146,0-7.676,1.335-10.607,4.005\ts-5.172,6.579-6.697,11.728H414.46L414.46,213.912z M461.826,156.988h20.311l-21.932,102.835h-20.262L461.826,156.988\tL461.826,156.988z">
                    </path>
                </svg>
            </div>
            <div></div>
        </div>
    </header>
    `;
}

function renderMenu() {
    return `
    <div class="custom-menu-overlay" id="mainMenuOverlay">
        <div class="custom-menu" id="mainMenu">
            <div class="menu-grid-btn arimo-bold" id="dashboardMenuItem">
                <span class="material-symbols-outlined menu-icon">home</span>
                Dashboard
            </div>
            <div class="menu-grid-btn arimo-bold" id="themeMenuItem">
                <span class="material-symbols-outlined menu-icon">contrast</span>
                Alterar Tema
            </div>
            <div class="menu-grid-btn arimo-bold" id="vagasMenuItem">
                <span class="material-symbols-outlined menu-icon">work</span>
                Vagas
            </div>
            <div class="menu-grid-btn arimo-bold" id="resumesMenuItem">
                <span class="material-symbols-outlined menu-icon">description</span>
                Resumès
            </div>
            <div class="menu-grid-btn arimo-bold" id="applicationsMenuItem">
                <span class="material-symbols-outlined menu-icon">assignment</span>
                Aplicações
            </div>
            <div class="menu-grid-btn arimo-bold" id="tutorialMenuItem">
                <span class="material-symbols-outlined menu-icon">help</span>
                Tutorial
            </div>
            <div class="menu-grid-btn arimo-bold" id="toggleTourMenuItem">
                <span class="material-symbols-outlined menu-icon">visibility_off</span>
                <span id="toggleTourText"></span>
            </div>
            <div class="menu-grid-btn arimo-bold" id="closeBtn">
                <span class="material-symbols-outlined menu-icon">close</span>
                Fechar Menu
            </div>
        </div>
    </div>
    `;
}

function setupMenuAndNavbar() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    document.body.insertAdjacentHTML('afterbegin', renderNavbar() + renderMenu());

    const overlay = document.getElementById('mainMenuOverlay');
    const menu = document.getElementById('mainMenu');

    document.getElementById('menuBtn').onclick = () => {
        overlay.classList.add('show');
        menu.classList.add('slide-down');
    };
    document.getElementById('closeBtn').onclick = () => {
        overlay.classList.remove('show');
        menu.classList.remove('slide-down');
    };
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('show');
            menu.classList.remove('slide-down');
        }
    };
    document.getElementById('dashboardMenuItem').onclick = () => {
        window.location.href = 'dashboard.html';
    };
    document.getElementById('themeMenuItem').onclick = () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light');
    };
    document.getElementById('vagasMenuItem').onclick = () => {
        window.location.href = 'positions.html';
    };
    document.getElementById('resumesMenuItem').onclick = () => {
        window.location.href = 'resumes.html';
    };
    document.getElementById('applicationsMenuItem').onclick = () => {
        window.location.href = 'applications.html';
    };
    document.getElementById('tutorialMenuItem').onclick = () => {
        localStorage.removeItem('showDashboardTour');
        window.location.href = 'dashboard.html';
    };

    // Tutorial toggle logic
    function updateTourToggleText() {
        const showTour = localStorage.getItem('showDashboardTour') !== 'false';
        document.getElementById('toggleTourText').textContent = showTour
            ? 'Desativar tutorial'
            : 'Ativar tutorial';
    }

    document.getElementById('toggleTourMenuItem').onclick = () => {
        const showTour = localStorage.getItem('showDashboardTour') !== 'false';
        if (showTour) {
            localStorage.setItem('showDashboardTour', 'false');
        } else {
            localStorage.removeItem('showDashboardTour');
        }
        updateTourToggleText();
    };
    updateTourToggleText();
}


document.addEventListener('keyup', (e) => {
    if (e.ctrlKey && e.key === 'm') {
        const overlay = document.getElementById('mainMenuOverlay');
        const menu = document.getElementById('mainMenu');

        if (overlay.classList.contains('show')) {
            overlay.classList.remove('show');
            menu.classList.remove('slide-down');
            return;
        } 

        overlay.classList.add('show');
        menu.classList.add('slide-down');
    }
});
document.addEventListener('DOMContentLoaded', () => setupMenuAndNavbar());

const menuStyles = `
.custom-menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(20, 22, 34, 0.82);
    z-index: 2000;
    display: none;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
}
.custom-menu-overlay.show {
    display: flex;
}
.custom-menu {
    background: var(--background-color, #222);
    border-radius: 18px;
    padding: 38px 32px 32px 32px;
    min-width: 320px;
    min-height: 340px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.22);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 32px;
    animation: menu-slide-down 0.45s cubic-bezier(.4,1.4,.6,1) both;
    transform: translateY(-60px);
    opacity: 0;
}
.custom-menu.slide-down {
    animation: menu-slide-down 0.45s cubic-bezier(.4,1.4,.6,1) both;
}
@keyframes menu-slide-down {
    from {
        opacity: 0;
        transform: translateY(-60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.menu-grid-btn {
    background: var(--primary-color, #1976d2);
    color: #fff;
    border-radius: 12px;
    padding: 28px 10px 18px 10px;
    font-size: 1.18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(25,118,210,0.10);
    transition: background 0.18s, transform 0.18s;
    min-width: 110px;
    min-height: 90px;
    gap: 10px;
    border: none;
    outline: none;
    user-select: none;
}
.menu-grid-btn:hover, .menu-grid-btn:focus {
    background: var(--secondary-color, #1256a0);
    transform: translateY(2px) scale(1.04);
}
.menu-icon {
    font-size: 2.5em !important;
    margin-bottom: 6px;
}
@media (max-width: 600px) {
    .custom-menu {
        min-width: 98vw;
        max-width: 100vw;
        width: 100vw;
        grid-template-columns: 1fr;
        gap: 14px 0;
        padding: 10vw 2vw 8vw 2vw;
        border-radius: 0 0 18px 18px;
        box-sizing: border-box;
        left: 0;
        right: 0;
        top: 0;
        position: fixed;
        min-height: unset;
    }
    .custom-menu-overlay {
        align-items: flex-start;
        justify-content: center;
        padding-top: 0;
    }
    .menu-grid-btn {
        min-width: unset;
        min-height: 70px;
        font-size: 1.08rem;
        padding: 18px 6px 12px 6px;
    }
}
@media (max-width: 400px) {
    .custom-menu {
        padding: 4vw 1vw 4vw 1vw;
    }
    .menu-grid-btn {
        font-size: 0.98rem;
        padding: 12px 2px 8px 2px;
    }
}
`;

if (!document.getElementById('custom-menu-style')) {
    const style = document.createElement('style');
    style.id = 'custom-menu-style';
    style.innerHTML = menuStyles;
    document.head.appendChild(style);
}
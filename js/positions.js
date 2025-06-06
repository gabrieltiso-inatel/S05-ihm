import { positions } from './data.js';

function renderPositions() {
    const container = document.getElementById('positions-list-container');
    container.innerHTML = '';

    positions.forEach((position) => {
        const div = document.createElement('div');
        div.className = 'position-card';
        div.innerHTML = `
            <div class="position-details">
                <div class="position-title-row">
                    ${position.image ? `<img src="${position.image}" alt="${position.title}" class="position-icon">` : ''}
                    <h1 class="position-title">${position.title}</h1>
                </div>
                <p class="position-description">${position.short_description}</p>
                <div class="position-button-container">
                    <button class="position-btn">Visualizar</button>
                </div>
            </div>
        `;

        const button = div.querySelector('.position-btn');
        button.addEventListener('click', () => {
            window.location.href = `position.html?id=${position.id}`;
        });

        container.appendChild(div);
    });
}

function addDriverInteraction() {
    const driver = window.driver.js.driver;
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                popover: {
                    title: 'Vagas Disponíveis',
                    description: 'Aqui você pode visualizar todas as vagas abertas. Vamos conhecer a página!',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '.position-card',
                popover: {
                    title: 'Vaga de Exemplo',
                    description: 'Esta é uma vaga de exemplo. Você pode clicar no botão para ver mais detalhes.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: '.position-btn',
                popover: {
                    title: 'Ver Detalhes',
                    description: 'Clique aqui para ver os detalhes da vaga.',
                    side: 'top',
                    align: 'center'
                }
            }
        ]
    });

    driverObj.drive();
}

document.addEventListener('DOMContentLoaded', () => {
    renderPositions();
    if (localStorage.getItem('showDashboardTour') !== 'false') {
        addDriverInteraction();
    }
});
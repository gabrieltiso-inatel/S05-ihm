import { positions } from './data.js'

function getPositionIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function renderPositionDetails() {
    const id = getPositionIdFromUrl();
    const position = positions.find(p => p.id === id);
    const detailsDiv = document.getElementById('position-details');
    if (position) {
        detailsDiv.innerHTML = `
            <div class="position-title-row">
                ${position.image ? `<img src="${position.image}" alt="${position.company} logo" class="position-icon">` : ''}
                <h2 class="arimo-bold">${position.title}</h2>
            </div>
            <h4 class="arimo-normal">Company: ${position.company}</h4>
            <p class="arimo-normal">${position.description}</p>

            <button class="position-btn" id="back-btn" onclick="window.location.href='positions.html'">Back to positions</button>
            <button class="position-btn" id="apply-btn" onclick="window.location.href='apply.html?positionId=${position.id}'">Apply</button>
        `;
    } else {
        detailsDiv.innerHTML = '<div class="arimo-normal">Position not found.</div>';
    }
}

function addDriverInteraction() {
    const driver = window.driver.js.driver;
    const steps = [
        {
            element: document.querySelector('.position-title-row'),
            popover: {
                title: 'Detalhes da Vaga',
                description: 'Aqui você vê o título e a empresa da vaga selecionada.',
                side: 'bottom',
                align: 'center'
            }
        },
        {
            element: document.querySelector('#position-details h4.arimo-normal'),
            popover: {
                title: 'Empresa',
                description: 'Nome da empresa responsável pela vaga.',
                side: 'top',
                align: 'center'
            }
        },
        {
            element: document.querySelector('#position-details p.arimo-normal'),
            popover: {
                title: 'Descrição',
                description: 'Aqui está a descrição completa da vaga.',
                side: 'top',
                align: 'center'
            }
        },
        {
            element: document.getElementById('apply-btn'),
            popover: {
                title: 'Candidatar-se',
                description: 'Clique aqui para se candidatar a esta vaga.',
                side: 'top',
                align: 'center'
            }
        },
        {
            element: document.getElementById('back-btn'),
            popover: {
                title: 'Voltar',
                description: 'Clique aqui para voltar à lista de vagas.',
                side: 'top',
                align: 'center'
            }
        }
    ];

    const driverObj = driver({
        showProgress: true,
        steps
    });
    driverObj.drive();
}

document.addEventListener('DOMContentLoaded', () => {
    renderPositionDetails();
    setTimeout(() => {
        if (localStorage.getItem('showDashboardTour') !== 'false') {
            addDriverInteraction();
        }
    }, 300);
});
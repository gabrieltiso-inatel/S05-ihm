import { applications, positions } from './data.js';

function renderApplicationsList() {
    const container = document.getElementById('applications-list-container');
    container.innerHTML = '';
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const resumes = JSON.parse(localStorage.getItem('resumes') || '[]');

    if (applications.length === 0) {
        container.innerHTML = '<div class="application-card"><div class="card-content">Nenhuma aplicação encontrada.</div></div>';
        return;
    }
    applications.forEach(app => {
        const position = positions.find(p => p.id === parseInt(app.positionId));
        const resume = resumes.find(r => r.id === app.resumeId);

        const div = document.createElement('div');
        div.className = 'application-card';
        div.innerHTML = `
            <div class="application-title-row">
                <span class="application-title">${position.title}</span>
                <span class="application-date">${app.date}</span>
            </div>
            <div class="application-field">
                <span class="application-label">Email:</span>
                <span class="application-email">${app.email}</span>
            </div>
            <div class="application-field">
                <span class="application-label">Nome:</span>
                <span>${app.fullname}</span>
            </div>
            <div class="application-field">
                <span class="application-label">Resume:</span>
                <span>${resume ? resume.name : ''}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function addDriverInteraction(hasPositions) {
    const driver = window.driver.js.driver;
    const applicationStep = {
        element: document.querySelector('.application-card'),
        popover: {
            title: 'Detalhes da Aplicação',
            description: 'Veja os detalhes da sua aplicação: vaga, data, email, nome e currículo utilizado.',
            side: 'top',
            align: 'center'
        }
    }

    let steps = [
        {
            popover: {
                title: 'Minhas Aplicações',
                description: 'Aqui você pode visualizar todas as aplicações que você realizou para vagas.',
                side: 'bottom',
                align: 'center'
            }
        },
    ];

    if (hasPositions) {
        steps.push(applicationStep);
    }

    const driverObj = driver({
        showProgress: true,
        steps
    });

    driverObj.drive();
}

document.addEventListener('DOMContentLoaded', () => {
    renderApplicationsList();
    addDriverInteraction(applications.length > 0 && positions.length > 0);
});

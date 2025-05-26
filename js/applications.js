import { positions } from './data.js';

function renderApplicationsList() {
    const container = document.getElementById('applications-list-container');
    container.innerHTML = '';
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const resumes = JSON.parse(localStorage.getItem('resumes') || '[]');

    if (applications.length === 0) {
        container.innerHTML = '<div class="card"><div class="card-content">Nenhuma aplicação encontrada.</div></div>';
        return;
    }
    applications.forEach(app => {
        const position = positions.find(p => p.id === app.positionId);
        const resume = resumes.find(r => r.id === app.resumeId);

        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="card-content">
                <span class="arimo-bold" style="font-size:1.2em;">${position ? position.title : 'Vaga'}</span> <span class="arimo-normal">${app.date}</span><br>
                <span class="arimo-normal">Email escolhido: ${app.email}</span><br>
                <span class="arimo-normal">Nome: ${app.fullname}</span><br>
                <span class="arimo-normal">Resume: ${resume ? resume.name : ''}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderApplicationsList);

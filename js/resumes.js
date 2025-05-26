import { resumes } from './data.js'

function renderResumesList() {
    const container = document.getElementById('resumes-list-container');
    container.innerHTML = '';
    resumes.forEach((resume, idx) => {
        const div = document.createElement('div');
        div.className = 'notification-item';
        div.innerHTML = `
            <div class="notification-content">
                <span class="arimo-normal">${resume.name}</span>
                <button class="carousel-btn">x</button>
            </div>
        `;

        const button = div.querySelector('.carousel-btn');
        button.addEventListener('click', () => {
            deleteResume(idx);
        });

        container.appendChild(div);
    });
}

function deleteResume(index) {
    resumes.splice(index, 1);
    localStorage.setItem('resumes', JSON.stringify(resumes));
    renderResumesList();
}

document.addEventListener('DOMContentLoaded', renderResumesList);

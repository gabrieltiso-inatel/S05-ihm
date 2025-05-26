import { positions, resumes, applications } from "./data.js";

function handleApply(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;
    const resumeId = parseInt(document.getElementById('resume').value);
    const vagaId = parseInt(localStorage.getItem('selectedVagaId'));
    const date = new Date().toLocaleDateString('pt-BR');

    applications.push({ vagaId, email, fullname, resumeId, date });
    localStorage.setItem('applications', JSON.stringify(applications));

    window.location.href = 'applications.html';
}

function updateResumeOptions() {
    const select = document.getElementById('resume');
    function updateResumeDropdown() {
        select.innerHTML = '';
        if (!resumes || resumes.length === 0) {
            select.disabled = true;
            select.innerHTML = '<option>No resumes available</option>';
            document.getElementById('apply-form').querySelector('button').disabled = true;
        } else {
            select.disabled = false;
            document.getElementById('apply-form').querySelector('button').disabled = false;
            resumes.forEach(r => {
                const option = document.createElement('option');
                option.value = r.id;
                option.textContent = r.name;
                select.appendChild(option);
            });
        }
    }

    updateResumeDropdown();
    window.addEventListener('resumesChanged', updateResumeDropdown);
}

function displayPosition() {
    const params = new URLSearchParams(window.location.search);
    const positionId = params.get('positionId');
    if (positionId) {
        const position = positions.find(p => p.id === parseInt(positionId));
        if (position) {
            const infoDiv = document.createElement('div');
            infoDiv.className = 'notification-item card';
            infoDiv.innerHTML = `<div class="notification-content card-content"><b>${position.title}</b> at ${position.company}</div>`;
            document.querySelector('main').insertBefore(infoDiv, document.getElementById('apply-form').parentElement);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayPosition();
    updateResumeOptions();
    document.getElementById('apply-form').onsubmit = handleApply;
});

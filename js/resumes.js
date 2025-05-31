import { resumes } from './data.js'

function renderResumesList() {
    const container = document.getElementById('resumes-list-container');
    container.innerHTML = '';
    resumes.forEach((resume, idx) => {
        console.log(resume);
        const div = document.createElement('div');
        div.className = 'resume-card';
        div.innerHTML = `
            <div class="resume-preview">
                <div class="fake-pdf-sheet">
                    <div class="fake-pdf-header"></div>
                    <div class="fake-pdf-lines"></div>
                    <span class="fake-pdf-ext">.pdf</span>
                </div>
            </div>
            <div class="contents-container">
                <div class="info-container">
                    <h3 class="arimo-bold">${resume.name}</h3>
                    <span class="arimo-light">${resume.description}</span>
                </div>
                <div class="action-container">
                    <button class="carousel-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M4 6h16l-1.5-3h-13L4 6z"></path>
                        </svg>
                    </button>

                    <a href="${resume.file}" download class="carousel-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
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

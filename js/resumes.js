function renderResumesList() {
    const container = document.getElementById('resumes-list-container');
    container.innerHTML = '';

    const resumes = JSON.parse(localStorage.getItem('resumes') || '[]'); 
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
    const resumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    resumes.splice(index, 1);
    localStorage.setItem('resumes', JSON.stringify(resumes));
    renderResumesList();
}

function setupUploadResumeMenu() {
    const openBtn = document.getElementById('open-upload-resume-btn');
    const modal = document.getElementById('upload-resume-modal');
    const closeBtn = document.getElementById('close-upload-resume-btn');
    const form = document.getElementById('upload-resume-form');

    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        form.reset();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('resume-title').value.trim();
        const description = document.getElementById('resume-description').value.trim();

        const fileInput = document.getElementById('resume-file');
        const file = fileInput.files[0];
        if (!file || file.type !== "application/pdf") {
            alert("Please select a PDF file.");
            return;
        }

        const fileUrl = URL.createObjectURL(file);
        const allResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
        const newId = allResumes.length > 0 ? Math.max(...allResumes.map(r => r.id)) + 1 : 1;

        const newResume = {
            id: newId,
            name: title,
            description,
            file: fileUrl,
            content: ""
        };

        allResumes.push(newResume);
        localStorage.setItem('resumes', JSON.stringify(allResumes));

        modal.classList.add('hidden');
        form.reset();

        renderResumesList();
    });
}

function addDriverInteraction() {
    const driver = window.driver.js.driver;
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                popover: {
                    title: 'Meus Currículos',
                    description: 'Aqui você pode visualizar, baixar ou remover seus currículos cadastrados.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: document.querySelector('.resume-card'),
                popover: {
                    title: 'Currículo',
                    description: 'Este é um currículo cadastrado. Você pode ver o nome e descrição.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: document.querySelector('.resume-card .action-container .carousel-btn'),
                popover: {
                    title: 'Remover Currículo',
                    description: 'Clique aqui para remover este currículo do sistema.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: document.querySelector('.resume-card .action-container a.carousel-btn'),
                popover: {
                    title: 'Baixar Currículo',
                    description: 'Clique aqui para baixar o PDF deste currículo.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: document.getElementById('open-upload-resume-btn'),
                popover: {
                    title: 'Adicionar Novo Currículo',
                    description: 'Clique neste botão para cadastrar um novo currículo em PDF.',
                    side: 'left',
                    align: 'center'
                }
            }
        ]
    });
    driverObj.drive();
}

document.addEventListener('DOMContentLoaded', () => {
    setupUploadResumeMenu();
    renderResumesList();
    if (localStorage.getItem('showDashboardTour') !== 'false') {
        addDriverInteraction();
    }
});

const carouselData = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

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

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    
    function createCarouselItems() {
        carousel.innerHTML = '';
        carouselData.forEach(event => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carousel-item';
            itemDiv.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <div class="info">
                    <h3 class="arimo-bold">${event.title}</h3>
                    <p class="arimo-normal">${event.description}</p>
                    <p class="arimo-normal">
                        <span class="material-symbols-outlined">event</span> ${event.date} às ${event.time} 
                        <span class="material-symbols-outlined">pin_drop</span> ${event.location}
                    </p>
                </div>
            `;
            carousel.appendChild(itemDiv);
        });
    }
    
    createCarouselItems();
    
    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    updateCarousel();
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < carouselData.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});
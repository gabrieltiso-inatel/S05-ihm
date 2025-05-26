import { positions } from './data.js';

function renderPositions() {
    const container = document.getElementById('positions-list-container');
    container.innerHTML = '';

    positions.forEach((position) => {
        const div = document.createElement('div');
        div.className = 'notification-item';
        div.innerHTML = `
            <div class="notification-content">
                <h3 class="notification-title">${position.title}</h3>
                <p class="notification-description">${position.company}</p>
                <button class="carousel-btn">View Position</button>
            </div>
        `;

        const button = div.querySelector('.carousel-btn');
        button.addEventListener('click', () => {
            window.location.href = `position.html?id=${position.id}`;
        });

        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderPositions);
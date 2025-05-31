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
                    <button class="position-btn">View Position</button>
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

document.addEventListener('DOMContentLoaded', renderPositions);
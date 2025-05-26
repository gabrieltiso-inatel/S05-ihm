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
            <h2 class="arimo-bold">${position.title}</h2>
            <h4 class="arimo-normal">Company: ${position.company}</h4>
            <p class="arimo-normal">${position.description}</p>
            <p class="arimo-normal">${position.details}</p>
            <button class="carousel-btn big-btn" onclick="window.location.href='apply.html?positionId=${position.id}'">Apply</button>
        `;
    } else {
        detailsDiv.innerHTML = '<div class="arimo-normal">Position not found.</div>';
    }
}

document.addEventListener('DOMContentLoaded', renderPositionDetails);

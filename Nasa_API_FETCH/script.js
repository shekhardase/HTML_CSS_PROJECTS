document.addEventListener("DOMContentLoaded", function () {
    fetchNASAData();
});

async function fetchNASAData() {
    try {
        const apiKey = 'f4xbLPLDR6ibaSzBUvtafZi4jxQ1jJB6qjz2JJIY';
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayNASAData(data);
    } catch (error) {
        console.error('Error fetching NASA data:', error.message);
        displayError();
    }
}

function displayNASAData(data) {
    const imageElement = document.getElementById('image-of-the-day');
    const infoElement = document.getElementById('info');
    infoElement.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.explanation}</p>
    `;
    imageElement.src = data.url;
    imageElement.alt = data.title;
}

function displayError() {
    const infoElement = document.getElementById('info');
    infoElement.innerHTML = '<p>Failed to fetch NASA data. Please try again later.</p>';
}

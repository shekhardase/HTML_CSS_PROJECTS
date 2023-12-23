// Get the current date
const currentDate = new Date();

// Format the date as desired
const formattedDate = currentDate.toDateString();

// Update the date section in your HTML
const dateSection = document.getElementById('Date');
dateSection.textContent = formattedDate;

// Get the current city
const currentCity = "New York"; // Replace with your logic to get the current city

// Update the location section in your HTML
const locationSection = document.getElementById('location');
locationSection.textContent = `${currentCity}`;

// Get the temperature from the API
fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={514c2805397f8ff97146a220faede581}' + currentCity)
    .then(response => response.json())
    .then(data => {
        const currentTemperature = data.current.temp_c;

        // Update the temperature section in your HTML
        const temperatureSection = document.getElementById('temperature');
        temperatureSection.textContent = `${currentTemperature}°C`;
    })
    .catch(error => {
        console.error('Error:', error);
    });




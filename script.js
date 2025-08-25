const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

const apiKey = 'df88a4abc3db2812266ace8f0d29b7dc';

searchBtn.addEventListener('click', getWeather);

async function getWeather() {
    const city = cityInput.value.trim();
    if (city) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}');
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            weatherInfo.innerHTML = 'Error fetching weather data';
        }
    } else {
        weatherInfo.innerHTML = 'Please enter a city name';
    }
}

function displayWeather(data) {
    const weatherHtml = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    weatherInfo.innerHTML = weatherHtml;
}
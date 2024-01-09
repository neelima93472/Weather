const apiKey = 'e36140a1ed66e153b0fd72395218e5ae';

async function getWeather() {
    const city = document.getElementById('city').value;

    if (city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            document.getElementById('location').innerText = data.name;
            document.getElementById('temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('description').innerText = data.weather[0].description;

            
            document.querySelector('.weather-info').style.display = 'block';
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
}
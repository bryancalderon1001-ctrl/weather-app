// Weather App
function getWeather(city) {
    console.log(`Fetching weather for ${city}...`);
    return {
        city: city,
        temp: 72,
        condition: 'Sunny'
    };
}

const weather = getWeather('Seattle');
console.log(`${weather.city}: ${weather.temp}°F, ${weather.condition}`);

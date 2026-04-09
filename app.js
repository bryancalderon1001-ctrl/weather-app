// Weather App
function getWeather(city) {
    console.log(`Fetching weather for ${city}...`);
    return {
        city: city,
        temp: 72,
        condition: 'Sunny'
    };
}

function getForecast(city, days) {
    console.log(`Fetching ${days}-day forecast for ${city}...`);
    return {
        city: city,
        days: days,
        summary: 'Mostly sunny with a chance of rain on day 3'
    };
}

const weather = getWeather('Seattle');
console.log(`${weather.city}: ${weather.temp}°F, ${weather.condition}`);

const forecast = getForecast('Seattle', 5);
console.log(`Forecast: ${forecast.summary}`);

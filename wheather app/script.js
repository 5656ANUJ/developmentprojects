/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    window.getWeather = function() {
        const apiKey = "1d75e02b4c0cdcc53c8655d36581bfcb";
        const city = document.getElementById("cityInput").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)he 
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById("weatherInfo").innerHTML = `
                        <h3>${data.name}, ${data.sys.country}</h3>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                    `;
                } else {
                    document.getElementById("weatherInfo").innerHTML = "City not found. Try again.";
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    };
});

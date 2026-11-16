// Fetches the current weather from the API and updates the page (city, temperature and icon)
async function fetchAPI() {
    try{
        // Request the weather data (the URL is a placeholder: replace it with your weather api url)
        const response = await fetch("hi:D")

        if(!response.ok){
            throw new Error("No se encontro el dato del API");
        }

        // Parse the response body as JSON
        const data = await response.json();
        console.log(data);

        // City Name
        // NOTE: these variables are not declared with let/const, so they become implicit globals
        ciudad = data.name;
        console.log(ciudad)

        // Kelvin to Celsius
        // The API returns the temperature in Kelvin, so we subtract 273.15
        temperatura = data.main.temp
        celsius = temperatura - 273.15;

        // Round to 2 decimals (toFixed returns a string)
        tempstr = celsius.toFixed(2);


        console.log(tempstr)


        // Show the city name and temperature in the HTML elements with ids "city" and "temp"
        document.getElementById("city").innerHTML = ciudad;
        document.getElementById("temp").innerHTML = tempstr + '°';

        // Main weather condition (e.g. "Rain", "Clear", "Clouds")
        let clima = data.weather[0].main;

        console.log(clima)

        // Image element where the weather icon will be displayed
        const climaimg = document.getElementById("climaimg");
        
        // Pick the icon that matches the weather condition
        switch (clima) {

            case "Thunderstorm":
                climaimg.src = "./src/clima/thunderstorm.png";
                break;

            case "Drizzle":
                climaimg.src = "./src/clima/light_rain.png";
                break;

            case "Rain":
                climaimg.src = "./src/clima/heavy_rain.png";
                break;

            case "Snow":
                climaimg.src = "./src/clima/heavy_snow.png";
                break;

            // Mist, Haze, Dust, Sand and Ash all share the same "mist" icon
            case "Mist":
                climaimg.src = "./src/clima/mist.png";
                break;

            // Smoke and Fog share the "fog" icon
            case "Smoke":
                climaimg.src = "./src/clima/fog.png";
                break;

            case "Haze":
                climaimg.src = "./src/clima/mist.png";
                break;

            case "Dust":
                climaimg.src = "./src/clima/mist.png";
                break;

            case "Fog":
                climaimg.src = "./src/clima/fog.png";
                break;

            case "Sand":
                climaimg.src = "./src/clima/mist.png";
                break;

            case "Ash":
                climaimg.src = "./src/clima/mist.png";
                break;

            case "Squall":
                climaimg.src = "./src/clima/wind.png";
                break;

            case "Tornado":
                climaimg.src = "./src/clima/tornado.png";
                break;

            case "Clear":
                climaimg.src = "./src/clima/clear_day.png"
                break;

            case "Clouds":
                climaimg.src = "./src/clima/cloudy.png";
                break;

            // Fallback icon for any unknown condition
            // NOTE: this path is missing the "./src/clima/" prefix, so it may not load
            default:
                climaimg.src = "clear_day.png";
                break;
        }


    }
    // Runs if the request fails or anything inside the try block throws an error
    catch{
        console.log("Error en api")
    }


}


// Updates the clock on the page with the current local time
function reloj(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // Build the time string as H:M:S (minutes and seconds are not zero-padded)
    const timestr = `${hour}:${minute}:${second}`;
    document.getElementById("tiempo").textContent = timestr;
}


// Refresh the weather every 5 minutes (300000 ms)...
setInterval(fetchAPI, 300000);
// ...and also fetch it once right away when the page loads
fetchAPI();

// Update the clock every second
setInterval(reloj, 1000);
// NOTE: this line is missing the parentheses, so reloj() is not called here
// and the clock only appears after the first second passes
reloj;
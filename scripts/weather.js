// Select HTML elements
const tempElement = document.getElementById('current-temp');
const weatherIconElement = document.getElementById('weather-icon');
const figcaptionElement = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.64&units=metric&appid=d94e9e96f72a29538ac05029ce37f561';


// Define the asynchronous function 'apiFetch'
async function apiFetch() {
    try {
        // Store the result of the fetch request into a variable named 'response'
        const response = await fetch(url); // Replace `url` with the actual API endpoint

        // Check if the response is OK (status 200-299)
        if (response.ok) {
            // If the response is OK, convert the response to JSON and store it in 'data'
            const data = await response.json();

            // Output the data to the console for testing purposes
            console.log(data);

            // Now, call displayResults to show the data in HTML
            displayResults(data);
        } else {
            // If the response is not OK, throw an error with the response text
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }
    } catch (error) {
        // Catch any errors from the try block and output them to the console
        console.error("Error fetching weather data:", error);
    }
}

// Define the function 'displayResults' to update the HTML
function displayResults(data) {
    // Get temperature and weather information from the API response
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // Update the temperature on the webpage
    tempElement.innerHTML = `${temperature}&deg;C`;

    // Set weather icon and description
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconElement.src = iconUrl;
    weatherIconElement.alt = description;
    figcaptionElement.textContent = description;
}

// Call the apiFetch function to initiate the fetch request
apiFetch();
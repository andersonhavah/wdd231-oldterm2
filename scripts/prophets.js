// Declare a constant variable `url` that contains the JSON resource URL.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a constant variable `cards` that selects the HTML div element with the id value of "cards".
const cards = document.querySelector('#cards');

// Create an async function `getProphetData` to fetch data from the JSON source.
async function getProphetData() {
    try {
        // Store the response from the fetch() method in a const variable `response`.
        const response = await fetch(url);

        // Check if the response is OK (status code 200).
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response.
        const data = await response.json();

        // Use console.table() to display the data in a tabular format.
        // console.table(data); // This will log the JSON data as a table in the console.

        displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object

    }
    catch {
        // Handle any errors that occur during the fetch operation.
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Define the displayProphets function as an arrow function that processes prophets array.
const displayProphets = (prophets) => {
    // Use forEach loop to process each prophet record one at a time.
    prophets.forEach(prophet => {
        //  Create a section element and store it in a variable named card.
        const card = document.createElement('section');

        // Create an h2 element and store it in a variable named "fullName".
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create a p element and store it in a variable named "dateOfBirth".
        const dateOfBirth = document.createElement('p');
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Create a p element and store it in a variable named "dateOfBirth".
        const placeOfBirth = document.createElement('p');
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Create an img element and store it in a variable named "portrait".
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);  // Image URL from the JSON
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy'); // Lazy loading the image
        portrait.setAttribute('width', '300');  // Example width, adjust as needed
        portrait.setAttribute('height', '400'); // Example height, adjust as needed

        // Append the fullName and portrait elements to the card section.
        card.appendChild(fullName);     
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        // Finally, add the card section to the cards div.
        cards.appendChild(card);
    });
}

getProphetData();
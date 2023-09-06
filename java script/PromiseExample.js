// PromiseExample.js

// Get a reference to the input field and result container
const input = document.querySelector('.input');
const resultContainer = document.getElementById('result');

// Add an event listener to the input field to listen for user input
input.addEventListener('input', () => {
    // Get the value from the input field
    const query = input.value;

    // Make an API call using the fetch function
    fetch(`https://dummyjson.com/users/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Process the retrieved data and display it in the result container
            resultContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
});

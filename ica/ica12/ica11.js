/* Select the new quote button using a querySelector. Assign it to a new variable. */

let newQuoteButton = document.querySelector("#js-new-quote");

/* Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote". */ 

newQuoteButton.addEventListener("click", getQuote);

/* Write the function declaration, and check the button click works by returning a message in the console 
everytime the button is clicked. */

function getQuote() {
    console.log("Button clicked!");
} 

/* Add a new variable that holds the API endpoint:  */

let apiEndpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

/* Change the getQuote function to use the fetch method to get a random quote from that endpoint.
If successful, output the quote to the console
If it fails, output an error message to the console AND via alert */

async function getQuote() {
    try {
        let response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        alert('There has been a problem with your fetch operation: ' + error.message);
    }
}

/* Write a second function called "displayQuote" that will display the text of a fetched quote 
in the HTML element with an id of js-quote-text. */

function displayQuote(quote) {
    document.querySelector("#js-quote-text").innerText = quote;
} 

/* Adjust getQuote to run displayQuote at the proper place in the code. */

async function getQuote() {
    try {
        let response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        displayQuote(data.question);
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        alert('There has been a problem with your fetch operation: ' + error.message);
    }
} 

/* Notice when you refresh that a quote isn't displayed. Fix that. */

window.onload = getQuote;
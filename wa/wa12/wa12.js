/* Select the new quote button using a querySelector. Assign it to a new variable. */

let newUserButton = document.querySelector("#js-new-quote");

/* Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote". */ 

newUserButton.addEventListener("click", getUser);

/* Write the function declaration, and check the button click works by returning a message in the console 
everytime the button is clicked. */

function getUser() {
    console.log("Button clicked!");
}  

/* Add a new variable that holds the API endpoint:  */

let apiEndpoint = "https://jsonplaceholder.typicode.com/users";

/* Change the getQuote function to use the fetch method to get a random quote from that endpoint.
If successful, output the quote to the console
If it fails, output an error message to the console AND via alert */

async function getUser() {
    try {
        let response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let randomUser = data[Math.floor(Math.random() * data.length)];
        console.log(randomUser);
        displayUser(randomUser);
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        alert('There has been a problem with your fetch operation: ' + error.message);
    }
}   

/* Write a second function called "displayQuote" that will display the text of a fetched quote 
in the HTML element with an id of js-quote-text. */

function displayUser(user) {
    let quoteTextElement = document.querySelector("#js-quote-text");
    quoteTextElement.innerHTML = `Name: ${user.name} <br> Email: ${user.email}`;
}   

/* Adjust getQuote to run displayQuote at the proper place in the code. */

async function getUser() {
    try {
        let response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let randomUser = data[Math.floor(Math.random() * data.length)];
        console.log(randomUser);
        displayUser(randomUser);
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        alert('There has been a problem with your fetch operation: ' + error.message);
    }
}   

/* Notice when you refresh that a quote isn't displayed. Fix that. */

window.onload = getUser;

/* Updates for WA12 */

let sendEmailButton = document.querySelector("#js-tweet");

sendEmailButton.addEventListener("click", sendEmail);

function sendEmail() {
    let userEmail = document.querySelector("#js-quote-text").innerText.split("Email: ")[1];
    let emailLink = "mailto:" + userEmail + "?subject=Test%20Email&body=Success!";
    window.location.href = emailLink;
}

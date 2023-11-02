// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// 2. RAW TEXT STRINGS

const storyText = "It was 94 freedom degrees outside, so :insertx: went for a walk. When they got to :inserty:, they stared in awe for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: was a true 300 pound patriot, and it was the 4th of July."

const insertX = ["George Washington", "Abe Lincoln", "Thomas Jefferson"];
const insertY = ["The Statue of Liberty", "The Washington Monument", "The White House"];
const insertZ = ["blasted fireworks into the sky", "mounted a giant bald eagle and rode off into the sunset", "opened a new McDonalds"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;

        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + " stone";
        const temperature =  Math.round((94-32) * 5/9) + " centigrade";

        newStory = newStory.replace("300 pound", weight);
        newStory = newStory.replace("94 freedom degrees", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

}
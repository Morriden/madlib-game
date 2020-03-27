//GET A BUNCH OF DOM ELEMENTS

// go get html elements by their ids

//well need the inputs to get the words from the USER
const adjectiveInputOne = document.getElementById('adjective-one');
const nounCreatureOne = document.getElementById('creature-one');
const nameOne = document.getElementById('name-one');
const placeOne = document.getElementById('place-one');
const yourName = document.getElementById('your-name');
const nounItemOne = document.getElementById('item-one');
const nounItemTwo = document.getElementById('item-two');
const adjectiveInputTwo = document.getElementById('adjective-two');
const adjectiveInputThree = document.getElementById('adjective-three');
const animalOne = document.getElementById('animal-one');
const verbOne = document.getElementById('verb-one');
const adjectiveInputFour = document.getElementById('adjective-four');
const adjectiveInputFive = document.getElementById('adjective-five');
const nameTwo = document.getElementById('name-two');
const nounOne = document.getElementById('noun-one');
const nounTwo = document.getElementById('noun-two');
const nounPlural = document.getElementById('noun-plural');
// well need spans as well to put the words into the madlib

//well need the container that holds the madlib
document.getElementById('madlib-container');
// well need the container that holds all the inputs from the USER

// well need the button so we can add the event listener
const myButton = document.getElementById('button');
//ADD EVENT LISTENERS

//add event listeners to the button on the click event
function readersAnswers() {
    //this even listener should
        //GET the value of the input
    const adjectiveInputOneValue = adjectiveInputOne.value;
    const nounCreatureOneValue = nounCreatureOne.value;
    const nameOneValue = nameOne.value;
    const placeOneValue = placeOne.value;
    const yourNameValue = yourName.value;
    const nounItemOneValue = nounItemOne.value;
    const nounItemTwoValue = nounItemTwo.value;
    const adjectiveInputTwoValue = adjectiveInputTwo.value;
    const adjectiveInputThreeValue = adjectiveInputThree.value;
    const animalOneValue = animalOne.value;
    const verbOneValue = verbOne.value;
    const adjectiveInputFourValue = adjectiveInputFour.value;
    const adjectiveInputFiveValue = adjectiveInputFive.value;
    const nameTwoValue = nameTwo.value;
    const nounOneValue = nounOne.value;
    const nounTwoValue = nounTwo.value;
    const nounPluralValue = nounPlural.value;

    console.log('something', nameOneValue);



        //use the input values to SET the value of our spans
        //hide the input container
        //reveal the mad lib container
}
myButton.addEventListener('click', readersAnswers);
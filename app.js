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
const adjectiveInputOneSpan = document.getElementById('adjective-one-span');
const nounCreatureSpan = document.getElementById('noun-creature-span');
const nounCreatureSpanTwo = document.getElementById('noun-creature-span-2');
const nameOneSpan = document.getElementById('name-one-span');
const placeOneSpan = document.getElementById('place-one-span');
const placeOneSpanTwo = document.getElementById('place-one-span-2');
const yourNameSpan = document.getElementById('your-name-span');
const nounItemOneSpan = document.getElementById('noun-item-one-span');
const nounItemOneSpanTwo = document.getElementById('noun-item-one-2');
const nounItemTwoSpan = document.getElementById('noun-item-two-span');
const nounItemTwoSpanTwo = document.getElementById('noun-item-two-span-2');
const adjectiveInputTwoSpan = document.getElementById('adjective-input-two-span');
const adjectiveInputThreeSpan = document.getElementById('adjective-input-three-span');
const animalOneSpan = document.getElementById('animal-one-span');
const verbOneSpan = document.getElementById('verb-one-span');
const adjectiveInputFourSpan = document.getElementById('adjective-input-four-span');
const adjectiveInputFiveSpan = document.getElementById('adjective-input-five-span');
const nameTwoSpan = document.getElementById('name-two-span');
const nounOneSpan = document.getElementById('noun-one-span');
const nounTwoSpan = document.getElementById('noun-two-span');
const nounPluralSpan = document.getElementById('noun-plural-span');

//well need the container that holds the madlib
const madlibContainer = document.getElementById('madlib-container');
// well need the container that holds all the inputs from the USER
const inputContainer = document.getElementById('input-container');
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

    adjectiveInputOneSpan.textContent = adjectiveInputOneValue;
    nounCreatureSpan.textContent = nounCreatureOneValue;
    nounCreatureSpanTwo.textContent = nounCreatureOneValue;
    nameOneSpan.textContent = nameOneValue;
    placeOneSpan.textContent = placeOneValue;
    placeOneSpanTwo.textContent = placeOneValue;
    yourNameSpan.textContent = yourNameValue;
    nounItemOneSpan.textContent = nounItemOneValue;
    nounItemOneSpanTwo.textContent = nounItemOneValue;
    nounItemTwoSpan.textContent = nounItemTwoValue;
    nounItemTwoSpanTwo.textContent = nounItemTwoValue;
    adjectiveInputTwoSpan.textContent = adjectiveInputTwoValue;
    adjectiveInputThreeSpan.textContent = adjectiveInputThreeValue;
    animalOneSpan.textContent = animalOneValue;
    verbOneSpan.textContent = verbOneValue;
    adjectiveInputFourSpan.textContent = adjectiveInputFourValue;
    adjectiveInputFiveSpan.textContent = adjectiveInputFiveValue;
    nameTwoSpan.textContent = nameTwoValue;
    nounOneSpan.textContent = nounOneValue;
    nounTwoSpan.textContent = nounTwoValue;
    nounPluralSpan.textContent = nounPluralValue;



    //console.log('something', nameOneValue); WORKS



        //use the input values to SET the value of our spans
        //hide the input container
    inputContainer.style.display = 'none';
        //reveal the mad lib container
    madlibContainer.style.display = 'block';
}
myButton.addEventListener('click', readersAnswers);
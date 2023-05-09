console.log("Hello from the console");


function loadGameButton() {

}

createDeck();

function createDeck() {
    var suits = ['♥', '♦', '♠', '♣'];
    var cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var orderedDeck = []
    
    for(var suit = 0; suit < 4; suit++) {
        for(var cardNum = 0; cardNum < 13; cardNum++) {
            orderedDeck.push(cardValue[cardNum] + suits[suit]);
        }
    }
    console.log(orderedDeck);
}

function shuffleDeck() {

}

function dealStartCards() {

}

function valueCards() {

}

function drawMore() {

}

function compareHands() {

}

function displayScore() {

}
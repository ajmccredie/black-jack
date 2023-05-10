console.log("Hello from the console");


function loadGameButton() {

}

createDeck();

function createDeck() {
    const SUITS = ['♥', '♦', '♠', '♣'];
    const CARDVALUE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var orderedDeck = []
    
    for(var suit = 0; suit < 4; suit++) {
        for(var cardNum = 0; cardNum < 13; cardNum++) {
            orderedDeck.push(CARDVALUE[cardNum] + SUITS[suit]);
        }
    }
    return orderedDeck
}

let gameDeck = createDeck();
console.log(gameDeck);
let shuffled = shuffleDeck(gameDeck);

function shuffleDeck(gameDeck) {
    var deckSize = gameDeck.length;
    console.log(deckSize);
        for (let i = deckSize - 1; i > 0; i--) {
            var newIndex = Math.floor(Math.random() * (i + 1))
            var oldCard = gameDeck[newIndex]
            gameDeck[newIndex] = gameDeck[i]
            gameDeck[i] = oldCard
        }
    console.log(gameDeck);
}

function dealStartCards() {
    document.getElementById("player-one");
    //show two start cards//
    document.getElementById("dealer");
    //eventually these two start cards will be hidden//
}

function valueCards() {
    //automatic coding for what to do with aces//
}

function drawMore() {
    //dealer has to draw more below 17//
}

function compareHands() {
    //check what happens if hands are the same//
}

function displayScore() {

}

function incrementScore() {
    //show the cumulative total for the player//
}
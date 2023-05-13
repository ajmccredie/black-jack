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
    return gameDeck
}

let shuffled = shuffleDeck(gameDeck);
dealStartCards(shuffled);

function dealStartCards(shuffled) {
    console.log(shuffled);
 //   document.getElementById("player-one");
    
    let dealerCard1 = shuffled[0];
    let dealerCard2 = shuffled[1];
    let p1Card1 = shuffled[2];
    let p1Card2 = shuffled[3];
    console.log(`The dealer's cards are ${dealerCard1} and ${dealerCard2}`);
    console.log(`The suit of dealer card 1 is ${dealerCard1.slice(-1)} and its value is ${dealerCard1.slice(0,-1)}`)
    console.log(`The player's cards are ${p1Card1} and ${p1Card2}`);
    //show two start cards//
 //   document.getElementById("dealer");
    //eventually these two start cards will be hidden//
}

function valueCards() {
    //automatic coding for what to do with aces//
}

function drawMore() {
    //dealer has to draw more below 17//
    //need a set of buttons to appear//
}

function compareHands() {
    //check what happens if hands are the same//
}

function displayScore() {

}

function incrementScore() {
    //show the cumulative total for the player//
}
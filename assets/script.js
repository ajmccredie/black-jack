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
    //   set initial dealer total to 0
    let dealerTot = 0;
    let p1Tot = 0;
    //  deal dealer cards and split the information of suits and values
    let dealerCard1 = shuffled[0];
    let dc1suit = dealerCard1.slice(-1);
    let dc1val = dealerCard1.slice(0, -1);
    console.log(dc1val);
    if (dc1val === "J") {
        dc1value = 10;
    } else if (dc1val === "Q") {
        dc1value = 10;
    } else if (dc1val === "K") {
        dc1value = 10;
    } else if (dc1val === "A") {
        dc1value = 11;
    } else {
        dc1value = +dc1val;
    }
    console.log(dc1value);
    let dealerCard2 = shuffled[1];
    let dc2suit = dealerCard2.slice(-1);
    let dc2val = dealerCard2.slice(0, -1);
    console.log(dc2val);
    if (dc2val === "J") {
        dc2value = 10;
    } else if (dc2val === "Q") {
        dc2value = 10;
    } else if (dc2val === "K") {
        dc2value = 10;
    } else if (dc2val === "A") {
        dc2value = 11;
    } else {
        dc2value = +dc2val;
    }
    console.log(dc2value);
    //  find the dealer's current card total
    dealerTot = dc1value + dc2value;
    console.log(dealerTot);
    // repeat process for player 1
    let p1Card1 = shuffled[2];
    let p1c1suit = p1Card1.slice(-1);
    let p1c1val = +p1Card1.slice(0, -1);
    if (p1c1val === "J") {
        p1c1value = 10;
    } else if (p1c1val === "Q") {
        p1c1value = 10;
    } else if (p1c1val === "K") {
        p1c1value = 10;
    } else if (p1c1val === "A") {
        p1c1value = 11;
    } else {
        p1c1value = +p1c1val;
    }
    let p1Card2 = shuffled[3];
    let p1c2suit = p1Card2.slice(-1);
    let p1c2val = +p1Card2.slice(0, -1);
    if (p1c2val === "J") {
        p1c2value = 10;
    } else if (p1c2val === "Q") {
        p1c2value = 10;
    } else if (p1c2val === "K") {
        p1c2value = 10;
    } else if (p1c2val === "A") {
        p1c2value = 11;
    } else {
        p1c2value = +p1c2val;
    }
    p1Tot = p1c1value + p1c2value;
    console.log(p1Tot);
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
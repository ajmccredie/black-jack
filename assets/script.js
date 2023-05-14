console.log("Hello from the console");

window.onload = function() {
    createDeck();
    const btn = document.getElementById("start-button");
    btn.style.display = "block";
}

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
//dealStartCards(shuffled);

function dealStartCards(shuffled) {
    const gTitle = document.getElementById("game-title");
    gTitle.style.display = "none";
    const btn = document.getElementById("start-button");
    btn.style.display = "none";
    console.log(shuffled);
    //   set initial dealer total to 0
    let dealerTot = 0;
    let p1Tot = 0;
    //  deal dealer cards and split the information of suits and values
    let dealerCard1 = shuffled[0];
    let dc1suit = dealerCard1.slice(-1);
    console.log(dc1suit);
    if (dc1suit === '♥') {
        dc1suitColour = "red";
    } else if (dc1suit === '♦') {
        dc1suitColour = "red";
    } else {
        dc1suitColour = "black";
    }
    console.log(dc1suitColour);
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
    console.log(dc2suit);
    if (dc2suit === '♥') {
        dc2suitColour = "red";
    } else if (dc2suit === '♦') {
        dc2suitColour = "red";
    } else {
        dc2suitColour = "black";
    }
    console.log(dc2suitColour);
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
    console.log(p1c1suit);
    if (p1c1suit === '♥') {
        p1c1suitColour = "red";
    } else if (p1c1suit === '♦') {
        p1c1suitColour = "red";
    } else {
        p1c1suitColour = "black";
    }
    console.log(p1c1suitColour);
    let p1c1val = p1Card1.slice(0, -1);
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
    console.log(p1c1value);
    let p1Card2 = shuffled[3];
    let p1c2suit = p1Card2.slice(-1);
    console.log(p1c2suit);
    if (p1c2suit === '♥') {
        p1c2suitColour = "red";
    } else if (p1c2suit === '♦') {
        p1c2suitColour = "red";
    } else {
        p1c2suitColour = "black";
    }
    console.log(p1c2suitColour);
    let p1c2val = p1Card2.slice(0, -1);
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
    console.log(p1c2value);
    p1Tot = p1c1value + p1c2value;
    console.log(p1Tot);
    console.log(`The dealer's cards are ${dealerCard1} and ${dealerCard2}`);
    console.log(`The suit of dealer card 1 is ${dealerCard1.slice(-1)} and its value is ${dealerCard1.slice(0,-1)}`)
    console.log(`The player's cards are ${p1Card1} and ${p1Card2}`);
    //show two start cards//
    
    const dealer = document.getElementById("dealer");
    const dC1Div = document.createElement('div')
    dC1Div.innerText = dc1suit
    dC1Div.dataset.value = `${dc1val} ${dc1suit}`
    dC1Div.classList.add("card", "back", `${dc1suitColour}`)
    console.log(dC1Div);
    dealer.appendChild(dC1Div);
    const dealerScore = document.createElement('div')
    dealerScore.innerText = dealerTot
    dealerScore.classList.add("score")
    dealer.appendChild(dealerScore);
    dealerScore.style.display = "none";

    const dC2Div = document.createElement('div')
    dC2Div.innerText = dc2suit
    dC2Div.dataset.value = `${dc2val} ${dc2suit}`
    dC2Div.classList.add("card", "back", `${dc2suitColour}`)
    console.log(dC2Div);
    dealer.appendChild(dC2Div);

    const playerOne = document.getElementById("player-one");
    const p1C1Div = document.createElement('div')
    p1C1Div.innerText = p1c1suit
    p1C1Div.dataset.value = `${p1c1val} ${p1c1suit}`
    p1C1Div.classList.add("card", "front", `${p1c1suitColour}`)
    console.log(p1C1Div);
    playerOne.appendChild(p1C1Div);
    const p1Score = document.createElement('div')
    p1Score.innerText = p1Tot
    p1Score.classList.add("score")
    playerOne.appendChild(p1Score);

    const p1C2Div = document.createElement('div')
    p1C2Div.innerText = p1c2suit
    p1C2Div.dataset.value = `${p1c2val} ${p1c2suit}`
    p1C2Div.classList.add("card", "front", `${p1c2suitColour}`)
    console.log(p1C2Div);
    playerOne.appendChild(p1C2Div);

    const stickButton = document.getElementById("stick");
    stickButton.style.display = "block";
    const twistButton = document.getElementById("twist");
    twistButton.style.display = "block";
}

function valueCards() {
    //automatic coding for what to do with aces//
    dealer = document.querySelector('#dealer');
    dealerScore = dealer.querySelector('.score');
    dealerScore.style.display = "block";

    playerOne = document.querySelector('#player-one');
    playerOneScore = playerOne.querySelector('.score');

    if (playerOneScore >= dealerScore) {
        console.log("player one wins");
    } else {
        console.log("player one loses");
    }
    // a better way to display and increment the scores will be needed
}

function drawMore(shuffled) {
    console.log(shuffled);
    let pOCardNext = shuffled.pop();
    let pOcNsuit = pOCardNext.slice(-1);
    console.log(pOcNsuit);
    if (pOcNsuit === '♥') {
        pOcNsuitColour = "red";
    } else if (pOcNsuit === '♦') {
        pOcNsuitColour = "red";
    } else {
        pOcNsuitColour = "black";
    }
    console.log(pOcNsuitColour);
    let pOcNval = pOCardNext.slice(0, -1);
    console.log(pOcNval);
    if (pOcNval === "J") {
        pOcNvalue = 10;
    } else if (pOcNval === "Q") {
        pOcNvalue = 10;
    } else if (pOcNval === "K") {
        pOcNvalue = 10;
    } else if (pOcNval === "A") {
        pOcNvalue = 11;
    } else {
        pOcNvalue = +pOcNval;
    }
    console.log(pOcNvalue);
    const playerOne = document.getElementById("player-one");
    const p1CNDiv = document.createElement('div')
    p1CNDiv.innerText = pOcNsuit
    p1CNDiv.dataset.value = `${pOcNval} ${pOcNsuit}`
    p1CNDiv.classList.add("card", "front", `${pOcNsuitColour}`)
    console.log(p1CNDiv);
    playerOne.appendChild(p1CNDiv);



    //dealer has to draw more below 17//
    let dealerCardNext = shuffled.pop();
    let dcNsuit = dealerCardNext.slice(-1);
    console.log(dcNsuit);
    if (dcNsuit === '♥') {
        dcNsuitColour = "red";
    } else if (dcNsuit === '♦') {
        dcNsuitColour = "red";
    } else {
        dcNsuitColour = "black";
    }
    console.log(dcNsuitColour);
    let dcNval = dealerCardNext.slice(0, -1);
    console.log(dcNval);
    if (dcNval === "J") {
        dcNvalue = 10;
    } else if (dcNval === "Q") {
        dcNvalue = 10;
    } else if (dcNval === "K") {
        dcNvalue = 10;
    } else if (dcNval === "A") {
        dcNvalue = 11;
    } else {
        dcNvalue = +dcNval;
    }
    console.log(dcNvalue);

    

}

function displayScore() {

}

function incrementScore() {
    //show the cumulative total for the player//
}
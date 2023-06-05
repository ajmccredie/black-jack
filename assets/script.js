window.onload = function() {
    createDeck();
    const btn = document.getElementById("start-button");
    btn.style.display = "block";
    const btn2 = document.getElementById("modal-button");
    btn2.style.display = "block";
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

//the shuffle process of swapping index contents was inspired by XXX
function shuffleDeck(gameDeck) {
    var deckSize = gameDeck.length;
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

function howToPlay() {
    var modal = document.getElementById("playModal");
    var btn2 = document.getElementById("modal-button");
    var span = document.getElementsByClassName("close")[0];
    
    // Code to open the modal
    btn2.onclick = function() {
        modal.style.display = "block";
    }

    // Code to close the modal window
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function dealStartCards(shuffled) {
    // alert with too few cards to play
    if (shuffled.length < 6) {
        window.alert("You do not have enough cards in this deck");
    }
    // remove items from the DOM not required for game play
    const gTitle = document.getElementById("game-title");
    gTitle.style.display = "none";
    const btn = document.getElementById("start-button");
    btn.style.display = "none";
    const btn2 = document.getElementById("modal-button");
    btn2.style.display = "none";
    const animatedFooter = document.getElementById("pre-game");
    animatedFooter.style.display = "none";
    const staticFooter = document.getElementById("in-game");
    staticFooter.style.display = "block";
    staticFooter.addEventListener("click", function () {
        location.reload();
      });

    console.log(shuffled);
    // set initial dealer total to 0
    let dealerTot = 0;
    let p1Tot = 0;
    // deal dealer cards and split the information of suits and values
    let dealerCard1 = shuffled.pop();
    let dc1suit = dealerCard1.slice(-1);
    if (dc1suit === '♥') {
        dc1suitColour = "red";
    } else if (dc1suit === '♦') {
        dc1suitColour = "red";
    } else {
        dc1suitColour = "black";
    }
    let dc1val = dealerCard1.slice(0, -1);
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
    let dealerCard2 = shuffled.pop();
    let dc2suit = dealerCard2.slice(-1);
    if (dc2suit === '♥') {
        dc2suitColour = "red";
    } else if (dc2suit === '♦') {
        dc2suitColour = "red";
    } else {
        dc2suitColour = "black";
    }
    let dc2val = dealerCard2.slice(0, -1);
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

    //  find the dealer's current card total
    if 	(dc1val == "A" && dc2val == "A") {
        dc1value = 1;
        dealerTot = dc1value + dc2value;
    } else {
        dealerTot = dc1value + dc2value;
    }
    
    // repeat process for player 1
    let p1Card1 = shuffled.pop();
    let p1c1suit = p1Card1.slice(-1);
    if (p1c1suit === '♥') {
        p1c1suitColour = "red";
    } else if (p1c1suit === '♦') {
        p1c1suitColour = "red";
    } else {
        p1c1suitColour = "black";
    }
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
    let p1Card2 = shuffled.pop();
    let p1c2suit = p1Card2.slice(-1);
    if (p1c2suit === '♥') {
        p1c2suitColour = "red";
    } else if (p1c2suit === '♦') {
        p1c2suitColour = "red";
    } else {
        p1c2suitColour = "black";
    }
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
    if 	(p1c1val == "A" && p1c2val == "A") {
        p1c1value = 1;

        p1Tot = p1c1value + p1c2value;
    } else {
        p1Tot = p1c1value + p1c2value;
    }
    
    //show two start cards//
    const dealer = document.getElementById("dealer");
    const dealerScore = document.createElement('div')
    const dC1Div = document.createElement('div')
    dC1Div.innerText = dc1suit
    dC1Div.dataset.value = `${dc1val} ${dc1suit}`
    dC1Div.classList.add("card", "back", `${dc1suitColour}`)
    dealer.appendChild(dC1Div);
    dealerScore.innerText = dealerTot
    dealerScore.classList.add("score")
    dealer.appendChild(dealerScore);
    dealerScore.style.display = "none";
    dealer.appendChild(dC1Div);

    const dC2Div = document.createElement('div')
    dC2Div.innerText = dc2suit
    dC2Div.dataset.value = `${dc2val} ${dc2suit}`
    dC2Div.classList.add("card", "back", `${dc2suitColour}`)
    dealer.appendChild(dC2Div);

    const playerOne = document.getElementById("player-one");
    const p1Score = document.createElement('div')
    p1Score.innerText = p1Tot
    p1Score.classList.add("score")
    playerOne.appendChild(p1Score);
    const p1C1Div = document.createElement('div')
    p1C1Div.innerText = p1c1suit
    p1C1Div.dataset.value = `${p1c1val} ${p1c1suit}`
    p1C1Div.classList.add("card", "front", `${p1c1suitColour}`)
    playerOne.appendChild(p1C1Div);

    const p1C2Div = document.createElement('div')
    p1C2Div.innerText = p1c2suit
    p1C2Div.dataset.value = `${p1c2val} ${p1c2suit}`
    p1C2Div.classList.add("card", "front", `${p1c2suitColour}`)
    playerOne.appendChild(p1C2Div);

    const stickButton = document.getElementById("stick");
    stickButton.style.display = "block";
    const twistButton = document.getElementById("twist");
    twistButton.style.display = "block";
}

function valueCards() {
    //dealer needs to draw more on player stick if their score is lower, so need to access dealer score
    dealer = document.querySelector('#dealer');
    dealerScore = dealer.querySelector('.score');
    dealerScore.style.display = "block";
    dealerScore = dealerScore.innerText;

    //need to access the data-values of divs 2 and 3 of dealer (div 1 is the score)
    dc1valFind = document.querySelector('#dealer :nth-child(2)');
    dc1values = dc1valFind.dataset.value;
    dc1val = dc1values[0];
    //determine the actual numerical value of card (to deal with aces appropriately)
    if (dc1val === "J") {
        dc1value = 10;
    } else if (dc1val === "Q") {
        dc1value = 10;
    } else if (dc1val === "K") {
        dc2value = 10;
    } else if (dc1val === "A") {
        dc1value = 11;
    } else {
        dc1value = +dc1val;
    }

    //find the second card already there
    dc2valFind = document.querySelector('#dealer :nth-child(3)');
    dc2values = dc2valFind.dataset.value;
    dc2val = dc2values[0];
    //determine its numerical value like card 1
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

    let playerOne = document.querySelector('#player-one');
    let playerOneScore = parseInt(playerOne.querySelector('.score').innerText);
    var pOcardCount = document.getElementById("player-one").children.length;
        if (pOcardCount == 6 && dealerScore <= 21) {
            pOneFiveCardTrick = true;
        } else {
            pOneFiveCardTrick = false;
        }
    
    //a while loop to deal with the dealer continuing to draw until they beat the player
    while (dealerScore < playerOneScore && dealerScore < 21 && playerOneScore !== 21 && !pOneFiveCardTrick) {
        if (shuffled.length < 1) {
            window.alert("You have run out of cards in this deck");
        }
        let dealerCardNext = shuffled.pop();
        let dcNsuit = dealerCardNext.slice(-1);
        if (dcNsuit === '♥') {
            dcNsuitColour = "red";
        } else if (dcNsuit === '♦') {
            dcNsuitColour = "red";
        } else {
            dcNsuitColour = "black";
        }
        let dcNval = dealerCardNext.slice(0, -1);
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

        const dCNDiv = document.createElement('div')
        dCNDiv.innerText = dcNsuit
        dCNDiv.dataset.value = `${dcNval} ${dcNsuit}`
        dCNDiv.classList.add("card", "back", `${dcNsuitColour}`)
        dealer.appendChild(dCNDiv);

        let newDealerScore = +dealerScore + dcNvalue;

        //check if the ace has already had 10 subtracted
        let voidDc1 = dc1valFind.classList.contains('used');
        console.log(voidDc1);
        let validDC1 = !voidDc1;
        console.log("valid?");
        console.log(validDC1);

        //check if the ace has already subtracted 10
        let voidDc2 = dc2valFind.classList.contains('used');
        console.log(voidDc2);
        let validDC2 = !voidDc2;
        console.log("valid?");
        console.log(validDC2);

        if (newDealerScore > 21) {
            if (dcNval === "A") {
                dcNvalue = 1;
            } else if (dc1val == "A" && validDC1) {
                dealerScore = +dealerScore - 10;
                dc1valFind.classList.add("used");
                console.log("I have subtracted 10 from the total");
            } else if (dc2val == "A" && validDC2) {
                dealerScore = +dealerScore - 10;
                dc2valFind.classList.add("used");
                console.log("I have subtracted 10 from the total");
            } else {
                dealerScore = +dealerScore;
            }
        }
        //recalcuate following loop
        newDealerScore = +dealerScore + dcNvalue;

        dealerScore.innerText = newDealerScore;
        dealer.querySelector('.score').innerText = newDealerScore;
        dealerScore = +newDealerScore;

        //Five card trick code for dealer (note the card count is 6 not 5 due to the score child element)
        var cardCount = document.getElementById("dealer").children.length;
        if (cardCount == 6 && dealerScore <= 21) {
            displayScore()
        }
    }

    dealerCards = dealer.querySelectorAll('.card');
    var cardPile = dealerCards.length;

    // Turn dealer cards to show hand unless player has Black Jack or Five Card Trick
    if (playerOneScore !== 21 && !pOneFiveCardTrick) {
        for (let i = cardPile - 1; i >= 0; i--) {
            console.log(dealerCards[i]);
            dealerCard = dealerCards[i];
            dealerCard.classList.remove("back");
            dealerCard.classList.add("front");
        } 
    } else {
        dealer = document.querySelector('#dealer');
        dealerScore = dealer.querySelector('.score');
        dealerScore.style.display = "none";
    }
    

    if (cardCount !== 6 || dealerScore <= 21) {
        displayScore()
    } else if (dealerScore > 21) {
        displayScore()
    }
}

function drawMore(shuffled) {
    if (shuffled.length < 5) {
        window.alert("You have run out of cards in this deck");
    }
    // call in the remaining shuffled cards
    let pOCardNext = shuffled.pop();
    let pOcNsuit = pOCardNext.slice(-1);
    if (pOcNsuit === '♥') {
        pOcNsuitColour = "red";
    } else if (pOcNsuit === '♦') {
        pOcNsuitColour = "red";
    } else {
        pOcNsuitColour = "black";
    }

    let pOcNval = pOCardNext.slice(0, -1);
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

    const playerOne = document.getElementById("player-one");
    const p1CNDiv = document.createElement('div')
    p1CNDiv.innerText = pOcNsuit
    p1CNDiv.dataset.value = `${pOcNval} ${pOcNsuit}`
    p1CNDiv.classList.add("card", "front", `${pOcNsuitColour}`)
    playerOne.appendChild(p1CNDiv);
    //need to get current score, add to it and then display new score
    let playerOneS = document.getElementById("player-one");
    let playerOneScore = parseInt(playerOneS.querySelector('.score').innerText);
    let newPOneScore = +playerOneScore + pOcNvalue;
    // need to address the values of the two first cards in order to deal with aces
    //need to access the data-values of divs 2 and 3 of dealer (div 1 is the score)
    pOc1valFind = document.querySelector('#player-one :nth-child(2)');
    pOc1value = pOc1valFind.dataset.value;
    pOc1val = pOc1value[0];
    let voidc1 = pOc1valFind.classList.contains('used');
    let validC1 = !voidc1;
    pOc2valFind = document.querySelector('#player-one :nth-child(3)');
    pOc2value = pOc2valFind.dataset.value;
    pOc2val = pOc2value[0];
    let voidc2 = pOc2valFind.classList.contains('used');
    let validC2 = !voidc2;

    if (newPOneScore > 21) {
        if (pOcNval === "A") {
            pOcNvalue = 1;
        } else if (pOc1val == "A" && validC1) {
            playerOneScore = +playerOneScore - 10;
            pOc1valFind.classList.add("used");
        } else if (pOc2val == "A" && validC2) {
            playerOneScore = +playerOneScore - 10;
            pOc2valFind.classList.add("used");
        } else {
            playerOneScore = +playerOneScore;
        }
    }
    newPOneScore = +playerOneScore + pOcNvalue;
    console.log(newPOneScore);
    playerOneS.querySelector('.score').innerText = newPOneScore;

    //Five card trick code (note the card count is 6 not 5 due to the score child element)
    let cardCount = document.getElementById("player-one").children.length;
    if (cardCount == 6 && newPOneScore <= 21) {
        displayScore()
    }

    if (newPOneScore > 21) {
        displayScore()
    }
}

function displayScore() {
    const stickButton = document.getElementById("stick");
    stickButton.style.display = "none";
    const twistButton = document.getElementById("twist");
    twistButton.style.display = "none";    

    let playerOne = document.querySelector('#player-one');
    let playerOneScore = parseInt(playerOne.querySelector('.score').innerText);
    document.getElementById("player-one").style.marginTop = "10px";

    let dealer = document.querySelector('#dealer');
    let dealerScore = parseInt(dealer.querySelector('.score').innerText);
    let pCardCount = document.getElementById("player-one").children.length;
    let dCardCount = document.getElementById("dealer").children.length;

    const gameEndQuery = document.createElement('div')
    let startAgain = document.querySelector('#start-over')
    startAgain.style.display = "flex";
    if (playerOneScore > 21) {
        console.log("player one is bust");
        message = `You have gone bust.
                    The dealer wins`;
    } else if (playerOneScore <= 21 && pCardCount == 6) {
        console.log("player one wins");
        message = `Five Card Trick! 
                    You win!`;
    } else if (dealerScore > 21) {
        console.log("player one wins");
        message = "You win!";
    } else if (playerOneScore >= dealerScore) {
        console.log("player one wins");
        message = "You win!";
    } else if (dealerScore <= 21 && dCardCount == 6) {
        console.log("dealer wins");
        message = `Dealer has Five Card Trick! 
                    The dealer wins.`;
    } else {
        console.log("player one loses");
        message = "The dealer wins.";
    }

    console.log(message);
    const reDraw = document.createElement('button')
    reDraw.classList.add("reDraw")
    reDraw.innerText = "Reshuffle and start again"
    reDraw.addEventListener("click", function () {
        location.reload();
      });

    const playAgain = document.createElement('button')
    playAgain.innerText = "Continue to the next round"
    playAgain.addEventListener("click", function () {
        clearCurrentcards();
      });

    gameEndQuery.innerText = message
    gameEndQuery.classList.add("game-end-pop-up")
    startAgain.appendChild(gameEndQuery);
    gameEndQuery.appendChild(reDraw);
    gameEndQuery.appendChild(playAgain);
    incrementScore() //before the scores are wiped from the board
}

function clearCurrentcards() {
    // clear the table to play again with the same shuffled deck in play
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    let startAgain = document.querySelector('#start-over')
    removeAllChildNodes(startAgain);

    let playerOne = document.querySelector('#player-one');
    // reset code found from javascripttutorial.net
    
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    
    removeAllChildNodes(playerOne);

    let dealer = document.querySelector('#dealer');
    removeAllChildNodes(dealer);

    document.getElementById("player-one").style.marginTop = "10px";
    dealStartCards(shuffled)
}

function incrementScore() {
    let scoreArea = document.querySelector('#running-score');
    scoreArea.style.display = "flex";
    
    //parseInt of current scores
    let playerOneCumulative = parseInt(document.querySelector('.player-one-running-total').innerText);
    console.log(playerOneCumulative);
    let dealerCumulative = parseInt(document.querySelector('.dealer-running-total').innerText);
    console.log(dealerCumulative);

    //create and write the text for dealer and player

    let playerOne = document.querySelector('#player-one');
    let playerOneScore = parseInt(playerOne.querySelector('.score').innerText);

    let dealer = document.querySelector('#dealer');
    let dealerScore = parseInt(dealer.querySelector('.score').innerText);

    // determine who to give the point to
    if (playerOneScore > 21) {
        ++dealerCumulative
    } else if (dealerScore > 21) {
        ++playerOneCumulative
    } else if (playerOneScore >= dealerScore) {
        ++playerOneCumulative
    } else {
        ++dealerCumulative
    }

    console.log(dealerCumulative);
    console.log(playerOneCumulative);

    // access and update both HTML
    document.querySelector('.dealer-running-total').innerText = dealerCumulative;
    document.querySelector('.player-one-running-total').innerText = playerOneCumulative;
}
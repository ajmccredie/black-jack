 /*jshint esversion: 6 */

window.onload = function() {
    /* Ensure that all DOM elements are loaded and allow the user to choose their
    * first action */
    var gameDeck = createDeck();
    var shuffledCards = shuffleDeck(gameDeck);
    const btn = document.getElementById("start-button");
    btn.style.display = "block";
    const btn2 = document.getElementById("modal-button");
    btn2.style.display = "block";
    console.log("initial game deck");
    console.log(shuffledCards);
    //store the deck in the DOM
    var cardsPile = document.getElementById("cards-pile");
    shuffledCards.forEach(function(card) {
        var cardElement = document.createElement("div");
        cardElement.textContent = card;
        cardsPile.appendChild(cardElement);
    });
}

function createDeck() {
    /* Create the deck on game initialisation so that there is no delay when the user
    * requests to play */
    const SUITS = ['♥', '♦', '♠', '♣'];
    const CARDVALUE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var orderedDeck = []
    
    for(var suit = 0; suit < 4; suit++) {
        for(var cardNum = 0; cardNum < 13; cardNum++) {
            orderedDeck.push(CARDVALUE[cardNum] + SUITS[suit]);
        }
    }
    return orderedDeck;
}

//the shuffle process of swapping index contents was inspired by XXX
function shuffleDeck(gameDeck) {
    /* Shuffle the positions of the card by randomly selecting indexes and swapping the values held */
    var deckSize = gameDeck.length;
        for (let i = deckSize - 1; i > 0; i--) {
            var newIndex = Math.floor(Math.random() * (i + 1))
            var oldCard = gameDeck[newIndex]
            gameDeck[newIndex] = gameDeck[i]
            gameDeck[i] = oldCard
        }
    return gameDeck
}

function howToPlay() {
    /* Launch and remove the how to play window on user command */
    var modal = document.getElementById("playModal");
    var closeButton = document.getElementsByClassName("close")[0];
    
    // Display the modal containing the instructions
    modal.style.display = "block";

    // Code to close the modal window
    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function() {
        modal.style.display = "none";
    };
}

function dealStartCards() {
    /* Start the game with two cards for the player and the dealer */
    // access the remaining deck in the DOM 
    let shuffled = document.getElementById("cards-pile");
    // alert with too few cards to play
    if (shuffled.children.length < 10) {
        setTimeout(function() {
            newDeckQuery();
        }, 0);
    }
    
    // remove items from the DOM not required for game play
    hideElements(["game-title", "start-button", "modal-button", "pre-game"]);
    const staticFooter = document.getElementById("in-game");
    staticFooter.style.display = "block";
    staticFooter.addEventListener("click", function () {
        location.reload();
      });

    // set initial dealer total to 0
    let dealerTot = 0;
    let p1Tot = 0;
    
    // deal dealer cards and split the information of suits and values
    //let firstDealerCard = shuffled.lastChild;
    //let dealerCard1 = firstDealerCard.innerText;
    let dealerCard1 = dealCard(shuffled);
    console.log(dealerCard1);
    //shuffled.removeChild(firstDealerCard);
    let dc1suit = dealerCard1.slice(-1);
    // determine the properties so that the correct graphics will display
    if (dc1suit === '♥') {
        dc1suitColour = "red";
    } else if (dc1suit === '♦') {
        dc1suitColour = "red";
    } else {
        dc1suitColour = "black";
    }
    // allocate the value for the non-numeric cards
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
    // obtain the second card for the dealer
    let secondDealerCard = shuffled.lastChild;
    let dealerCard2 = secondDealerCard.innerText;
    shuffled.removeChild(secondDealerCard);
    // obtain the details to display correctly
    let dc2suit = dealerCard2.slice(-1);
    if (dc2suit === '♥') {
        dc2suitColour = "red";
    } else if (dc2suit === '♦') {
        dc2suitColour = "red";
    } else {
        dc2suitColour = "black";
    }
    // allocate the values to the non-numeric cards
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
    // deal the card
    let firstPlayerOneCard = shuffled.lastChild;
    let p1Card1 = firstPlayerOneCard.innerText;
    shuffled.removeChild(firstPlayerOneCard);
    // determine the value of the card
    let p1c1suit = p1Card1.slice(-1);
    if (p1c1suit === '♥') {
        p1c1suitColour = "red";
    } else if (p1c1suit === '♦') {
        p1c1suitColour = "red";
    } else {
        p1c1suitColour = "black";
    }
    // assign the value to the non-numeric cards
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
    // deal the second card
    let secondPlayerOneCard = shuffled.lastChild;
    let p1Card2 = secondPlayerOneCard.innerText;
    shuffled.removeChild(secondPlayerOneCard);
    // determine the suit
    let p1c2suit = p1Card2.slice(-1);
    if (p1c2suit === '♥') {
        p1c2suitColour = "red";
    } else if (p1c2suit === '♦') {
        p1c2suitColour = "red";
    } else {
        p1c2suitColour = "black";
    }
    // assign the value
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
    // correctly count the score if both cards are aces on initial deal 
    if 	(p1c1val == "A" && p1c2val == "A") {
        p1c1value = 1;
        p1Tot = p1c1value + p1c2value;
    } else {
        p1Tot = p1c1value + p1c2value;
    }
    
    //show two start cards for player one and keep dealer card values hidden
    const dealer = document.getElementById("dealer");
    const dealerScore = document.createElement('div')
    const dC1Div = document.createElement('div')
    dC1Div.innerText = dc1suit
    dC1Div.dataset.value = `${dc1val} ${dc1suit}`
    dC1Div.classList.add("card", "back", `${dc1suitColour}`)
    dealer.appendChild(dC1Div);
    dealerScore.innerText = dealerTot;
    dealerScore.classList.add("score")
    dealer.appendChild(dealerScore);
    dealerScore.style.display = "none";
    dealer.appendChild(dC1Div);

    const dC2Div = document.createElement('div')
    dC2Div.innerText = dc2suit
    dC2Div.dataset.value = `${dc2val} ${dc2suit}`
    dC2Div.classList.add("card", "back", `${dc2suitColour}`)
    dealer.appendChild(dC2Div);

    // display player one's score alongside the cards
    const playerOne = document.getElementById("player-one");
    const p1Score = document.createElement('div')
    p1Score.innerText = p1Tot
    p1Score.classList.add("score")
    playerOne.appendChild(p1Score);
    // display both cards
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

    // present the stick or twist options to the user
    const stickButton = document.getElementById("stick");
    stickButton.style.display = "block";
    const twistButton = document.getElementById("twist");
    twistButton.style.display = "block";
}

function hideElements(elements) {
    /* mini function to reduce the number of lines of code within the other functions to remove elements */
    elements.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = "none";
        }
    });
}

function dealCard(deck) {
    const cardElement = deck.lastChild;
    let cardValue = cardElement.innerText;
    deck.removeChild(deck.lastChild);
    return cardValue;
}

function valueCards() {
    /* assess the value of the dealers cards and determine a winner when the player presses 'stick' */
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
    while (dealerScore <= playerOneScore && dealerScore < 21 && playerOneScore !== 21 && !pOneFiveCardTrick) {
        let shuffled = document.getElementById("cards-pile");
        // check there are sufficient cards in the deck to perform the operation required 
        if (shuffled.children.length < 1) {
            setTimeout(function() {
                newDeckQuery();
            }, 0);
        }

        // determine the suit and card value in the same way as for the deal
        let nextDealerCard = shuffled.lastChild;
        let dealerCardNext = nextDealerCard.innerText;
        shuffled.removeChild(nextDealerCard);
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

        // display the new card(s)
        const dCNDiv = document.createElement('div')
        dCNDiv.innerText = dcNsuit
        dCNDiv.dataset.value = `${dcNval} ${dcNsuit}`
        dCNDiv.classList.add("card", "back", `${dcNsuitColour}`)
        dealer.appendChild(dCNDiv);

        let newDealerScore = +dealerScore + dcNvalue;

        //check if the potential ace in the first card position has already had 10 subtracted
        let voidDc1 = dc1valFind.classList.contains('used');
        console.log(voidDc1);
        let validDC1 = !voidDc1;
        console.log("valid?");
        console.log(validDC1);
        //check if the potential ace in the second card position has already had 10 subtracted
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
            } else if (dc2val == "A" && validDC2) {
                dealerScore = +dealerScore - 10;
                dc2valFind.classList.add("used");
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
            break
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
    
    // display the scores when either the dealer goes bust or wins a five card trick
    if (cardCount !== 6 || dealerScore <= 21) {
        displayScore()
    } else if (dealerScore > 21) {
        displayScore()
    }
}

function drawMore() {
    /* Allow player one to draw more cards on "twist" */
    // check there are sufficient cards available
    let shuffled = document.getElementById("cards-pile");
    if (shuffled.children.length < 5) {
        setTimeout(function() {
            newDeckQuery();
        }, 0);
        }

    // draw the next card and determine the value
    let nextPlayerOneCard = shuffled.lastChild;
    let pOCardNext = nextPlayerOneCard.innerText;
    shuffled.removeChild(nextPlayerOneCard);
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

    // add the newly created player one card to the DOM
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
    // increment the score for the hand with the new value
    newPOneScore = +playerOneScore + pOcNvalue;
    console.log(newPOneScore);
    playerOneS.querySelector('.score').innerText = newPOneScore;

    //Five card trick code (note the card count is 6 not 5 due to the score child element)
    let cardCount = document.getElementById("player-one").children.length;
    if (cardCount == 6 && newPOneScore <= 21) {
        displayScore()
    }
    
    //display the score if player one goes bust
    if (newPOneScore > 21) {
        displayScore()
    }
}

function displayScore() {
    /* determine the game winner and display a pop up to tell the user and present their options */
    hideElements(["stick", "twist"]); 

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
    // determine the winner and display the appropriate message
    if (playerOneScore > 21) {
        message = `You have gone bust.
                    The dealer wins`;
    } else if (playerOneScore <= 21 && pCardCount == 6) {
        message = `Five Card Trick! 
                    You win!`;
    } else if (dealerScore > 21) {
        message = "You win!";
    } else if (dealerScore <= 21 && dCardCount == 6) {
            message = `Dealer has Five Card Trick! 
                        The dealer wins.`;
    } else if (playerOneScore >= dealerScore) {
        // this shouldn't come up, but catches the eventuality
        message = "You win!";
    } else {
        message = "The dealer wins.";
    }

    // present the options to the user
    const reDraw = document.createElement('button')
    reDraw.classList.add("reDraw")
    reDraw.innerText = "Reshuffle and start again"
    reDraw.addEventListener("click", function () {
        location.reload();
       // dealStartCards();
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
    // reset code found from javascripttutorial.net
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    let startAgain = document.querySelector('#start-over')
    removeAllChildNodes(startAgain);

    let playerOne = document.querySelector('#player-one');
    removeAllChildNodes(playerOne);

    let dealer = document.querySelector('#dealer');
    removeAllChildNodes(dealer);

    document.getElementById("player-one").style.marginTop = "10px";
    dealStartCards()
}

function incrementScore() {
    let scoreArea = document.querySelector('#running-score');
    scoreArea.style.display = "flex";
    
    //parseInt of current scores
    let playerOneCumulative = parseInt(document.querySelector('.player-one-running-total').innerText);
    console.log(playerOneCumulative);
    let dealerCumulative = parseInt(document.querySelector('.dealer-running-total').innerText);
    console.log(dealerCumulative);

    //determine the current hand total for the player and dealer
    //check the number of cards in hand for five card trick points
    let playerOne = document.querySelector('#player-one');
    let playerOneScore = parseInt(playerOne.querySelector('.score').innerText);
    let pOcardCount = document.getElementById("player-one").children.length;

    let dealer = document.querySelector('#dealer');
    let dealerScore = parseInt(dealer.querySelector('.score').innerText);
    let dCardCount = document.getElementById("dealer").children.length;

    // determine who to give the point to
    if (playerOneScore > 21) {
        ++dealerCumulative
    } else if (dealerScore > 21) {
        ++playerOneCumulative
    } else if (playerOneScore >= dealerScore) {
        ++playerOneCumulative
    } else if (dealerScore <= 21 && dCardCount == 6) {
        ++dealerCumulative
    } else if (playerOneScore <= 21 && pOcardCount == 6) {    
        ++playerOneCumulative
    } else {
        ++dealerCumulative
    }

    // access and update both HTML
    document.querySelector('.dealer-running-total').innerText = dealerCumulative;
    document.querySelector('.player-one-running-total').innerText = playerOneCumulative;
}

function newDeckQuery() {
    /* offer the user the option of a freshly shuffled deck or to start over when insufficient cards detected */
    const gameEndQuery = document.createElement('div')
    let addNewDeck = document.querySelector('#more-cards')
    addNewDeck.style.display = "flex";

    const reDraw = document.createElement('button')
    reDraw.classList.add("reDraw")
    reDraw.innerText = "Reshuffle and start again"
    reDraw.addEventListener("click", function () {
        location.reload();
      });

    const playAgain = document.createElement('button')
    playAgain.innerText = "Add in a brand new shuffled deck and keep playing!"
    playAgain.addEventListener("click", function () {
        addAnotherDeck();
      });

    gameEndQuery.innerText = "You have insufficient cards in your current deck"
    gameEndQuery.classList.add("more-cards-pop-up")
    addNewDeck.appendChild(gameEndQuery);
    gameEndQuery.appendChild(reDraw);
    gameEndQuery.appendChild(playAgain);
}

function addAnotherDeck() {
    // remove the options display
    // use reset code from earlier
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    let addNewDeck = document.querySelector('#more-cards');
    removeAllChildNodes(addNewDeck);
    addNewDeck.style.display = "none";
    // make a new deck
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

    // the newly made deck is inserted straight into the cards-pile in front of the remaining cards
    let mixedDeck = shuffleDeck(gameDeck);
    let cardsPile = document.getElementById("cards-pile");
    mixedDeck.forEach(function(card) {
        var cardElement = document.createElement("div");
        cardElement.textContent = card;
        cardsPile.insertBefore(cardElement, cardsPile.firstChild);
      });
}
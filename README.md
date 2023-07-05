# black-jack
A JavaScript based interactive card game.

## Introduction
I decided to programme a simple JavaScript based Black Jack game, mostly because the rules in principle were fairly simple… or so I thought. After I got deep into the coding of what I though was correct, several people trying out my game pointed out flaws, or things which I needed to add. Following a long stint of internet research and contradictory information pitfalls everywhere, it became apparent that the best decision I could make would be to set out the rules of the game I have set up in a “How to play” section at the beginning. The game, although still called “Black Jack” would rather be better renamed as “Black Jack…ish”. <br> 
It is an enjoyable little game and works entirely as intended (but if you are a card game pedant, you will have to excuse all the inaccuracies). 

## Features (the User Experience)
### Strategy:
The target audience for the Black Jack website is mainly individuals who want to play a simple game against a computer. <br>
The game has a “How to play” on the first page, detailing the rules governing the game-play, including how to use some of the controls such as “stick” and “twist”. Other options presented to the user throughout the game are explained as they appear. <br>
A first time, returning or regular user will get a similar experience from the simple game.
<br>
### Scope:
The important key features are the displayed cards, the incremented scores both for the hand and for the running total of hands won and the buttons for the users control. <br>
The player is able to continue playing or reshuffle and start again. If they choose to continue, the game will log their score against the dealer's for the number of hands won.
<br>
### Structure:
The simple game is on a single page of HTML with elements appearing and disappearing as they are or are not required. <br>
The initial look is the game title, some user options and a simple animated graphic.<br>
The game play is presented with the dealer cards at the top of the page and the player cards and options at the bottom. A running total of the hands the player and the dealer have won is added on completion of the first hand.<br>
When player one wins the hand or goes bust, if the dealer can draw more cards to beat them (i.e. in a situation where player one has NOT scored 21 or a “five card trick”), the dealers cards are displayed alongside their total.<br>
All relevant option screens are presented to the user in the centre of the page.
<br>
### Skeleton:
The colour scheme, in keeping with the theme of card games, is black, white, red and green. An image of a red card back was selected for the backs of cards. A textured green was selected for the “table” for the cards to go on. <br>
The colour of the suits of the cards is determined by evaluating the suits. <br>
Whitesmoke is used for text on the black backgrounds, because it was less harsh, but still created a good contrast.
<br>
### Surface:
The visual hierarchy of the site maintains consistency, with the dealer cards always at the top and the player cards always at the bottom of the page. <br>
The fonts are selected for two reasons: to maintain the look and feel of elegance and opulance of casinos, and to allow clear communication and instruction for user interactive buttons. <br>
The animated graphic on the welcome screen is to provide a mild form of entertainment while the user selects which option they wish to follow. The images again infer the neon lighting of casinos. <br>
Buttons for the user are all shown in red, with the exception of the 'close' 'x' in the corner of the 'How to play', but this does change to red when the user hovers over it. This consistent styke aids useability and makes the game feel more intuitive and familiar.<br>
The CSS has been written to allow for responsiveness over a variety of screen sizes, including mobile and tablet screens. <br>
https://ui.dev/amiresponsive?url=https://ajmccredie.github.io/black-jack/ shows the different views in preview:
![Preview of different views](assets/images/readme/responsiveness_check.png)

The user will encounter the included features in a manner similar to the order shown below:



## Technologies
- HTML 5
- CSS 3
- JavaScript

## Deployment to GitHub Pages
Deploy the Black Jack game website to GitHub pages, following these steps:
-	Create a new repository on GitHub for your project
-	Clone the repository to your local machine either by following the on-screen link or by using the command: “git clone https://github.com/ajmccredie/black-jack.git” 
-	Copy the Black Jack Game files to the cloned repository directory.
-	Commit and push changes to the repository.
-	Enable GitHub Pages for your repository by navigating to your repository, clicking on “settings”, scrolling down to “GitHub Pages”, selecting the branch you want to you for the Pages from “source”, clicking “Save”, and then waiting. This may take a few minutes.
-	Your Black Jack game website is now deployed to GitHub Pages and can be accessed via the URL provided in your repository settings.

## Copying or Forking the Project
Copy or fork the Black Jack game project, following these steps:
-	Go to the GitHub repository page of the project
-	Click on the “Fork” button at the top-right hand corner of the page. This creates a copy of the project in your GitHub account.
-	If you want to clone the project to your local machine, click on the “Code” button and copy the repository URL.
-	Open your terminal or command prompt, navigate to the desired directory, and clone the repository using the following command: “git clone https://github.com/your-username/your-forked-repository.git” 
You now have a copy of the Black Jack game project to modify, customise and use as you require.

### Contribution
Contributions to the Black Jack project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request in the GitHub repository.
<br>

## Credits
### Assets:
- Table green Image by <a href="https://www.freepik.com/free-photo/green-textile-texture_1462439.htm#query=green%20felt&position=18&from_view=keyword&track=ais">Freepik</a>
- Card back from https://cutewallpaper.org/24/cards-png/view-page-24.html
- Google Fonts for the fonts imported and used
- Decorative card images in “How to Play” are extracted from <a href="https://www.freepik.com/free-vector/poker-club-game-player-cards-sets-deck-spread-4-aces-royal-flush-hand-realistic-collection-vector-illustration_26764262.htm#page=2&query=playing%20card%203d&position=1&from_view=keyword&track=ais">Image by macrovector</a> on Freepik
- Neon suit symbols from an edited graphic from <a href="https://www.freepik.com/free-vector/casino-card-suit-symbols-neon-colors_15717691.htm#page=2&query=playing%20cards%20symbols&position=12&from_view=keyword&track=ais">Image by starline</a> on Freepik

### Code:
In order to get the project started, I initially really struggled with how to approach building a deck of cards. 
- Creating the deck in script, shuffling it and rendering the cards in CSS and HTML were heavily reliant on "How to build a simple card game with JavaScript" from Web Dev Simplified (https://www.youtube.com/watch?v=NxRwIZWjLtE&t=195s)

![Screen shot of some of the most relevant code from the video](assets/images/readme/youtube_code_shot.png)

- Another video (Code Blackjack with JavaScript HTML CSS (Kenny Yip Coding) (https://www.youtube.com/watch?v=bMYCWccL-3U)) was also found. I watched about the first 10 minutes of  this video, but then stopped because I wanted to explore building the different elements myself and did not want to be too heavily influenced with setting up my gameplay.

- Obtaining socres and manipulating these elements from lessons and the project walk through in Code Institute's Love Maths.

- Creation of the modal "How to Play" adapted from "W3 Schools"

## Testing
### Code validation
The code was passed through validators for the CSS, HTML and JavaScript.
### Feature test log for final deployed version
| Feature | Behaviour | Pass or fail? <br>(Edge, Firefox<br> and Safari) |
| -------------- | -------------- | -------------- |
| Load screen animation  | Images fit within bar and appear and disappear according to the timings in the code. Animation does not affect the general running of the screen.   | Pass   |
| How to play pop up  | Pop-up loads on top of existing screen, displays words and graphic responsively and clearly. <br>Close 'x' for the pop-up clear and works as expected.   | Pass   |
| Initial buttons for set up | Both the "Let's Play!" and "How to Play" buttons display clearly and work on first click. <br> Buttons direct user to the place they are expecting.   | Pass   |
| Adding names (maximum 12 characters)  | The system alert pop-up appears when the player presses "Let's Play". <br>The player is asked to enter a name, but a default value of "Player One" is available for those who would rather not enter information here.<br> The user is warned not to enter more than 12 characters, but they are not prevented from doing so.<br> Characters beyond the 12 character limit are cut off in the player name display.<br> User name is displayed with their running score.   | Pass   |
| Dealer behaviour  | If the player goes "bust", scores 21, or a five card trick, the dealer does nothing when "stick" is pressed by the player (cards stay facing down and no additional cards are drawn)<br> If the player sticks on fewer than 21 points, the dealer will continue to draw cards until they score more than the player, or go bust. These cards and the running total of their hand are shown.   | Pass   |
| Live hand score  | The player one score is shown and changes with each new card on "twist".<br> The total reflects an accurate valuation of the cards (numerical values of cards, all picture cards valued at 10, and aces at 11 or 1 depending on whether the total score is greater than 21).<br> The value is displayed clearly and helps users to understand their score.<br> Dealer score is hidden until the player "sticks".   | Pass   |
| Running score of the number of hands won by each | This section appears after the first hand is played.<br>The section remains in place if the user opts to "Reshuffle deck and start again", where it keeps the names, but resets the score to zero.   | Pass   |
| End of deck options  | When the game runs out of the 52 cards generated for a deck, it offers a choice to exit the game and start again (which reloads the game and requires a new user name to be entered) or to add on a new, freshly shuffled, deck. <br>Selection of a new deck retains all other features (current cards in play, user name and running total).   | Pass   |
| Exit game and start over  | When clicked the user is taken straight back to the welcome page and will be required to re-enter their name when they want to play. <br>The user has full access to all features which were available to them initially.   | Pass   |

### Web developer tools
#### Lighthouse
The results for the game from Lighthouse are shown:


### Bug fixes
So far as I have been able to find, the game currently runs bug free. There were many bugs to sort along the development journey:
- The game itself was extensively tested, including (as required) with a modified deck. The hardest issue and main source of bugs to get the game working was dealing with the Aces correctly. A log of the bugs and the fixes are shown below.
- The other issues that arose were linked with how to suitably handle running out of cards. This highlighted the issues of holding the shuffled deck as a global variable (done initially due to the large number of functions requiring access to it. Trying to append a new shuffled deck to this did not work, but rather than crashing the programme, was causing no cards to be popped from the end and the deck remaining as 52 cards throughout. To solve this, I utilised the div I had created initially with the intention of using it for game play graphics and to store the shuffled deck there. I tried storing it as a string, but this caused problems for accessing the cards themselves for the game. Creating a deck now appends each card as a separate div within the cards-pile. These are then addressed as child elements and are handled as such. Some refactoring of code to use this new format rather than the previous method of using ‘pop’ to draw cards was required. This fix then allowed for new decks to be made and appended ahead of the remaining cards whenever required (initially coded as automatic and then changed to be a user decision).
- On deployment to GitHub pages, the background and the back of card images did not render correctly. These were fixed by adding two fullstops before the "/" in the file paths.
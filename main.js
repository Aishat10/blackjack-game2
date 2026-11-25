/* 
Lesson 12a: Solving cards problem with an array

1. Create a new array - cards - that contains firstCard and secondCard
2. Refer to the cards array when rendring out the cards

Lesson 12b: Push a new card to the array 

1. Push the card to the cards array
*/
/* 
Lesson 14: Use a loop to render cards

1. Create a for loop that renders out all the cards instead of just two
*/
/* 
Lesson 15: How to avoid hard code card values / Use a function to set the card value

1. Create a function getRandomCard(), that always return the number 5
2. Use getRandomCard() to set the value of firstCard and secondCard
3. Then use the getRandomCard() to set the value of card as well
*/
/* 
Lesson 16: Make getRandomCard() work

1. Make this function return a random number between 1 and 13
*//* 
Lesson 17: Complete getRandomCard() function

1. if 1     ->  return 11
   if 11-13  -> return 10  
*/
/* 
Lesson 18: Assign values in the startGame function

 1. isAlive = true
 2. Generate two random numbers
 3. Re-assign the cards and sum variables so that the game can start
/* 
Lesson 19: Only trigger newCard() if you're allow to

1. Only allow the player to get a new card if she IS alive and does NOT have Blackjack 
   i.e if isAlive is true and if hasblackjack is false

*/
/* 
Lesson 20: Object intro

1. Create a paragraph with an id of "player-el"
2. Create the player object. Give it two keys, name and chips and set their values.
3. Grab ahold of player-el paragraph and store it in a variable called playerEl
4. Render the player's name and chips in playerEl
*/

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let sum = 0
let cards = []  //Array - Ordered list of item
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// let nom = "Aishat"
// let prize = 150


let player = {
   name: "Aishat",
   chips: 200,
   //method on object. it is the function that attach to object
   niceToMeetYou: function(){
    console.log("hi my name is" + player.name + "i want" + player.chips + " please");
    
   }
}
player.niceToMeetYou()

playerEl.textContent = player.name+ ": $" + player.chips


function getRandomCard() {
    let randomcard = Math.floor(Math.random()*13) + 1
    if(randomcard > 10){
        return 10
    }else if(randomcard === 1){
        return 11
    }else{
        return randomcard
    }
}




function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // Render out firstCard and secondCard
    cardsEl.textContent = "cards: " 
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    for(let i = 0; i < cards.length; i = i + 1){
     cardsEl.textContent += cards[i] + '  '
    }
        
        
    // Render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤔";
    } else if (sum === 21) {
        message = "You've got Balckjack! 🥳";
        hasBlackjack = true
    } else {
        message = "You're out of the game! 😭";
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if(isAlive === true && hasBlackjack === false){
            let card = getRandomCard()
    sum += card
    
    cards.push(card)

    
    renderGame()
    }
    
}





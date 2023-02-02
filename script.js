let sumOfCards=document.getElementById("sum")
let showCards=document.getElementById("cards")
let gameStatus=document.getElementById("game-status")
let blackJack=false
let isAlive=false
let cardArray=[]

function randomNumber(){
    let number= Math.floor(Math.random()*13)+1
    if (number===1){
        return 11
    }else if (number>10){
        return 10
    }else{
        return number
    }
}
function startGame(){
    isAlive=true
    firstCard=randomNumber()
    secondCard=randomNumber()
    cardArray=[firstCard, secondCard]
    sum=firstCard + secondCard
    renderGame()}

    function renderGame(){
        showCards.textContent="Cards: "
        for (i=0; i<cardArray.length; i++){
            showCards.textContent+= cardArray[i] + " " }
           sumOfCards.textContent="Sum: " + sum 
            if (sum<21){
               gameStatus.textContent="Do you want a new card?"
            }
            else if (sum===21){
               gameStatus.textContent="You have got a blackjack"
               blackJack=true
            }
            else{
               gameStatus.textContent="Sorry, you are out of the game!"
               isAlive=false
            }
    }
    
    


    function newGame(){
        if (isAlive===true && blackJack===false) {
            let card=randomNumber()
            cardArray.push(card)
            sum+=card
            renderGame()
        }
        
    }


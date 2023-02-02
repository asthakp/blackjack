let sumOfCards=document.getElementById("sum")
let showCards=document.getElementById("cards")
let gameStatus=document.getElementById("game-status")



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
    firstCard=randomNumber()
    secondCard=randomNumber()
    let cardArray=[firstCard, secondCard]
    // for (i=0; i<cardArray.length; i++){
    //     let sum=0
         sum=cardArray[0]+cardArray[1]
         sumOfCards.textContent+=sum
         showCards.textContent+= " " + cardArray[0] + " " + cardArray[1]
         if (sum<21){
            gameStatus.textContent="Do you want a new card?"
         }
         else if (sum===21){
            gameStatus.textContent="You have got a blackjack"
         }
         else{
            gameStatus.textContent="Sorry, you are out of the game!"
         }

}
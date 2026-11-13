let firstcard=10
let secondcard=11
let sum=firstcard+secondcard
console.log(sum)
let isBlackjack=false
let isAlive=true
let message=""

// logic for blackjack game
let messageEl=document.getElementById("message-el")


//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")



let cardEl=document.getElementById("card-el")



function startGame(){
        cardEl.textContent="Cards: "+firstcard+" "+secondcard
        sumEl.textContent="Sum: "+sum
        if(sum<=20){
            message=("you wanna draw a card")
        }else if (sum===21){
            message=("wow you've got blackjack")
            isBlackjack=true
        }else{
            message=("sorry you are out of game ")
            isAlive=false
        }

        messageEl.textContent=message

        

}

function newCard(){

    
}
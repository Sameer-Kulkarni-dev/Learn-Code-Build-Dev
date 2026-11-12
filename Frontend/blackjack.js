let firstcard=10
let secondcard=11
let sum=firstcard+secondcard
console.log(sum)
let isBlackjack=false
let isAlive=true
let message=""

// logic for blackjack game

if(sum<=20){
    message=("you wanna draw a card")
}else if (sum===21){
    message=("wow you'hv got blackjack")
    isBlackjack=true
}else{
    message=("sorry you are out of game ")
    isAlive=false
}

console.log(message)
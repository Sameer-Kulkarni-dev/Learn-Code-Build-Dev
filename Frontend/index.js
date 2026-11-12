// // let count=5
// // console.log(count)

// let myage = 22
// console.log(myage)

// let myage =1

// let humandogratio=7
// let dogage=myage*humandogratio
// console.log(dogage)

//  let bonuspoints=50
//  console.log(bonuspoints)

//  bonuspoints=bonuspoints+50
//  console.log(bonuspoints)

//  bonuspoints=bonuspoints-75
//  console.log(bonuspoints)

//  bonuspoints=bonuspoints+45
//  console.log(bonuspoints)
//------------------------------------------------------------------------------------------
// let name="arjun"

// let greeting= "hi my name is "

// let mygreeting=greeting+name
// console.log(mygreeting)
//---------------------------------------------------------------------------------------------
// console.log(4+5)
// console.log("5"+5)
// console.log("7"+"5")
// console.log(100+"100")
//-------------------------------------------------------------------------------------------------
// // escape charaters
// // 1. Handling quotes inside quotes
// let dialogue = "The instructor said, \"FastAPI is great!\"";
// console.log(dialogue);
// // Output: The instructor said, "FastAPI is great!"

// // 2. Formatting text with new lines
// let list = "Shopping:\n1. Apples\n2. Oranges";
// console.log(list);
// // Output: 
// // Shopping:
// // 1. Apples
// // 2. Oranges
//---------------------------------------------------------------------------------------------------
// let firstname="vishanu "
// let lastname="joshi"
// let fullname=firstname+lastname
// //console.log(fullname)

// function greetvishnu(){
//     console.log(fullname)
// }

// greetvishnu()
//----------------------------------------------------------------------------------------------------
// let mypoints=3

// function add3points(){
//     mypoints+=3
// }

// function remove1point(){
//     mypoints-=1

// }

// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()


// console.log(mypoints)
//--------------------------------------------------------------------------------

// let age=22
// if(age>=22){
//     console.log("welcome!!!")
// }else {
//     console.log("you are not allowed to enter the club")
// }
//------------------------------------------------------------------------------------

// let age=1001
// if(age<100){
//     console.log("not eligible")
// }else if(age===100) {
//     console.log("here is your birthday card from the king")
// }else if(age>100){
//     console.log("not eligible you have already gotten one")
// }
//-------------------------------------------------------------------------------------------------

// boolean 

let isDiscountapplied=true

function processorder(){
    if(isDiscountapplied){
        console.log("discount applied to food order")
        isDiscountapplied=false
    }else{
        console.log("no discount applied")
    }
}
processorder()
processorder()
// // Step 1: Set the initial count to 0
// let count = 0;

// // Step 2: Grab the HTML elements using their IDs
// const countEl = document.getElementById("count-el");
// const incrementBtn = document.getElementById("increment-btn");

// // Step 3: Listen for a click on the button
// incrementBtn.addEventListener("click", function() {
//     // Increase the count variable by 1
//     count += 1; 
    
//     // Update the text on the webpage to show the new count
//     countEl.innerText = count; 
// });


//-------------------------------------------------------------------------------------------//

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)
count=0
function increment(){
    count=count+1
    countEl.innerText=count
    

}

function save(){
    let countstr=count+" - "
    //saveEl.innerText+=countstr
    saveEl.textContent+=countstr
}
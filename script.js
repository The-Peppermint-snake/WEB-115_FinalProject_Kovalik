//  to-do
//     -add cursors to the store    
//          -append as children of the shop div
//          -add store css class when doing it
//     -figure out how to import shopitems
//         -where would I import to?
//     -hover event shows the discription text for each item (tool tip?)
//     -interval functions for the cursors that update total cookies
//     -fancy css for the cursors 
//         -want them to surrond the cookie Picture 
//             -static at first maybe  try to make them move
//      -update reset button to include inventory
//      -for loop after page refresh to add inventory items back



const cookie = document.getElementById("cookie");
const inventory = document.getElementById("inventory");
const cookieCounter = document.getElementById("cookieCounter");
const resetButton = document.getElementById("reset");
// const chocChip = document.getElementById("chip");
// const doubleChoc = document.getElementById("double");
// const sugar = document.getElementById("sugar")

//import {chocChipCursor,doubleChocCursor,sugarCursor} from "shopItems.js";

cookieCounter.innerHTML = "Your total cookies are: " + Number(localStorage.getItem(cookieStore))

resetButton.addEventListener("click", function() {
    localStorage.setItem(cookieStore, 0)
    cookieCounter.innerHTML = "Your total cookies are: " + Number(localStorage.getItem(cookieStore))
})

cookie.addEventListener('click', function() {
    cookie.classList.add('spin');
    let newNum = Number(localStorage.getItem(cookieStore)) + 1
    totalCookie = localStorage.setItem(cookieStore, newNum)
    cookieCounter.innerHTML = "Your total cookies are: " + newNum;
});
cookie.addEventListener('animationend', function() {
	cookie.classList.remove('spin');
});





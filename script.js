//  to-do
//     -interval functions for the cursors that update total cookies
//     -fancy css for the cursors 
//         -want them to surrond the cookie Picture 
//             -static at first maybe try to make them move
//      -update reset button to include inventory
//      -for loop after page refresh to add inventory items back
//      -add inventory to local storage


const cookie = document.getElementById("cookie");
const inventoryDiv = document.getElementById("inventoryDiv");
const cookieCounter = document.getElementById("cookieCounter");
const resetButton = document.getElementById("reset");
const shopDiv = document.getElementById("store")
let inventory = []

import {shopArray} from "./shopItems.js";
for (let i = 0; i < shopArray.length; i++) {
    let newDiv = document.createElement('div');
    let newImg = document.createElement("img")
    let newText = document.createElement("span")
    newImg.src = shopArray[i].img
    newImg.classList.add("shopImage")
    newDiv.classList.add("tooltip")
    newImg.addEventListener("click", function() {
        let currentCookie = Number(localStorage.getItem("cookies"))
        let newCookie = currentCookie - shopArray[i].cost
        if (newCookie < 0) {
            window.alert("You need more cookies!")
        } else {
            inventory.push(shopArray[i])
            let inventoryStore;
            inventoryStore = localStorage.setItem("inventory", JSON.stringify(inventory));
            let totalCookie = localStorage.setItem("cookies", newCookie)
            cookieCounter.innerHTML = "Your total cookies are: " + newCookie;
        }
    })
    newText.classList.add("tooltiptext")
    newText.innerHTML = shopArray[i].description
    newDiv.appendChild(newImg)
    newDiv.appendChild(newText)
    shopDiv.appendChild(newDiv)
}

cookieCounter.innerHTML = "Your total cookies are: " + Number(localStorage.getItem("cookies"))

resetButton.addEventListener("click", function() {
    localStorage.setItem("cookies", 0)
    localStorage.setItem("inventory", [])
    cookieCounter.innerHTML = "Your total cookies are: " + Number(localStorage.getItem("cookies"))
})

cookie.addEventListener('click', function() {
    cookie.classList.add('spin');
    let newNum = Number(localStorage.getItem("cookies")) + 1
    let totalCookie = localStorage.setItem("cookies", newNum)
    cookieCounter.innerHTML = "Your total cookies are: " + newNum;
});
cookie.addEventListener('animationend', function() {
	cookie.classList.remove('spin');
});
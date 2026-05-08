//  to-do
//      -interval functions for the cursors that update total cookies
//      -for loop after page refresh to add inventory items back

const cookie = document.getElementById("cookie");
const inventoryDiv = document.getElementById("inventoryDiv");
const cookieCounter = document.getElementById("cookieCounter");
const resetButton = document.getElementById("reset");
const shopDiv = document.getElementById("store")

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
            let inventory = JSON.parse(localStorage.getItem("inventory"))
            inventory.push(shopArray[i].id)
            localStorage.setItem("inventory", JSON.stringify(inventory));
            localStorage.setItem("cookies", newCookie)
            cookieCounter.innerHTML = "Your total cookies are: " + newCookie;
            let iImg = document.createElement("img");
            iImg.src = shopArray[i].img;
            iImg.classList.add("inventoryImage")
            inventoryDiv.appendChild(iImg)
            setInterval(function () {let newNum = Number(localStorage.getItem("cookies")) + 1;
                                    localStorage.setItem("cookies", newNum);
                                    cookieCounter.innerHTML = "Your total cookies are: " + newNum;}, shopArray[i].interval)
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
    localStorage.setItem("inventory", JSON.stringify([]))
    cookieCounter.innerHTML = "Your total cookies are: " + Number(localStorage.getItem("cookies"))
    window.location.reload();
})

cookie.addEventListener('click', function() {
    cookie.classList.add('spin');
    let newNum = Number(localStorage.getItem("cookies")) + 1;
    let totalCookie = localStorage.setItem("cookies", newNum);
    cookieCounter.innerHTML = "Your total cookies are: " + newNum;
});

cookie.addEventListener('animationend', function() {
	cookie.classList.remove('spin');
});

window.addEventListener("load", function() {
    let iArray = JSON.parse(localStorage.getItem("inventory"));
    for (let i = 0; i < iArray.length; i++) {
        let iImg = document.createElement("img");
        iImg.src = shopArray[iArray[i]].img;
        iImg.classList.add("inventoryImage")
        inventoryDiv.appendChild(iImg)
        setInterval(function () {let newNum = Number(localStorage.getItem("cookies")) + 1;
                        localStorage.setItem("cookies", newNum);
                        cookieCounter.innerHTML = "Your total cookies are: " + newNum;}, shopArray[i].interval)

    }
})
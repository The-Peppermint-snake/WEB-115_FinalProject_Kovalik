const cookie = document.getElementById("cookie")
const inventory = document.getElementById("inventory")
const cookieCounter = document.getElementById("cookieCounter")
let totalCookie = localStorage.setItem(cookieStore, 0)
console.log(localStorage.getItem(cookieStore))
cookieCounter.innerHTML = "Your total cookies are: " + totalCookie

cookie.addEventListener('click', () => {
    cookie.classList.add('spin');
    Number(localStorage.getItem(cookieStore)) + 1
    cookieCounter.innerHTML = "Your total cookies are: " + Number(totalCookie)
});
cookie.addEventListener('animationend', ()=>{
	cookie.classList.remove('spin');
});

//total cookies - displayed

class inventory_items {
    constructor() {
        //image
        //benifit
        //interval
    }
    //add/display to inventory
}

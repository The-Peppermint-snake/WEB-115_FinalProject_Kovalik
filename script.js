const cookie = document.getElementById("cookie");
const inventory = document.getElementById("inventory");
const cookieCounter = document.getElementById("cookieCounter");
cookieCounter.innerHTML = "Your total cookies are: " + 0


cookie.addEventListener('click', () => {
    cookie.classList.add('spin');
    let newNum = Number(localStorage.getItem(cookieStore)) + 1
    totalCookie = localStorage.setItem(cookieStore, newNum)
    cookieCounter.innerHTML = "Your total cookies are: " + newNum;
});
cookie.addEventListener('animationend', ()=>{
	cookie.classList.remove('spin');
});

//total cookies - displayed

class inventory_items {
    constructor(img,interval,cost) {
        this.img = img;
        this.interval = interval;
        this.cost = cost
        //benifit
    }
    //add/display to inventory
}

let basicCursor = new inventory_items("images/cookieCursor1.png",10,20)

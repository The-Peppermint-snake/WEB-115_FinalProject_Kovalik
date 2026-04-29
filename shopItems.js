class inventory_items {
    constructor(img,interval,cost,discription) {
        this.img = img;
        this.interval = interval;
        this.cost = cost;
        this.discription = discription;
        //event for adding inventory
        //hover event shows the discription 
    }
    //add/display to inventory
}

let chocChipCursor = new inventory_items("images/cookieCursor1.png",10,20,"This basic chocolate cookie will click every 10 seconds")
let doubleChocCursor = new inventory_items("images/cookieCursor2.png", 8, 40, "This double chocolate chip cursor will click every 8 seconds")
let sugarCursor = new inventory_items("images/cookieCursor3.png", 6, 60, "This fresh sugar cookie will click every 6 seconds")
const store = document.getElementById("store")




export {chocChipCursor,doubleChocCursor,sugarCursor};

// sugar.addEventListener("click", function() {
//     totalCookie = localStorage.getItem(cookieStore);
//     totalCookie -= 10
//     console.log(totalCookie)
// })
class shopItem {
    constructor(img,interval,cost,description) {
        this.img = img;
        this.interval = interval;
        this.cost = cost;
        this.description = description;
    }
}

let chocChipCursor = new shopItem("images/cookieCursor1.png",10,20,"This super duper basic chocolate cookie will click every 10 seconds. Costs: 20");
let doubleChocCursor = new shopItem("images/cookieCursor2.png", 8, 40, "This double chocolate chip cursor will click every 8 seconds. Costs: 40");
let sugarCursor = new shopItem("images/cookieCursor3.png", 6, 60, "This fresh sugar cookie will click every 6 seconds. Costs: 60");

let shopArray = [chocChipCursor,doubleChocCursor,sugarCursor];

export {shopArray};
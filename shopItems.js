class shopItem {
    constructor(img,cost,description, id) {
        this.img = img;
        this.cost = cost;
        this.description = description;
        this.id = id
    }
}

class autoClicker extends shopItem {
    constructor(img,interval,cost, description, id) {
        super(img,cost, description, id);
        this.interval = interval;
    }
}

let chocChipCursor = new autoClicker("images/cookieCursor1.png",10,20,"This super duper basic chocolate cookie will click every 10 seconds. Costs: 20",0);
let doubleChocCursor = new autoClicker("images/cookieCursor2.png", 8, 40, "This double chocolate chip cursor will click every 8 seconds. Costs: 40", 1);
let sugarCursor = new autoClicker("images/cookieCursor3.png", 6, 60, "This fresh sugar cookie will click every 6 seconds. Costs: 60", 2);

let shopArray = [chocChipCursor,doubleChocCursor,sugarCursor];

export {shopArray};
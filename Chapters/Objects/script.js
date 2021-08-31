function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths
}
Plan.prototype.calcAnnual = function(percentIfDisc) {
    var bestPrice = this.price
    var now = new Date ()
    var thisMo = now.getMonth
    for (let i = 0; i<this.discountMonths.length; i++) {
        if (this.discountMonths[i] === thisMo) {
            bestPrice = this.price * percentIfDisc
            break
        }
    }
}
var plan1
function createObject() {
    plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [6,7,8])
}
function checkProperty1() {
    var propertyExists = "price" in plan1
    document.getElementById("check1").innerHTML = propertyExists
}
function checkProperty2() {
    var propertyExists = "location" in plan1
    document.getElementById("check2").innerHTML = propertyExists
}
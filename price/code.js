

// @nikeedev @xNoobplays123

let product_list = document.querySelector(".image-left")

class Product {
    name
    info
    price
    constructor(name, info, price, path) {
        this.name = name;
        this.info = info;
        this.price = price;

        product_list.innerHTML += '<img src="' + path + '" alt=' + name + '><p>' + name + ' - ' + price + ' kr</p>'


    }

    showInfo() {
        // Do something to show information about the product...
        console.log(this.info);
    }
}

/*

<img src="../src/box.png" alt="">
<p>This is a black box - 45 kr</p>

*/


const products = [
new Product("Rislunsj Jordbær", "128 kcal, Allergier: Inneholder melk", "25", "https://bilder.ngdata.no/7038010035463/meny/large.jpg")]




let active = false;
let information;

let icon = document.getElementById("info-icon");


function infoClicked() {

    if (active == true) {
        icon.src = "../src/square-check.svg";
        active = false
        information = false

    } else if (active == false) {
        icon.src = "../src/square-regular.svg";
        active = true
        information = true
    }
}


function update() {

    if (active == true) {
        icon.src = "../src/square-check.svg";
    } else if (active == false) {
        icon.src = "../src/square-regular.svg";

    }
    requestAnimationFrame(update)
}

requestAnimationFrame(update)
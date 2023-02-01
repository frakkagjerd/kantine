let product_list = document.querySelector(".products")

class Product {
    name
    info
    price
    constructor(name, info, price, path, style) {
        this.name = name;
        this.info = info;
        this.price = price;
        let file_name = path.replace(".jpg", "")

        product_list.innerHTML += `<br><div style="display: flex; align-items: center; justify-content: center;" id="${file_name}"><img style='${style}' src='../products/${path}' alt='${name + " - " + info}'><p style="display:block; float:right">${name} - ${price} kr</p></div><div style="margin-left:10%; margin-right: 10%; height: 5px; width: 80%; background-color: #777777;"></div>`

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


const products = []

products.push(new Product("TINE® isTe Fersken 1/4 liter", "33 kcal, Allergier: Ingen", "25", "iste_fersken.jpg", "height:200px; text-align:center"))

products.push(new Product("Rislunsj Jordbær", "140 kcal, Allergier: Inneholder melk", "13", "ris_lunsj_jordbaer.jpg", "height:200px"))

products.push(new Product("IsKaffe - Mocha", "40 kcal, Allergier: Inneholder melk", "25", "iskaffe_mocha.jpg", "height:200px"))

products.push(new Product("Litago Jordbær", "55 kcal, Allergier: Inneholder melk", "20", "litago_jordbaer.jpg", "height:200px"))

products.push(new Product("Litago Sjokolade", "59 kcal, Allergier: Inneholder melk", "20", "litago_sjokolade.jpg", "height:200px"))

products.push(new Product("Nudler med kjøttsmak", "95 kcal, Allergier: Inneholder hvete", "25", "nudler_kjoett.jpg", "height:200px"))

products.push(new Product("Tine Kakaomelk", "45 kcal, Allergier: Inneholder melk", "25", "tine_kakao.jpg", "height:200px"))



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



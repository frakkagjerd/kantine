let product_list = document.querySelector(".image-left")

class Product {
    name
    info
    price
    constructor(name, info, price, path, style) {
        this.name = name;
        this.info = info;
        this.price = price;
        let file_name = path.replace(".png", "")

        product_list.innerHTML += `<br><div id="${file_name}"><img style='${style}' src='../products/${path}' alt='${name + " - " + info}'><p>${name} - ${price} kr</p></div>`

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
products.push(new Product("Rislunsj Jordbær", "128 kcal, Allergier: Inneholder melk", "25", "ris_lunsj_jordbaer.png", "height:200px"))
products.push(new Product("IsKaffe - Mocha", "128 kcal, Allergier: Inneholder melk", "25", "iskaffe_mocha.png", "height:200px"))
products.push(new Product("Litago Jordbær", "128 kcal, Allergier: Inneholder melk", "25", "litago_jordbaer.png", "height:200px"))
products.push(new Product("Litago Sjokolade", "128 kcal, Allergier: Inneholder melk", "25", "litago_sjokolade.png", "height:200px"))
products.push(new Product("Nudler med kjøttsmak", "128 kcal, Allergier: Inneholder hvete", "25", "nudler_kjoett.png", "height:200px"))
products.push(new Product("Tine Kakaomelk", "128 kcal, Allergier: Inneholder melk", "25", "tine_kakao.png", "height:200px"))



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



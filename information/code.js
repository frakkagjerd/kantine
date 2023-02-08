let product_list = document.querySelector(".products")

class Product {
    name
    info
    price
    constructor(name, info, price, path, style) {
        this.name = name;
        this.info = info;
        this.price = price;
        this.path = path;
        let file_name = path + ".png"

        product_list.innerHTML += `<br><div style="display: flex; align-items: center; justify-content: center;" id="${file_name}"><img style='${style}' src='../products/${file_name}' alt='${name + " - " + info}'><p style="display:block; float:right">${name} - ${price} kr</p></div><div style="margin-left:10%; margin-right: 10%; height: 5px; width: 80%; background-color: #777777;"></div>`

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

products.push(new Product("Appelsin Juice", "44 kcal, Allergier: Ingen", "?", "appelsin-juice", "height:200px; text-align:center"))

products.push(new Product("Eple Juice", "45 kcal, Allergier: Ingen", "?", "eple-juice", "height:200px; text-align:center"))

products.push(new Product("Billys Pizza", "44 kcal, Allergier: gluten, melk", "?", "billys", "height:200px; text-align:center"))

products.push(new Product("Go'Morgen® Skogsbær", "119 kcal, Allergier: hvete, melk", "?", "gomorgen-skogsbær", "height:200px; text-align:center"))

products.push(new Product("Go'Morgen® Vanilje", "123 kcal, Allergier: hvete, melk", "?", "gomorgen-vanilje", "height:200px; text-align:center"))

products.push(new Product("IsKaffe - Cappuccino", "56 kcal, Allergier: melk", "?", "iskaffe-cappuccino", "height:200px"))

products.push(new Product("IsKaffe - Mocha", "40 kcal, Allergier: melk", "?", "iskaffe-mocha", "height:200px"))

products.push(new Product("IsKaffe - Nocciola", "42 kcal, Allergier: melk", "?", "iskaffe-nocciola", "height:200px"))

products.push(new Product("TINE® IsTe Fersken", "29 kcal, Allergier: Ingen", "?", "iste-fersken", "height:200px"))

products.push(new Product("Lettmelk Kakao", "45 kcal, Allergier: melk", "?", "lettmelk-kakao", "height:200px"))

products.push(new Product("Litago Jordbær", "55 kcal, Allergier: melk", "?", "litago-jordbær", "height:200px"))

products.push(new Product("Litago Sjokolade", "46 kcal, Allergier: melk", "?", "litago-sjokolade", "height:200px"))

products.push(new Product("Nudler med kjøttsmak", "95 kcal, Allergier: gluten, selleri og soya", "25", "nudler-kjøtt", "height:200px"))

products.push(new Product("Nudler med kyllingsmak", "91 kcal, Allergier: gluten, selleri og soya", "25", "nudler-kylling", "height:200px"))

products.push(new Product("Risgrøt", "105 kcal, Allergier: melk", "?", "risgrøt", "height:200px"))

products.push(new Product("Rislunsj Bringebær", "140 kcal, Allergier: melk", "13", "rislunsj-bringebær", "height:200px"))

products.push(new Product("Rislunsj Jordbær", "140 kcal, Allergier: melk", "13", "rislunsj-jordbær", "height:200px"))

products.push(new Product("Bestikk", "Laget av plastikk", "1", "bestikk", "height:200px"))
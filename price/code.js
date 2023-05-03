console.log(
  "Made with " + "%c\u2764",
  "color:#fc4444; font-family: ; font-size: 25px;",
  "by Nikita, Simon, Aleksander and Odin!"
);

let product_list = document.querySelector(".products");

class Product {
  name;
  info;
  price;
  elem = document.createElement("div");
  infos = document.createElement("div");

  constructor(name, info, price, path, style) {
    this.name = name;
    this.price = price;
    this.path = path;
    let file_name = path + ".png";
    let temp = `<br>
      <div style="display: flex; align-items: center; justify-content: center; font-family: 'Roboto';" id="${file_name}">
        <img style='${style}' src='../products/${file_name}' alt='${name} - ${info}'>
        <div style='display: grid;'>
          <p style="display:block; float:right">${name} - ${price} kr</p>
          <br>
          <p style="display:var(--blocker); font-size: x-large;" id="prod_info">${info}</p>
        </div>
      </div>
      
      <div style="margin-left:10%; margin-right: 10%; margin-bottom: 5%; width: 5px; width: 80%; background-color: #777777;"></div>`.trim();

    product_list.innerHTML += temp;
  }
}

let WeeklyProduct = document.querySelector(".weekly");

class SpecialProduct {
  name;
  info;
  price;
  constructor(name, info, price, path, style) {
    this.name = name;
    this.info = info;
    this.price = price;
    this.path = path;
    let file_name = path + ".webp";

    WeeklyProduct.innerHTML += `
    <br>
    <div style="border: 6px solid; border-radius: 25px; width: 660px; height: 220px; margin: auto; display: flex; align-items: center; justify-content: center; font-family: 'Roboto';" id="${file_name}">
      <img style='${style} padding-right: 30px; ' src='../products/${file_name}' alt='${name} - ${info}'>
      <p style="display:block; float:right;">${name} - ${price} kr</p>
      <img src="../src/images/UkensProdukt.png" style='width: 150px; position: relative; top: -100px; right: -40px; transform: rotate(10deg);' class='UkensMeny'>
    </div>
    <div style="margin-left:10%; margin-right: 10%; width: 5px; width: 80%; background-color: #777777;"></div>`;
  }
}

/* ---- Weekly Product ----*/

let width = 275;

let style = `width: ${width}px;`;
const weekly = [];

weekly.push(new SpecialProduct("Brownies", "2077 kcal, Allergier: Gluten", "20", "brownies", `${style}`));

weekly.push(new SpecialProduct("Brownies2", "657890 kcal, Allergier: Gluten", "20", "brownies", `${style}`));

/* ---- Products ---- */

var style_wanted = "width: 250px";

var width_wanted = 0;

const products = [];

{ 
  products.push(new Product("Appelsinjuice", "44 kcal, Allergier: Ingen", "20", "appelsin-juice", `${style_wanted}`));

  products.push(new Product("Eplejuice", "45 kcal, Allergier: Ingen", "20", "eple-juice", `${style_wanted}`));

  products.push(new Product("Billys Pizza", "44 kcal, Allergier: Gluten, melk", "23", "billys", `${style_wanted}`));

  products.push(new Product("Go'Morgen® Skogsbær", "119 kcal, Allergier: hvete, melk", "13", "gomorgen-skogsbær", `${style_wanted}`));

  products.push(new Product("Go'Morgen® Vanilje", "123 kcal, Allergier: hvete, melk", "13", "gomorgen-vanilje", `${style_wanted}`));

  products.push(new Product("IsKaffe - Cappuccino", "56 kcal, Allergier: melk", "18", "iskaffe-cappuccino", `${style_wanted}`));

  products.push(new Product("IsKaffe - Mocha", "40 kcal, Allergier: melk", "18", "iskaffe-mocha", `${style_wanted}`));

  products.push(new Product("IsKaffe - Nocciola", "42 kcal, Allergier: melk", "18", "iskaffe-nocciola", `${style_wanted}`));

  products.push(new Product("TINE® IsTe Fersken", "29 kcal, Allergier: Ingen", "20", "iste-fersken", `${style_wanted}`));

  products.push(new Product("Lettmelk Kakao", "45 kcal, Allergier: melk", "10", "lettmelk-kakao", `${style_wanted}`));

  products.push(new Product("Litago Jordbær", "55 kcal, Allergier: melk", "20", "litago-jordbær", `${style_wanted}`));

  products.push(new Product("Litago Sjokolade", "46 kcal, Allergier: melk", "20", "litago-sjokolade", `${style_wanted}`));

  products.push(new Product("Nudler med kjøttsmak", "95 kcal, Allergier: Gluten, selleri og soya", "25", "nudler-kjøtt", `${style_wanted}`));

  products.push(new Product("Nudler med kyllingsmak", "91 kcal, Allergier: Gluten, selleri og soya", "25", "nudler-kylling", `${style_wanted}`));

  products.push(new Product("Risgrøt", "105 kcal, Allergier: melk", "30", "risgrøt", `${style_wanted}`));

  products.push(new Product("Rislunsj Bringebær", "140 kcal, Allergier: melk", "13", "rislunsj-bringebær", `${style_wanted}`));

  products.push(new Product("Rislunsj Jordbær", "140 kcal, Allergier: melk", "13", "rislunsj-jordbær", `${style_wanted}`));

  products.push(new Product("Bestikk", "Laget av plastikk", "1", "bestikk", `${style_wanted}`));

}

/* ---- Click Events ----*/

var active = false;

function activate() {
  if (active) {
    active = false;
    document.querySelector(".info").src = "./../src/icons/info-icon-black.svg";

    document.querySelector(":root").style.setProperty("--blocker", "none");
    
  } else {
    active = true;
    document.querySelector(".info").src = "./../src/icons/info-icon-white.svg";

    document.querySelector(":root").style.setProperty("--blocker", "block");
    
  }
}

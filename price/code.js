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
    let file_name = path + ".webp";
    let temp = document.createElement("template");
    temp.innerHTML = `<br>
      <div style="display: flex; align-items: center; justify-content: center; font-family: 'Roboto';" id="${file_name}">
        <img style='${style}' src='../products/${file_name}' alt='${name} - ${info}'>
        <p style="display:block; float:right">${name} - ${price} kr</p>
      </div>
      <div style="margin-left:10%; margin-right: 10%; width: 5px; width: 80%; background-color: #777777;"></div>`.trim();

    for (let i = 0; i < temp.content.children.length; i++) {
      this.elem.innerHTML += temp.content.children[i].outerHTML;
      product_list.innerHTML += temp.content.children[i].outerHTML;
    }
    this.infos.innerText = info;
  }

  show(bool) {
    if (bool) {
      this.elem.insertBefore(this.infos, this.elem);
    } else if (!bool) {
    }
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

/* ---- Click Events ----*/

var active = false;

function activate() {
  if (active) {
    active = false;
    document.querySelector(".info").src = "./../src/icons/info-icon-black.svg";

    document.querySelector("#appelsin-juice p").innerText = "44 kcal, Allergier: Ingen";

    document.querySelector("#eple-juice p").innerText = "45 kcal, Allergier: Ingen";

    document.querySelector("#billys p").innerText = "44 kcal, Allergier: Gluten, melk";

    document.querySelector("#gomorgen-skogsbær p").innerText = "119 kcal, Allergier: hvete, melk";

    document.querySelector("#gomorgen-vanilje p").innerText = "123 kcal, Allergier: hvete, melk";

    document.querySelector("#iskaffe-cappuccino p").innerText = "56 kcal, Allergier: melk";

    document.querySelector("#iskaffe-mocha p").innerText = "40 kcal, Allergier: melk";

    document.querySelector("#iskaffe-nocciola p").innerText = "42 kcal, Allergier: melk";

    document.querySelector("#iste-fersken p").innerText = "29 kcal, Allergier: Ingen";

    document.querySelector("#lettmelk-kakao p").innerText = "45 kcal, Allergier: melk";

    document.querySelector("#litago-jordbær p").innerText = "55 kcal, Allergier: melk";

    document.querySelector("#litago-sjokolade p").innerText = "46 kcal, Allergier: melk";

    document.querySelector("#nudler-kjøtt p").innerText = "95 kcal, Allergier: Gluten, selleri og soya";

    document.querySelector("#nudler-kylling p").innerText = "91 kcal, Allergier: Gluten, selleri og soya";

    document.querySelector("#risgrøt p").innerText = "105 kcal, Allergier: melk";

    document.querySelector("#rislunsj-bringebær p").innerText = "140 kcal, Allergier: melk";

    document.querySelector("#rislunsj-jordbær p").innerText = "140 kcal, Allergier: melk";

    document.querySelector("#bestikk p").innerText = "Laget av plastikk";
  } else {
    active = true;
    document.querySelector(".info").src = "./../src/icons/info-icon-white.svg";

    document.querySelector("#appelsin-juice p").innerText = "20";

    document.querySelector("#eple-juice p").innerText = "20";

    document.querySelector("#billys p").innerText = "23";

    document.querySelector("#gomorgen-skogsbær p").innerText = "13";

    document.querySelector("#gomorgen-vanilje p").innerText = "13";

    document.querySelector("#iskaffe-cappuccino p").innerText = "18";

    document.querySelector("#iskaffe-mocha p").innerText = "18";

    document.querySelector("#iskaffe-nocciola p").innerText = "18";

    document.querySelector("#iste-fersken p").innerText = "20";

    document.querySelector("#lettmelk-kakao p").innerText = "10";

    document.querySelector("#litago-jordbær p").innerText = "20";

    document.querySelector("#litago-sjokolade p").innerText = "20";

    document.querySelector("#nudler-kjøtt p").innerText = "25";

    document.querySelector("#nudler-kylling p").innerText = "25";

    document.querySelector("#risgrøt p").innerText = "30";

    document.querySelector("#rislunsj-bringebær p").innerText = "13";

    document.querySelector("#rislunsj-jordbær p").innerText = "13";

    document.querySelector("#bestikk p").innerText = "1";
  }
}

const header = document.getElementById("header");


document.body.style.margin = "0";
document.body.style.backgroundColor = "black";



header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.background = "#252b3b";
header.style.color = "white";


const nav = document.createElement("nav");
const ul = document.createElement("ul");

ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.gap = "20px";
ul.style.margin = "0";
ul.style.padding = "0";

const menuItems = ["BLOG", "UPDATES", "RESOURCES", "COMMUNITY"];

menuItems.forEach(text => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    a.textContent = text;
    a.style.color = "white";
    
    li.append(a);
    ul.append(li);
});

nav.append(ul);


const search = document.createElement("input");
search.placeholder = "Search...";
search.style.background = "#374158";
search.style.border = "none";
search.style.padding = "6px 10px";
search.style.borderRadius = "4px";
search.style.color = "white";

const lang = document.createElement("select");

["English", "Русский", "Uzbek   "].forEach(l => {
    const opt = document.createElement("option");
    opt.textContent = l;
    lang.append(opt);
});

lang.style.background = "#1e1f26";
lang.style.color = "white";
lang.style.padding = "5px 10px";
lang.style.borderRadius = "4px";
lang.style.border = "none";


header.append(nav, search, lang);

const content = document.getElementById("content");

content.style.color = "white";


const topImage = document.createElement("img");
topImage.src = "Bg (1).png"; 
topImage.style.width = "100%";
content.append(topImage);


const majorTitle = document.createElement("h2");
majorTitle.textContent = "MAJOR UPDATES";
majorTitle.style.textAlign = "center";
majorTitle.style.marginTop = "40px";
majorTitle.style.marginBottom = "20px";
content.append(majorTitle);


const cards = document.createElement("div");
cards.style.display = "flex";
cards.style.justifyContent = "center";
cards.style.gap = "20px";



updates.forEach(up => {
    const card = document.createElement("div");
    card.style.width = "200px";

    const img = document.createElement("img");
    img.src = up.src;
    img.style.width = "100%";
    img.style.borderRadius = "6px";

    const p = document.createElement("p");
    p.textContent = up.title;
    p.style.textAlign = "center";

    card.append(img, p);
    cards.append(card);
});

content.append(cards);


const block1 = document.createElement("div");
block1.style.background = "#2b3342";
block1.style.margin = "40px auto";
block1.style.padding = "30px";
block1.style.width = "80%";
block1.style.borderRadius = "10px";

const title1 = document.createElement("h3");
title1.textContent = "PGL Antwerp 2022 Champions!";

const img1 = document.createElement("img");
img1.src = "https://i.ibb.co/BzjhWCR/champions.jpg";
img1.style.width = "250px";
img1.style.borderRadius = "6px";
img1.style.float = "left";
img1.style.marginRight = "20px";

const text1 = document.createElement("p");
text1.textContent = "Thousands of screaming fans... (здесь можешь добавить текст)";

block1.append(title1, img1, text1);
content.append(block1);


const block2 = document.createElement("div");
block2.style.background = "#2b3342";
block2.style.margin = "40px auto";
block2.style.padding = "30px";
block2.style.width = "80%";
block2.style.borderRadius = "10px";

const title2 = document.createElement("h3");
title2.textContent = "The stage is set in Antwerp";

const img2 = document.createElement("img");
img2.src = "https://i.ibb.co/80KBHk8/stage.jpg";
img2.style.width = "250px";
img2.style.borderRadius = "6px";
img2.style.float = "left";
img2.style.marginRight = "20px";

const text2 = document.createElement("p");
text2.textContent = "The legends stage was a brutal test...";

block2.append(title2, img2, text2);
content.append(block2);

const footer = document.getElementById("footer");

footer.style.background = "#1e2230";
footer.style.color = "white";
footer.style.padding = "40px 0";
footer.style.fontFamily = "sans-serif";


const wrap = document.createElement("div");
wrap.style.width = "80%";
wrap.style.margin = "0 auto";


const cardsBox = document.createElement("div");
cardsBox.style.display = "flex";
cardsBox.style.justifyContent = "space-between";
cardsBox.style.marginBottom = "50px";


const footerCards = [
    {
        img: "https://i.ibb.co/WVQxpN6/card1.png",
        text: "Some first footer card text..."
    },
    {
        img: "https://i.ibb.co/SNVDJjP/card2.png",
        text: "Some second footer card text..."
    }
];

footerCards.forEach(c => {
    const card = document.createElement("div");
    card.style.width = "48%";
    card.style.background = "#2b3342";
    card.style.padding = "20px";
    card.style.borderRadius = "8px";

    const img = document.createElement("img");
    img.src = c.img;
    img.style.width = "100%";
    img.style.borderRadius = "6px";
    img.style.marginBottom = "10px";

    const p = document.createElement("p");
    p.textContent = c.text;
    p.style.lineHeight = "1.4";

    card.append(img, p);
    cardsBox.append(card);
});

wrap.append(cardsBox);




const nav1 = document.createElement("div");
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.gap = "30px";

const menu = ["BLOG", "UPDATES", "RESOURCES", "COMMUNITY"];

menu.forEach(text => {
    const a = document.createElement("a");
    a.textContent = text;
    a.href = "#";
    a.style.color = "white";
    a.style.textDecoration = "none";
    a.style.fontWeight = "bold";
    nav.append(a);
});

wrap.append(nav);

footer.append(wrap);

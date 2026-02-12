// Text variables (Dutch)
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL =
	"De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";

// Text variables (French)
let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR =
	"La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let title = document.querySelector("#title");
let Subtitle = document.querySelector("#subtitle");
let text = document.querySelector("#text");
console.log(title);
console.log(subtitle);
console.log(text);
let article = document.querySelector(".article");
console.log(article);

//2. Set initial content on load
title.innerText = titleNL;
subtitle.innerText = subtitleNL;
text.innerText = textNL;

//3. Select buttons
let buttonNL = document.querySelector("#btn-nl");
console.log(buttonNL);
let buttonFR = document.querySelector("#btn-fr");
console.log(buttonFR);

//4. Add event listeners
buttonNL.addEventListener("click", function () {
	title.innerText = titleNL;
	subtitle.innerText = subtitleNL;
	text.innerText = textNL;
	buttonNL.disabled = true;
	buttonFR.disabled = false;
});

buttonFR.addEventListener("click", function () {
	title.innerText = titleFR;
	subtitle.innerText = subtitleFR;
	text.innerText = textFR;
	buttonFR.disabled = true;
	buttonNL.disabled = false;
});
//5. Create, configure and append image
let image = document.createElement("img");
image.src = "./appel.jpg";
article.appendChild(image);

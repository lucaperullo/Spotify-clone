async function getAlbums() {
  let search = document.querySelector(".spoti-search").value;
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data);
  displayResults(data.data);
  return data;
}
const displayResults = (data) => {
  let div = document.querySelector("#searchResults");

  div.innerHTML = "";
  data.forEach((element) => {
    let text = document.createElement("div");
    let texty = document.createElement("p");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardContainer = document.createElement("div");
    let containerCardContainer = document.createElement("div");
    cardContainer.classList.add("card-container-spotify");
    containerCardContainer.classList.add("col-8");
    img.classList.add("card-image");
    card.classList.add("card-body");
    texty.classList.add("card-text");
    texty.innerText = `${element.album.title}`;
    text.classList.add("info");
    img.setAttribute("src", element.album.cover);
    img.classList.add("search-result");

    card.appendChild(img);

    text.appendChild(texty);
    card.appendChild(text);
    cardContainer.appendChild(card);
    containerCardContainer.appendChild(cardContainer);
    div.appendChild(containerCardContainer);
  });
};

const cards = document.querySelectorAll(".col-image");

const generateContent_0 = () => {
  window.location.assign(`/pages/hardcoded-0.html`);
};
const generateContent_1 = () => {
  window.location.assign(`/pages/hardcoded-1.html`);
};
const generateContent_2 = () => {
  window.location.assign(`/pages/hardcoded-2.html`);
};
const generateContent_3 = () => {
  window.location.assign(`/pages/hardcoded-3.html`);
};
const generateContent_4 = () => {
  window.location.assign(`/pages/hardcoded-4.html`);
};
const generateContent_5 = () => {
  window.location.assign(`/pages/hardcoded-5.html`);
};
const generateContent_6 = () => {
  window.location.assign(`/pages/hardcoded-6.html`);
};
const generateContent_7 = () => {
  window.location.assign(`/pages/hardcoded-7.html`);
};
const generateContent_8 = () => {
  window.location.assign(`/pages/hardcoded-8.html`);
};
const generateContent_9 = () => {
  window.location.assign(`/pages/hardcoded-9.html`);
};
const generateContent_10 = () => {
  window.location.assign(`/pages/hardcoded-10.html`);
};
const generateContent_11 = () => {
  window.location.assign(`/pages/hardcoded-11.html`);
};
const generateContent_12 = () => {
  window.location.assign(`/pages/hardcoded-12.html`);
};
const generateContent_13 = () => {
  window.location.assign(`/pages/hardcoded-13.html`);
};
const generateContent_14 = () => {
  window.location.assign(`/pages/hardcoded-14.html`);
};
const generateContent_15 = () => {
  window.location.assign(`/pages/hardcoded-15.html`);
};
const generateContent_16 = () => {
  window.location.assign(`/pages/hardcoded-16.html`);
};
const generateContent_17 = () => {
  window.location.assign(`/pages/hardcoded-17.html`);
};
const generateContent_18 = () => {
  window.location.assign(`/pages/hardcoded-18.html`);
};
const generateContent_19 = () => {
  window.location.assign(`/pages/hardcoded-19.html`);
};
const generateContent_20 = () => {
  window.location.assign(`/pages/hardcoded-20.html`);
};
const generateContent_21 = () => {
  window.location.assign(`/pages/hardcoded-21.html`);
};
const generateContent_22 = () => {
  window.location.assign(`/pages/hardcoded-22.html`);
};
const generateContent_23 = () => {
  window.location.assign(`/pages/hardcoded-23.html`);
};

window.onload = function () {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add(`playlist-${i}`);
  }
};

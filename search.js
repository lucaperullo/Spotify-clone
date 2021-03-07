const newAudio = new Audio("");
const categories = [
  6423436964,
  3631248842,
  4135818362,
  878989033,
  1699167521,
  1479489455,
  2578576804,
  65489479,
  1291471565,
  1911222042,
  1934257882,
  1677006641,
  2097558104,
  8282573142,
  4485213484,
  2471369142,
  1631844475,
  2159765062,
  7456464544,
  3801761042,
];
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
  let musicBar = document.querySelector("#player");
  div.innerHTML = "";
  data.forEach((element) => {
    let text = document.createElement("div");
    let texty = document.createElement("p");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardContainer = document.createElement("div");
    let containerCardContainer = document.createElement("div");
    cardContainer.classList.add("card-container-spotify");

    cardContainer.style.width = "12vw";
    containerCardContainer.classList.add(
      "col-xs-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-2"
    );

    containerCardContainer.addEventListener("click", function playAu() {
      newAudio.classList.add("isplaying");

      newAudio.src = `${element.preview}`;

      musicBar.appendChild(newAudio);
      let cover = document.querySelector(".player-cover-img");
      let title = document.querySelector("#player-song-name");
      let titleSmall = document.querySelector("#player-artist-name");
      title.innerText = `${element.title}`;
      titleSmall.innerText = `${element.artist.name}`;
      cover.style.backgroundImage = `url(${element.album.cover_xl})`;
      newAudio.play !== false ? newAudio.play() : newAudio.pause();
    });
    img.classList.add("card-image");
    card.classList.add("card-body");
    texty.classList.add("card-text");
    texty.innerText = `${element.title}`;
    text.classList.add("info");

    img.style.width = "10vw";
    img.setAttribute("src", element.album.cover_xl);
    img.classList.add("search-result");

    card.appendChild(img);

    text.appendChild(texty);
    card.appendChild(text);
    cardContainer.appendChild(card);
    containerCardContainer.appendChild(cardContainer);
    div.appendChild(containerCardContainer);
  });
};

let container = document.querySelector(".browse-all");

const fetchTracklist = async (tracklist) => {
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/" + tracklist
  );
  const data = await response.json();
  const newTracklist = data.data;

  let container = document.querySelector(".container");
  container.innerHTML = "";
  console.log();
  newTracklist.forEach((element) => {
    container.innerHTML += ` <h3 class="section-category font-bold">${element.album.title}</h3>
    <div class="container-fluid">
      <div
        id="recently-played"
        class="row"
        style="width: 100%"
      ><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 music-album-card bg">
      <div class="bgSpotify">
        <div class="divCover">
          <div class="coverImg" style="background-image: url('${element.album.cover_xl}')">
            <div>
              <img aria-hidden="false" draggable="false" loading="lazy" src="${element.album.cover_xl}" alt="">
            </div>
          </div>
          <div class="buttonDiv">
            <button class="playButton d-none">
              <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="3" width="4" height="18" fill="currentColor"></rect>
                <rect x="15" y="3" width="4" height="18" fill="currentColor"></rect>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <a class="${element.album.title}" href="">
            <div class="titleScroll">${element.album.title}</div>
          </a>
          <div class="info">
            <span>${element.album.description}</span>
          </div>
        </div>
      </div>
    </div></div>
    </div>
    `;
  });
};

const generateCategories = () => {
  container.innerHTML = "";
  categories.forEach(async (id) => {
    await showCategories(id);
    async function showCategories(id) {
      const response = await fetch(
        `https://spotify-fetch.herokuapp.com/https://api.deezer.com/playlist/${id}`
      );
      const data = await response.json();

      container.innerHTML += `<img class="col-image img-browse" onclick="fetchTracklist('${data.tracklist}')" src="${data.picture_xl}" alt="${data.title}">`;
      return data;
    }
  });
};
const cards = document.querySelectorAll(".col-image");

(window.onload = function () {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add(`playlist-${i}`);
  }
}),
  generateCategories();

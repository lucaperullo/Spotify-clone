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
  let musicBar = document.querySelector(".music-options");
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

    containerCardContainer.addEventListener("click", function playAu() {
      newAudio.classList.add("isplaying");

      newAudio.src = `${element.preview}`;

      musicBar.appendChild(newAudio);
      let cover = document.querySelector(".cover-img-small");
      let title = document.querySelector(".songbar-title");
      let titleSmall = document.querySelector(".artist-little");
      title.innerText = `${element.title}`;
      titleSmall.innerText = `${element.artist.name}`;
      cover.src = element.album.cover;
      if (newAudio.paused == true) {
        newAudio.play();
      } else {
        newAudio.pause();
      }
    });
    img.classList.add("card-image");
    card.classList.add("card-body");
    texty.classList.add("card-text");
    texty.innerText = `${element.title}`;
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

const generateCategories = () => {
  let container = document.querySelector(".browse-all");
  container.innerHTML = "";
  categories.forEach(async (id) => {
    await showCategories(id);
    async function showCategories(id) {
      const response = await fetch(
        `https://spotify-fetch.herokuapp.com/https://api.deezer.com/playlist/${id}`
      );
      const data = await response.json();
      console.log(data);

      // data.forEach((data) => {
      //   let img = document.createElement("img");
      //   img.classList.add("col-image", "img-browse");
      //   img.src = data.picture_xl;
      //   img.addEventListener("click", function replaceContent() {
      //     container.innerHTML = "";
      //     data.forEach((element) => {
      //       container.innerHTML = ` <header class="sticky-bg">
      //       <div class="header-content">
      //         <div class="text-wrapper-header">
      //           <h1 id="title" style="font-size: 70px" class="font-bold">
      //             Liked Songs
      //           </h1>
      //         </div>
      //       </div>
      //     </header>
      //     <div id="magic-container" class="container-fluid">
      //       <div class="title-seeMore">
      //         <h4 class="font-regular" style="color: white">podcasts</h4>
      //         <a class="seeMoreStyle" href=""
      //           ><span style="color: white; font-size: 14px"
      //             >SEE MORE</span
      //           ></a
      //         >
      //       </div>
      //       <div id="searchResults" class="row"></div>
      //     </div>`;
      //     });
      //   });
      // });
      container.innerHTML += `<img class="col-image img-browse" onclick="generateContent(id)" src=${data.picture_xl} alt="">`;
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

async function getPodcasts() {
  let headerContent = document.querySelector(".sticky-bg");

  let title = document.querySelector("#title");

  let search = "Made for You";
  title.innerText = search;

  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data1 = await response.json();
  const data = data1.data;
  console.log(data1);
  displayPodcasts(data1.data.splice(0, 6));

  headerContent.style.backgroundImage = `url(${data1.data[0].artist.picture_xl})`;
  headerContent.style.backgroundRepeat = "no-repeat";
  headerContent.style.backgroundPosition = "start";
  headerContent.style.backgroundSize = "cover";
  playAudio(data1);
  return data;
}

const displayPodcasts = (data) => {
  let div = document.querySelector("#searchResults");
  let seeMore = document.querySelector(".seeMoreStyle");
  div.innerHTML = "";
  data.forEach((element) => {
    let text = document.createElement("div");
    let texty = document.createElement("p");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardContainer = document.createElement("div");
    let containerCardContainer = document.createElement("div");
    seeMore.addEventListener("click", function name() {});
    cardContainer.classList.add("card-container-spotify", "row");
    containerCardContainer.classList.add(
      "col-xs-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "col-xl-2"
    );
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

async function getTracks(element) {
  const response = await fetch(
    `https://spotify-fetch.herokuapp.com/${element.album.tracklist}`
  );
  const data1 = await response.json();

  console.log(data1.data);

  return data1;
}

const playAudio = (data) => {
  const newData = data.data;
  newData.map((element) => getTracks(element));
};

window.onload = getPodcasts;

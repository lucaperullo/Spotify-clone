async function getAlbums() {
  let search = document.querySelector(".spoti-search").value;
  const response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search, //query
    {
      headers: {
        "x-rapidapi-key": "747030d749msh471c14b186c043cp1cfee9jsn05041c6abfa1",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
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
const submitSearch = () => {
  const input = document.querySelector(".spoti-search");
  console.log(input);
  input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      console.log("hi");

      getAlbums();
    }
  });
};
const albums = [14532191, 14984547, 6966955, 61419582];
async function showAlbums() {
  const response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/album/" +
      albums[Math.floor(Math.random() * 1)], //query
    {
      headers: {
        "x-rapidapi-key": "747030d749msh471c14b186c043cp1cfee9jsn05041c6abfa1",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

async function getAlbums() {
  let search = document.querySelector(".spoti-search").value;
  const response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search, //query
    {
      headers: {
        "x-rapidapi-key": "99c24a2298msh5eccc99e454a6b5p187b5ejsn3147aee2593b",
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
async function toggleArtist23(id) {
  const response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/album/" + id, //query
    {
      headers: {
        "x-rapidapi-key": "5a5e031fd8msh210af9e647b3834p1c116ejsn3b5700d24f69",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  displayAlbums1(data);
  displayAlbums2(data);
  displayAlbums3(data);
  displayAlbums4(data);
  return data;
}

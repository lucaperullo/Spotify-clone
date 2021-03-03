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
    let cardDiv = document.createElement("div");
    let bg = document.createElement("div");
    let divCover = document.createElement("div");
    let coverImg = document.createElement("div");
    let img = document.createElement("img");
    let cardbody = document.createElement("div");
    let title = document.createElement("a");
    let textDiv = document.createElement("div");
    cardbody.classList.add("card-body");
    title.classList.add("title");
    textDiv.classList.add("titleScroll");
    cardDiv.classList.add("music-album-card");
    cardDiv.classList.add("bg");
    cardDiv.classList.add("col-8");
    bg.classList.add("bgSpotify");
    divCover.classList.add("divCover");
    textDiv.innerText = `${element.album.title}`;
    img.setAttribute("src", element.album.cover);
    cardDiv.appendChild(bg);
    bg.appendChild(divCover);
    divCover.appendChild(coverImg);
    coverImg.appendChild(img);
    bg.appendChild(cardbody);
    title.appendChild(textDiv);
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

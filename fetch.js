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
    let texty = document.createElement("span");
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.classList.add("card-image");
    card.classList.add("col-8");
    card.classList.add("card-body");
    texty.innerText = `${element.album.title}`;
    text.classList.add("info");
    img.setAttribute("src", element.album.cover);
    img.classList.add("search-result");

    card.appendChild(img);

    text.appendChild(texty);
    card.appendChild(text);
    div.appendChild(card);
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

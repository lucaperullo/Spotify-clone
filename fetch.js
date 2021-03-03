async function getAlbums() {
  let search = document.querySelector(".spoti-search").value;
  const response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search, //query
    {
      headers: {
        "x-rapidapi-key": "e9b9106675msh62ec03f6e269d2bp16d6d0jsn53123e2f4694",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  console.log(data.data);
  //   displayResults(data);
  return data;
}
const displayResults = (data) => {
  let div = document.querySelector(".searchResults");

  div.innerHTML = "";
  data.forEach((element) => {
    let div2 = document.createElement("div");
    div2.classList.add("row");
    let card = document.createElement("div").classList.add("card-body");
    let img = document.createElement("img");
    img.classList.add("card-image");
    card.classList.add("col-sm-12");
    card.innerText = `${element.album.title}`;

    img.setAttribute("src", element.album.cover);
    img.classList.add("search-result");

    div2.appendChild(img);
    div2.appendChild(card);
    div.appendChild(div2);
  });
};

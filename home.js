const displayDropdown = () => {
  console.log("hi");
  let dropdown = document.querySelector(".dropdown-log");
  dropdown.classList.toggle("d-none");
};
const removeGradient = () => {
  let navbar = document.querySelector(".navbar");
  navbar.style.backgroundImage =
    "linear-gradient(rgba(185, 75, 179, 0), #131518)";
};
const changeBackgroundColor = () => {
  let navbar = document.querySelector(".navbar");
  colors = [
    "linear-gradient(rgba(185, 75, 179, 0.24), #131518)",
    "linear-gradient(rgba(185, 75, 75, 0.24), #131518)",
    "linear-gradient(rgba(238, 202, 202, 0.322), #131518)",
    "linear-gradient(rgba(46, 107, 165, 0.24), #131518)",
    "linear-gradient(rgba(46, 165, 159, 0.24), #131518)",
    "linear-gradient(rgba(46, 165, 76, 0.24), #131518)",
    "linear-gradient(rgba(104, 165, 46, 0.24), #131518)",
    "linear-gradient(rgba(165, 153, 46, 0.24), #131518)",
    "linear-gradient(rgba(165, 117, 46, 0.24), #131518)",
    "linear-gradient(rgba(11, 17, 92, 0.363), #131518)",
    "linear-gradient(rgba(92, 11, 52, 0.719), #131518)",
  ];
  navbar.style.opacity = "0";
  navbar.style.backgroundImage =
    colors[Math.floor(Math.random() * colors.length)];
  setTimeout(function () {
    navbar.style.opacity = "1";
  }, 500);
};

const trendingNowAlbums = [
  "180681412",
  "180996332",
  "178086012",
  "180983992",
  "181270962",
  "179934622",
  "180450492",
  "178406382",
  "179902942",
  "179906172",
  "179682412",
];
let albumURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/album/"; //*album id
const showData = () => {
  trendingNowAlbums.forEach(async (id) => {
    await showAlbums(id);
    async function showAlbums(id) {
      const response = await fetch(albumURL + id);
      const data = await response.json();
      console.log(data);

      let firstRow = document.getElementById("good-time-row");
      firstRow.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card-box">
          <div class="music-card">
            <img class="music-pic-small" onmouseover="changeBackgroundColor()" onmouseout="removeGradient()" src="${data.cover}" height="80" width="80" alt="">
            <div class="music-text">
              <p class="music-title font-chubby">${data.title}</p>
              <img class="play-icon" src="/imgs/play.svg" alt="">
            </div>
          </div>
        </div>
      </div>`;

      return data;
    }
  });
};

window.onload = showData();

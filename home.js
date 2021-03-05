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
const edmMusic = [
  "180696432",
  "179896722",
  "177337822",
  "180851592",
  // "179028752",
  // "174992922",
  // "176299672",
  // "175476642",
  // "179246732",
  // "174716722",
  // "162913742",
  // "174704752",
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

const showData1 = () => {
  edmMusic.forEach(async (id) => {
    await showAlbums(id);
    async function showAlbums(id) {
      const response = await fetch(albumURL + id);
      const data = await response.json();
      console.log(data);

      let firstRow = document.getElementById("recently-played");
      firstRow.classList.add("row");
      firstRow.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 music-album-card bg">
      <div class="bgSpotify">
        <div class="divCover">
          <div
            class="coverImg"
            style="background-image: url('/WeBeVibin.jpg')"
          >
            <div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="${data.cover_xl}"
                alt=""
              />
            </div>
          </div>
          <div class="buttonDiv">
            <button class="playButton d-none">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="5"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
                <rect
                  x="15"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <a class="title" href="">
            <div class="titleScroll">${data.title}</div>
          </a>
          <div class="info">
            <span>Only good vibes here!</span>
          </div>
        </div>
      </div>
    </div>`;

      return data;
    }
  });
};
const popularPlaylists = [
  "1291471565",
  "5160010784",
  "1604032845",
  "1413309725",
  // "2097558104",
  // "1934257882",
  // "2268939442",
  // "2055454184",
  // "1282523285",
  // "2249258602",
  // "6121968764",
  // "2113355604",
];
let playlistURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/playlist/";
const showData2 = () => {
  popularPlaylists.forEach(async (id) => {
    await showAlbums(id);
    async function showAlbums(id) {
      const response = await fetch(playlistURL + id);
      const data = await response.json();
      console.log(data);

      let firstRow = document.getElementById("popular-playlists");
      firstRow.classList.add("row");
      firstRow.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 music-album-card bg">
      <div class="bgSpotify">
        <div class="divCover">
          <div
            class="coverImg"
            style="background-image: url('/WeBeVibin.jpg')"
          >
            <div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="${data.picture_xl}"
                alt=""
              />
            </div>
          </div>
          <div class="buttonDiv invisible">
            <button class="playButton">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="5"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
                <rect
                  x="15"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <a class="title" href="">
            <div class="titleScroll">${data.title}</div>
          </a>
          <div class="info">
            <span>${data.description}</span>
          </div>
        </div>
      </div>
    </div>`;

      return data;
    }
  });
};
const summerPlaylists = [
  "3660896922",
  "914651125",
  "7064623344",
  "3847865962",
  // "7615941862",
  // "1307148575",
  // "6122724024",
  // "866190671",
  // "2591431828",
  // "2249258602",
  // "6121968764",
  // "2113355604",
];
const showData3 = () => {
  summerPlaylists.forEach(async (id) => {
    await showAlbums(id);
    async function showAlbums(id) {
      const response = await fetch(playlistURL + id);
      const data = await response.json();

      console.log(data);

      let firstRow = document.getElementById("summer-playlists");
      firstRow.classList.add("row");
      firstRow.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 music-album-card bg">
      <div class="bgSpotify">
        <div class="divCover">
          <div
            class="coverImg"
            style="background-image: url('/WeBeVibin.jpg')"
          >
            <div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="${data.picture_xl}"
                alt=""
              />
            </div>
          </div>
          <div class="buttonDiv invisible">
            <button onclick=directToNeWpAGEclass="playButton">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="5"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
                <rect
                  x="15"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <a class="title" href="">
            <div class="titleScroll">${data.title}</div>
          </a>
          <div class="info">
            <span>${data.description}</span>
          </div>
        </div>
      </div>
    </div>`;

      return data;
    }
  });
};
const throwbackPlaylists = [
  "2021626162",
  "2159765062",
  "8374115062",
  "1413309725",
  // "7615941862",
  // "1307148575",
  // "6122724024",
  // "866190671",
  // "2591431828",
  // "2249258602",
  // "6121968764",
  // "2113355604",
];
const showData4 = () => {
  throwbackPlaylists.forEach(async (id) => {
    await showAlbums(id);
    async function showAlbums(id) {
      const response = await fetch(playlistURL + id);
      const data = await response.json();

      console.log(data);

      let firstRow = document.getElementById("throwback-playlists");
      firstRow.classList.add("row");
      firstRow.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 music-album-card bg">
      <div class="bgSpotify">
        <div class="divCover">
          <div
            class="coverImg"
            style="background-image: url('/WeBeVibin.jpg')"
          >
            <div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="${data.picture_xl}"
                alt=""
              />
            </div>
          </div>
          <div class="buttonDiv invisible">
            <button class="playButton">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="5"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
                <rect
                  x="15"
                  y="3"
                  width="4"
                  height="18"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <a class="title" href="">
            <div class="titleScroll">${data.title}</div>
          </a>
          <div class="info">
            <span>${data.description}</span>
          </div>
        </div>
      </div>
    </div>`;

      return data;
    }
  });
};
// const directToNewPage = () =>{
//   let a= document.querySelector(".title")
//   a.addEventListener("click", newContent())
// }
// const emptyContent = () =>{
//   let box = document.querySelector(".box");
//   box.classList.add("invisible")
// }


// const addContent = () =>{
//   let div = document.createElement("div")
//   div.classList.add("container-fluid")
//   div.setAttribute("id", "magic-container")
//     throwbackPlaylists.forEach(async (id) => {
//       await showAlbums(id);
//       async function showAlbums(id) {
//         const response = await fetch(playlistURL + id);
//         const data = await response.json();
        
//         console.log(data);
  
=======

// const addContent = () =>{
//   let div = document.createElement("div")
//   div.classList.add("container-fluid")
//   div.setAttribute("id", "magic-container")
//     throwbackPlaylists.forEach(async (id) => {
//       await showAlbums(id);
//       async function showAlbums(id) {
//         const response = await fetch(playlistURL + id);
//         const data = await response.json();

//         console.log(data);


//         let firstRow = document.getElementById("throwback-playlists");
//         firstRow.classList.add("row");
//         firstRow.innerHTML +=
// }
//     });
// }

window.onload = showData(), showData1(), showData2(), showData3(), showData4();




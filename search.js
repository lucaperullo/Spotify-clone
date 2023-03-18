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
  console.log(data);
  let div = document.querySelector("#searchResults");
  let musicBar = document.querySelector("#player");
  div.innerHTML = "";
  div.innerHTML = `<div class="row">
  <div class="col-sm-12 col-md-3">
  <div onclick="redirect()" class="artist-search">
  <img src="${data[0].artist.picture_xl}" height="70"/>
  <p>${data[0].artist.name}</p>
  <p>${data[0].artist.type}</p>
  </div>
  </div>
  <div class="col-sm-12 col-md-9">
  <ul><li class="d-flex li-styled"><img src="${data[0].album.cover_xl}" height="40"/> <a>${data[0].title}</a></li><li class="d-flex li-styled"><img src="${data[1].album.cover_xl}" height="40"/> <a>${data[1].title}</a></li><li class="d-flex li-styled"><img src="${data[2].album.cover_xl}" height="40"/> <a>${data[2].title}</a></li><li class="d-flex li-styled"><img src="${data[3].album.cover_xl}" height="40"/> <a>${data[3].title}</a></li></ul>
  </div>
  </div>`;
};

let container = document.querySelector(".browse-all");

const redirect = async () => {
  let search = document.querySelector(".spoti-search").value;
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data1 = await response.json();
  const data = data1.data;

  let artistPage = document.querySelector(".artist-page-fetch-here");
  artistPage.innerHTML = "";
  artistPage.innerHTML = ` <div id="wrapper">
  <div id="container">
    <div id="sidebar">
      <div class="spotify-logo-div">
        <a class="spotify-logo-nav" href="">
          <svg viewBox="0 0 1134 340" class="spotify-logo--text">
            <title>Spotify</title>
            <path
              fill="currentColor"
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
            ></path>
          </svg>
        </a>
      </div>
      <ul class="components font-book">
        <li class="nav">
          <a href="./home.html">
            <div class="icon">
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span>Home</span>
          </a>
        </li>
        <li class="nav">
          <a href="./search.html">
            <div class="icon">
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            Search</a
          >
        </li>
        <li class="nav active">
          <a href="">
            <div class="icon">
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Your Library</a
          >
        </li>
      </ul>
      <div class="playlistContainer">
        <div class="playlistsHeader">
          <h1>Playlists</h1>
          <div class="createPlaylist">
            <button type="button">
              <svg
                class="_28160026e8be14060f22ead8e2af36f5-scss"
                shape-rendering="crispEdges"
                viewBox="0 0 36 36"
              >
                <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
              </svg>
              <span>Create Playlist</span>
            </button>
          </div>
          <div class="likedSongs">
            <a href="./liked.html">
              <button type="button">
                <div class="heartDiv">
                  <svg
                    class="heart"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                  >
                    <path fill="none" d="M0 0h16v16H0z"></path>
                    <path
                      d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                    ></path>
                  </svg>
                </div>
                <span>Liked Songs</span>
              </button></a
            >
          </div>
          <hr class="spot" />

          <div>
            <p>User Playlists will be read into this div</p>
          </div>
        </div>
      </div>

      <ul class="installComponent font-book">
        <li>
          <i class="fas fa-arrow-circle-down"></i>
          <a href="">Install App</a>
        </li>
      </ul>
    </div>
    <div id="resizer"></div>
    <div onscroll="_navColorOnScroll()" id="main">
      <div id="navbuttons-top">
        <div class="arrows">
          <button onclick="history.go(-1)" class="arrow-button">
            <svg
              role="img"
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="arrow-key"
            >
              <polyline
                class="polyline"
                points="16 4 7 12 16 20"
                fill="none"
                stroke="#181818"
              ></polyline>
            </svg>
          </button>
          <button onclick="history.go(+1)" class="arrow-button">
            <svg
              role="img"
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="arrow-key"
            >
              <polyline
                class="polyline"
                points="8 4 17 12 8 20"
                fill="none"
                stroke="#181818"
              ></polyline>
            </svg>
          </button>
        </div>
        <div class="account-buttons">
          <div class="logout-responsive" onclick="displayDropdown()">
            <i class="fas fa-caret-down"></i>
          </div>
          <div class="account-owner">
            <a class="owner font-regular" onclick="displayDropdown()"
              >Luca Perullo</a
            >
          </div>
          <div class="dropdown-log d-none">
            <div class="account-infobox">
              <div class="hover-profile-link">
                <p>Account</p>

                <i class="fas fa-external-link-alt"></i>
              </div>
            </div>
            <div class="hover-profile-link">
              <p>Profile</p>
            </div>
            <hr style="margin: 0" />
            <div class="hover-profile-link">
              <a href="../index.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
      <div class="jumbo-container">
        <div class="jumbo-content">
          <span class="verified">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z"
                fill="#2E77D0"
              ></path>
              <path
                d="M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z"
                fill="#fff"
              ></path>
            </svg>
            <span>Verified Artist</span>
          </span>
          <span class="artist">
            <h1>${data[0].artist.name}</h1>
          </span>
          <p class="lead">34,142,649 monthly listeners</p>
        </div>
      </div>
      <div class="main">
        <div class="fluid-bg"></div>
        <div class="button-container">
          <div class="button-row">
            <button class="play">
              <svg
                height="32"
                role="img"
                width="32"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
            <button class="follow">Following</button>
            <button class="toggle">
              <svg
                role="img"
                height="32"
                width="32"
                viewBox="0 0 32 32"
                class="Svg-ulyrgf-0 hJgLcF"
                style="fill: currentcolor"
              >
                <path
                  d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-8 mb-5">
            <div class="track-info">
              <div class="track-container">
                <h2 class="popular" style="margin-left: 15px">Popular</h2>
                <ul class="popular-tracks-list">
                  <li class="track">
                    <div class="start" style="justify-self: flex-start">
                      <span class="numbers">1</span>
                      <span
                        ><img
                          style="margin-right: 16px"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src=" ${data[0].album.cover_xl}"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </span>
                      <span class="title"> ${data[0].title} </span>
                    </div>
                    
                    <div class="end">
                      <button class="heart" style="color: #1db954">
                        <svg
                          style="fill: currentColor"
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          class="Svg-ulyrgf-0 hJgLcF"
                        >
                          <path fill="none" d="M0 0h16v16H0z"></path>
                          <path
                            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                          ></path>
                        </svg>
                      </button>
                      <span class="numbers">2:44</span>
                    </div>
                  </li>
                  <li class="track">
                    <div class="start" style="justify-self: flex-start">
                      <span class="numbers">2</span>
                      <span
                        ><img
                          style="margin-right: 16px"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src=" ${data[1].album.cover_xl}"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </span>
                      <span class="title"> ${data[1].title} </span>
                    </div>
                    
                    <div class="end">
                      <button class="heart" style="color: #1db954">
                        <svg
                          style="fill: currentColor"
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          class="Svg-ulyrgf-0 hJgLcF"
                        >
                          <path fill="none" d="M0 0h16v16H0z"></path>
                          <path
                            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                          ></path>
                        </svg>
                      </button>
                      <span class="numbers">2:44</span>
                    </div>
                  </li>
                  <li class="track">
                    <div class="start" style="justify-self: flex-start">
                      <span class="numbers">3</span>
                      <span
                        ><img
                          style="margin-right: 16px"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src=" ${data[2].album.cover_xl}"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </span>
                      <span class="title"> ${data[2].title} </span>
                    </div>
                    
                    <div class="end">
                      <button class="heart" style="color: #1db954">
                        <svg
                          style="fill: currentColor"
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          class="Svg-ulyrgf-0 hJgLcF"
                        >
                          <path fill="none" d="M0 0h16v16H0z"></path>
                          <path
                            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                          ></path>
                        </svg>
                      </button>
                      <span class="numbers">2:44</span>
                    </div>
                  </li>
                  <li class="track">
                    <div class="start" style="justify-self: flex-start">
                      <span class="numbers">4</span>
                      <span
                        ><img
                          style="margin-right: 16px"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src=" ${data[3].album.cover_xl}"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </span>
                      <span class="title"> ${data[3].title} </span>
                    </div>
                    
                    <div class="end">
                      <button class="heart" style="color: #1db954">
                        <svg
                          style="fill: currentColor"
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          class="Svg-ulyrgf-0 hJgLcF"
                        >
                          <path fill="none" d="M0 0h16v16H0z"></path>
                          <path
                            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                          ></path>
                        </svg>
                      </button>
                      <span class="numbers">2:44</span>
                    </div>
                  </li>
                  <li class="track">
                    <div class="start" style="justify-self: flex-start">
                      <span class="numbers">5</span>
                      <span
                        ><img
                          style="margin-right: 16px"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src=" ${data[4].album.cover_xl}"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </span>
                      <span class="title"> ${data[4].title} </span>
                    </div>
                    
                    <div class="end">
                      <button class="heart" style="color: #1db954">
                        <svg
                          style="fill: currentColor"
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          class="Svg-ulyrgf-0 hJgLcF"
                        >
                          <path fill="none" d="M0 0h16v16H0z"></path>
                          <path
                            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                          ></path>
                        </svg>
                      </button>
                      <span class="numbers">2:44</span>
                    </div>
                  </li>
                </ul>
                <button class="see-more"><span>See More</span></button>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4 mb-5">
            <div class="artist-div">
              <h2 class="artist-pick">Artist Pick</h2>
              <div class="content">
                <div>
                  <img
                    width="85px"
                    height="85px"
                    src=" ${data[5].album.cover_xl}"
                    alt=""
                  />
                </div>
                <div class="column-artist">
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: baseline;
                    "
                  >
                    <figure
                      style="
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        margin-right: 4px;
                        overflow: hidden;
                        position: relative;
                      "
                    >
                      <img
                        src="${data[5].artist.picture_xl}"
                        style="
                          border-radius: 50%;
                          width: 100%;
                          height: 100%;
                          object-fit: cover;
                          object-position: center center;
                        "
                        alt=""
                      />
                    </figure>
                    <span class="postby">Posted by ${data[5].title}</span>
                  </div>
                  <span class="link"><a href="">${data[5].title}</a></span>
                  <span
                    style="
                      margin-top: 4px;
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 16px;
                      letter-spacing: normal;
                      text-transform: none;
                      color: #b3b3b3;
                    "
                    >Album</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 style="margin-left: 15px">Discography</h2>
        <div class="container-fluid">
          <div
            class="row mb-5 mr-0 ml-0"
            style="width: 100%; overflow-y: hidden"
          >
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67616d0000b273d1a8e3c4a0b0f1100ee27153');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67616d0000b273d1a8e3c4a0b0f1100ee27153"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67616d0000b273f461bbc21a9bcec43a926973');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67616d0000b273f461bbc21a9bcec43a926973"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67616d0000b2738c5e26c45a7703cf16f509f7');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67616d0000b2738c5e26c45a7703cf16f509f7"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Featuring Tiesto</h2>
          <div
            class="row mb-5 mr-0 ml-0"
            style="width: 100%; overflow-y: hidden"
          >
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67706f00000002496c54b5eb3e07b6c3238b1c');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67706f00000002496c54b5eb3e07b6c3238b1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://seeded-session-images.scdn.co/v1/img/artist/2o5jDhtHVPhrJdv3cEQ99Z/en');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://seeded-session-images.scdn.co/v1/img/artist/2o5jDhtHVPhrJdv3cEQ99Z/en"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67706f00000002d4c4153e581b2a64d32daece');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67706f00000002d4c4153e581b2a64d32daece"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Fans also like</h2>
          <div
            class="row mb-5 mr-0 ml-0"
            style="width: 100%; overflow-y: hidden"
          >
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgCir"
                    style="background-color: inherit"
                  >
                    <div>
                      <img
                        style="border-radius: 50%"
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/19b193e731a99776449d2b06742942e1e1f58fb2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgCir"
                    style="background-color: inherit"
                  >
                    <div>
                      <img
                        style="border-radius: 50%"
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/a157c6e13ffffd135f1465d18103c774d20d053b"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgCir"
                    style="background-color: inherit"
                  >
                    <div>
                      <img
                        style="border-radius: 50%"
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/19b193e731a99776449d2b06742942e1e1f58fb2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Appears On</h2>
          <div
            class="row mb-5 mr-0 ml-0"
            style="width: 100%; overflow-y: hidden"
          >
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67616d0000b273f2d671c22b70e01b78a618a8');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67616d0000b273f2d671c22b70e01b78a618a8"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67616d0000b273a6fb4759567f43a53be8965f');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67616d0000b273a6fb4759567f43a53be8965f"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67616d0000b273c9645a78c9fba9fc092a0cc5');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67616d0000b273c9645a78c9fba9fc092a0cc5"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Artist's Playlists</h2>
          <div
            class="row mb-5 mr-0 ml-0"
            style="width: 100%; overflow-y: hidden"
          >
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67706c0000da84dd84b13325ea0387f3cb3ed2');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67706c0000da84dd84b13325ea0387f3cb3ed2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67706c0000da84718cda0a1a176a4de0433731');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67706c0000da84718cda0a1a176a4de0433731"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-sm-3 music-album-card bg mb-3"
            >
              <div class="bgSpotify">
                <div class="divCover">
                  <div
                    class="coverImgSq"
                    style="
                      background-image: url('https://i.scdn.co/image/ab67706c0000da84499f94fcae536eb1f8fd0823');
                    "
                  >
                    <div>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src="https://i.scdn.co/image/ab67706c0000da84499f94fcae536eb1f8fd0823"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="buttonDiv">
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
                    <div class="titleScroll">We Be Vibin'</div>
                  </a>
                  <div class="info">
                    <span>Only good vibes here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8">
              <h2>About</h2>
              <button class="about">
                <div class="badgeDiv">
                  <div class="rank">#51</div>
                  <div class="world">in the world</div>
                </div>
                <div
                  style="
                    padding: 40px;
                    position: absolute;
                    bottom: 0;
                    max-width: 672px;
                  "
                >
                  <div
                    style="
                      color: rgb(255, 255, 255);
                      font-size: 16px;
                      font-weight: 700;
                      line-height: 24px;
                      letter-spacing: normal;
                      text-transform: none;
                      font-size: 16px;
                      font-weight: 400;
                      line-height: 24px;
                      letter-spacing: normal;
                      text-transform: none;
                    "
                  >
                    34,142,649 monthly listeners
                  </div>
                  <div
                    style="
                      color: rgb(255, 255, 255);
                      overflow: hidden;
                      margin-top: 8px;
                    "
                  >
                    <span
                      >GRAMMY® Award-winning, platinum-certified,
                      international icon, Tiësto has over 8 BILLION global
                      streams across platforms, 36M+ Total Record Sales,
                      30M+ Social Audience &amp; over 160M TikTok Video
                      Views across users. The DJ and producer is the only
                      artist to ever hold the titles of “The Greatest DJ of
                      All Time” courtesy of Mixmag, “#1 DJ” according to
                      Rolling Stone, and “The Godfather of EDM,” as
                      proclaimed by Billboard. From his underground dance
                      floor bangers to his high-profile Las Vegas residency
                      and crossover success, Tiësto created the blueprint
                      that defines what it means to be a success in today’s
                      dance music world.</span
                    >
                  </div>
                </div>
              </button>
            </div>
            <div class="col-12 col-lg-4">
              <h2>On tour</h2>
              <ul id="tour" style="list-style: none">
                <li>
                  <a href="">
                    <time>
                      <div
                        style="
                          color: rgb(255, 255, 255);
                          background-color: #e61e32;
                          height: 24px;
                          border-top-left-radius: 2px;
                          border-top-right-radius: 2px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 14px;
                          font-weight: 700;
                          line-height: 16px;
                          letter-spacing: 0.1em;
                          text-transform: uppercase;
                        "
                      >
                        Jun
                      </div>
                      <div
                        style="
                          color: rgb(0, 0, 0);
                          background-color: #fff;
                          height: 48px;
                          border-bottom-left-radius: 2px;
                          border-bottom-right-radius: 2px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 32px;
                          font-weight: 700;
                          line-height: 36px;
                          letter-spacing: -0.04em;
                          text-transform: none;
                        "
                      >
                        4
                      </div>
                    </time>
                    <div>
                      <h3
                        style="
                          color: rgb(255, 255, 255);
                          overflow: hidden;
                          margin-bottom: 4px;
                          font-size: 16px;
                          font-weight: 700;
                          line-height: 24px;
                          letter-spacing: normal;
                          text-transform: none;
                        "
                      >
                        Saga 2021
                      </h3>
                      <p
                        style="
                          font-size: 14px;
                          font-weight: 400;
                          line-height: 16px;
                          letter-spacing: normal;
                          text-transform: none;
                        "
                      >
                        Fri 7:00 PM Parcul Izvor, Bucharest
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <time>
                      <div
                        style="
                          color: rgb(255, 255, 255);
                          background-color: #e61e32;
                          height: 24px;
                          border-top-left-radius: 2px;
                          border-top-right-radius: 2px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 14px;
                          font-weight: 700;
                          line-height: 16px;
                          letter-spacing: 0.1em;
                          text-transform: uppercase;
                        "
                      >
                        Jun
                      </div>
                      <div
                        style="
                          color: rgb(0, 0, 0);
                          background-color: #fff;
                          height: 48px;
                          border-bottom-left-radius: 2px;
                          border-bottom-right-radius: 2px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 32px;
                          font-weight: 700;
                          line-height: 36px;
                          letter-spacing: -0.04em;
                          text-transform: none;
                        "
                      >
                        4
                      </div>
                    </time>
                    <div>
                      <h3
                        style="
                          color: rgb(255, 255, 255);
                          overflow: hidden;
                          margin-bottom: 4px;
                          font-size: 16px;
                          font-weight: 700;
                          line-height: 24px;
                          letter-spacing: normal;
                          text-transform: none;
                        "
                      >
                        Saga 2021
                      </h3>
                      <p
                        style="
                          font-size: 14px;
                          font-weight: 400;
                          line-height: 16px;
                          letter-spacing: normal;
                          text-transform: none;
                        "
                      >
                        Fri 7:00 PM Parcul Izvor, Bucharest
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul class="responsive-navbar">
          <li class="nav">
            <a href="./home.html">
              <div class="iconHome">
                <svg
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span>Home</span>
            </a>
          </li>
          <li class="nav">
            <a href="./search.html">
              <div class="iconSearch">
                <svg
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              Search</a
            >
          </li>
          <li class="nav">
            <a href="./library.html">
              <div class="iconLib">
                <svg
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              Your Library</a
            >
          </li>
          <li class="nav">
            <a
              href="https://play.google.com/store/apps/details?id=com.spotify.music&hl=en"
              target="_blank"
            >
              <div class="iconDownload">
                <img
                  class="download-logo"
                  src="https://img.icons8.com/plasticine/2x/spotify.png"
                  alt=""
                />
              </div>
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section id="player">
  <div class="track-nav center">
    <div
      id="player-album-info"
      class="d-flex justify-content-start align-items-center"
    >
      <div class="player-cover-img"></div>
      <div class="song-title-info">
        <div id="player-song-name" class="song-title-small">
          Really Love (feat. Craig Da...
        </div>
        <div id="player-artist-name" class="song-artist-small artist">
          Ksi, Craig David, Digital Farm Animals
        </div>
      </div>
    </div>

    <div
      class="player d-flex flex-column justify-content-center align-items-center"
    >
      <div class="buttons w-100 center">
        <i class="fas fa-random"></i>

        <button id="player-pre">
          <i class="fas fa-step-backward"></i>
        </button>

        <button id="player-play" onclick="playMusic()">
          <i id="play_img" class="fa fa-play"></i>
        </button>

        <button id="player-next">
          <i class="fas fa-step-forward"></i>
        </button>
        <i class="fas fa-redo"></i>
      </div>
      <div class="controls d-flex align-items-center">
        <div class="track-time-current">00:00</div>
        <input
          id="player-duration-bar"
          class="level"
          type="range"
          min="0"
          max="100"
          value="0"
          onclick="changeSongPlace(this.value)"
        />
        <div class="track-time-to-finish">00:30</div>
      </div>
    </div>
    <div class="volume">
      <i id="volume-icon" class="fa fa-volume-off mr-3"></i>
      <input
        type="range"
        value="20"
        min="0"
        max="100"
        onchange="changeVolume(this.value)"
      />
    </div>
  </div>
</section>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
  crossorigin="anonymous"
></script>
<script src="../dropdown.js"></script>
<script src="../resizebar.js"></script>
<script src="../navbar.js"></script>
<script src="../fetch.js"></script>`;
  let bg = document.querySelector(".jumbo-container");
  bg.style.backgroundImage = `url(${data[0].artist.picture_xl})`;
  bg.style.backgroundAttachment = "fixed";
  bg.style.backgroundSize = "100% 120%";
};

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

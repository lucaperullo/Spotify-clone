const likedSongs = [];

async function getAlbums() {
  let search = document.querySelector(".spoti-search").value;
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
    // "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search, //query
    // {
    //   headers: {
    //     "x-rapidapi-key": "747030d749msh471c14b186c043cp1cfee9jsn05041c6abfa1",
    //     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //   },
    // }
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

///////////////////////////////////////////////////////////////
///////////////////// ALBUM CATEGORIES ////////////////////////
///////////////////////////////////////////////////////////////

const popularPlaylists = [
  "7237234924",
  "1060971691",
  "2350568586",
  "7588869202",
  "4383182182",
  "5673128942",
  "7188387004",
  "1406578475",
  "1307150595",
  "915487765",
  "1154685481",
  "3411272262",
];

const topPodcasts = [
  "6945004524",
  "6987111284",
  "7958865622",
  "2526838344",
  "4503899902",
  "2389444482",
  "4460913144",
  "1140232701",
  "762567663",
  "2932519662",
  "4613753548",
  "6682154564",
];

const dynamicDuosPodcasts = [
  "1479458365",
  "7969999942",
  "919949225",
  "1913763402",
  "2249258602",
  "1036183001",
  "7456464544",
  "1306931615",
  "2532117644",
  "1640842381",
  "1282523285",
  "2113355604",
];

const edmMusic = [
  "180696432",
  "179896722",
  "177337822",
  "180851592",
  "179028752",
  "174992922",
  "176299672",
  "175476642",
  "179246732",
  "174716722",
  "162913742",
  "174704752",
];

const workoutMusic = [
  "7458033284",
  "7470337224",
  "7585782982",
  "7470347344",
  "7458018624",
  "7470341484",
  "7470345864",
  "251740573",
  "1358731495",
  "2153050122",
  "1924357302",
  "1719648481",
];

const relaxAndChillMusic = [
  "1274663331",
  "3338949242",
  "7393760844",
  "1578812305",
  "1787912442",
  "1911222042",
  "1927928822",
  "1914526462",
  "952513765",
  "3526107782",
  "1390327745",
  "1281590615",
];

const bestNewReleases = [
  "1118156702",
  "1114646912",
  "1117483882",
  "1115454582",
  "1116144312",
  "1116224522",
];

const newAlbumsAndSingles = [
  "169236642",
  "110040592",
  "91598612",
  "122429752",
  "159826232",
  "15478674",
  "176538582",
  "11244086",
  "161984202",
  "162683632",
  "157795452",
  "137217782",
];

const tracksJustForYou = [
  "180681412",
  "180996332",
  "178086012",
  "180983992",
  "181446752",
  "181270962",
  "179934622",
  "180450492",
  "178406382",
  "179902942",
  "179906172",
  "179682412",
];

const playlistsJustForYou = [
  "1190301781",
  "1291471565",
  "1950512362",
  "7371445944",
  "7840420082",
  "4168772042",
  "6422922564",
  "1964028802",
  "1963962142",
  "63141574",
  "1964085082",
  "2098157264",
];

///////////////////////////////////////////////////////////////
///////////////////////// ALBUMS FETCHES///////////////////////
///////////////////////////////////////////////////////////////

let albumURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/album/"; //*album id
let artistURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/artist/"; //+artist id
let chartURL = "https://spotify-fetch.herokuapp.com/https://api.deezer.com/"; //+chart
let genreURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/genre/0"; //+ genre number
let optionsURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/options/";
// + options (streaming	If the user can stream on the platform  :	boolean
// streaming_duration:	the streaming duration of the user  :	int
// offline:	The user can listen to the music in offline mode  :	boolean
// hq:	The HQ can be activated  :	boolean
// ads_display:	Displays ads  :	boolean
// ads_audio:	Activates audio ads  :	boolean
// too_many_devices:	If the user reached the limit of linked devices  :	boolean
// can_subscribe:	If the user can subscribe to the service:	boolean
// radio_skips:	The limit of radio skips. 0 = no limit  :	int
// lossless:	Lossless is available	:  boolean
// preview:	Allows to display the preview of the tracks  :	boolean
// radio:	Allows to stream the radio	:  boolean)
let playlistURL =
  "https://spotify-fetch.herokuapp.com/https://api.deezer.com/playlist/";
//+ id(int), title(string), description(string), duration(int),is_loved_track(boolean),
//nb_tracks(int), fans(The number of playlist's fans(int))

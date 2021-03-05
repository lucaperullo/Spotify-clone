const playAudioTrack = () => {
  let audio = document.querySelector(".isplaying");
  let pausebtn = document.querySelector("#pauseBtn");
  let playbtn = document.querySelector("#playBtn");
  pausebtn.classList.toggle("d-none");
  playbtn.classList.toggle("d-none");
  audio.play();
};
const pauseAudioTrack = () => {
  let audio = document.querySelector(".isplaying");
  let playbtn = document.querySelector("#playBtn");
  let pausebtn = document.querySelector("#pauseBtn");
  playbtn.classList.toggle("d-none");
  pausebtn.classList.toggle("d-none");
  audio.pause();
};
async function getPodcasts() {
  let headerContent = document.querySelector(".sticky-bg");

  let title = document.querySelector("#title");
  let search = document.querySelector(".audio");
  title.innerText = search;
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data1 = await response.json();
  const data = data1.data;
  console.log(data1);
  displayPodcasts(data1.data.splice(0, 6));
  playAudio(data1);
  return data;
}

const playAudio = (data) => {
  const newData = data.data;
  newData.map((element) => getTracks(element));
};

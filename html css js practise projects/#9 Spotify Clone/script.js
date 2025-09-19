console.log("Welcome to Spotify Clone");

let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let coverImg = document.getElementById("coverImg");
let songsContainer = document.getElementById("songsContainer");

let songs = [
  { songName: "It's Always Blue", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
  { songName: "Trap | Cartel", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
  { songName: "They Mad | Lowkey", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
  { songName: "Rich The Kid", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
  { songName: "Love is Nothing", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
];

// Dynamically render songs
songs.forEach((song, i) => {
  let songItem = document.createElement("div");
  songItem.classList.add("card");
  songItem.innerHTML = `
    <img src="${song.coverPath}" class="card-img" />
    <p class="card-title">${song.songName}</p>
    <p class="card-info">Click to play</p>
    <i id="${i}" class="fa-regular songPlay fa-circle-play"></i>
  `;
  songsContainer.appendChild(songItem);
});

// Play/pause button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.replace("fa-circle-play", "fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.replace("fa-circle-pause", "fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Progress bar update
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Make all play buttons default
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songPlay")).forEach((el) => {
    el.classList.replace("fa-circle-pause", "fa-circle-play");
  });
};

// Song item click
Array.from(document.getElementsByClassName("songPlay")).forEach((el) => {
  el.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.replace("fa-circle-play", "fa-circle-pause");
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    coverImg.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.replace("fa-circle-play", "fa-circle-pause");
  });
});

// Next / Previous
document.getElementById("next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  coverImg.src = songs[songIndex].coverPath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.replace("fa-circle-play", "fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  coverImg.src = songs[songIndex].coverPath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.replace("fa-circle-play", "fa-circle-pause");
});

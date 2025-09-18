console.log("Welcome to Spotify Clone");

let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songsContainer = document.getElementById("songsContainer");

let songs = [
  { songName: "It's Always Blue", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
  { songName: "Trap | Cartel", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
  { songName: "They Mad | Lowkey", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
  { songName: "Rich The Kid", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
  { songName: "Love is Nothing", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
  { songName: "The Safety Dance", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
  { songName: "Back IT UP", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
  { songName: "Tough Situation", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
  { songName: "You Don't Know Me!", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" },
  { songName: "Love The Song", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg" },
];


songs.forEach((song, i) => {
  let songItem = document.createElement("div");
  songItem.classList.add("songItem");
  songItem.innerHTML = `
    <img src="${song.coverPath}" alt="${i + 1}" />
    <span class="songName">${song.songName}</span>
    <span class="songlistPlay">
      <span class="timestamp">4:00
        <i id="${i}" class="fa-regular songPlay fa-circle-play"></i>
      </span>
    </span>`;
  songsContainer.appendChild(songItem);
});


masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});


audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});


const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};


Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});


document.getElementById("next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

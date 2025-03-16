console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("Music/Ajeeb-O-Gareeb.mp3");
let masterPlay = document.getElementById("masterPlay"); // Fixed variable name
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Ajeeb-O-Gareeb",
    filePath: "Music/Ajeeb-O-Gareeb.mp3",
    coverPath: "assets/covers/1.jpg",
  },
  {
    songName: "Ishq Hai",
    filePath: "Music/Ishq Hai.mp3",
    coverPath: "assets/covers/2.jpg",
  },
  {
    songName: "Kesariya",
    filePath: "Music/Kesariya.mp3",
    coverPath: "assets/covers/3.jpg",
  },
  {
    songName: "Kho Gaye",
    filePath: "Music/Kho Gaye.mp3",
    coverPath: "assets/covers/4.jpg",
  },
  {
    songName: "Rang",
    filePath: "Music/Rang.mp3",
    coverPath: "assets/covers/5.jpg",
  },
  {
    songName: "Satranga",
    filePath: "Music/Satranga.mp3",
    coverPath: "assets/covers/6.jpg",
  },
  {
    songName: "Soni Soni",
    filePath: "Music/Soni Soni.mp3",
    coverPath: "assets/covers/7.jpg",
  },
  {
    songName: "Triple OG",
    filePath: "Music/Triple OG.mp3",
    coverPath: "assets/covers/8.jpg",
  },
  {
    songName: "Tu Hain Toh Main Hoon",
    filePath: "Music/Tu Hain Toh Main Hoon.mp3",
    coverPath: "assets/covers/9.jpg",
  },
  {
    songName: "YEDA YUNG",
    filePath: "Music/YEDA YUNG.mp3",
    coverPath: "assets/covers/10.jpg",
  },
];

// Set song details in the UI
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

// Listen to time update events
audioElement.addEventListener("timeupdate", () => {
  if (!isNaN(audioElement.duration)) {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
  }
});

// Handle progress bar change
myProgressBar.addEventListener("input", () => {
  if (!isNaN(audioElement.duration)) {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
  }
});

const makeAllPlays = ()=>{
  
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause')
    element.classList.add('fa-play')
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    e.target.classList.remove('fa-play')
    e.target.classList.add('fa-pause')


  })
})

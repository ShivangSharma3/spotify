console.log("welcome to spotify")
let songidx = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let splay = document.getElementById('splay');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs = [
    { songsName: "CourtSide", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songsName: "Jatta", filePath: "songs/1.mp3", coverPath: "covers/2.jpg" },
    { songsName: "STFU", filePath: "songs/1.mp3", coverPath: "covers/3.jpg" },
    { songsName: "Farming", filePath: "songs/1.mp3", coverPath: "covers/4.jpg" },
    { songsName: "Champion", filePath: "songs/1.mp3", coverPath: "covers/5.jpg" },
    { songsName: "52 Bars", filePath: "songs/1.mp3", coverPath: "covers/6.jpg" },
]
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songsName;
})
// audioElement.play();

// play and pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

//onclick change seekbar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songidx = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songidx + 1}.mp3`;
        masterSongName.innerText =songs[songidx].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById(`next`).addEventListener('click', () => {
    if (songidx >=5) {
        songidx = 0;
    } else {
        songidx += 1;
    }
    audioElement.src = `songs/${songidx + 1}.mp3`;
    masterSongName.innerText =songs[songidx].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById(`previous`).addEventListener('click', () => {
    if (songidx <=0) {
        songidx = 5;
    } else {
        songidx -= 1;
    }
    audioElement.src = `songs/${songidx + 1}.mp3`;
    masterSongName.innerText =songs[songidx].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
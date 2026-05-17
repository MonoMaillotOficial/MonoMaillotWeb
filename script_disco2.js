const songs = [
    { title: "Addicted", src: "songs/Addicted.mp3", cover: "imgs/disco2.png", lyrics: [] },
    { title: "Come true", src: "songs/Come true.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "Delaossa Cantando", src: "songs/Delaossa Cantando.mp3", cover: "imgs/disco2.png", lyrics: [] },
    { title: "Desbarato", src: "songs/Desbarato.mp3", cover: "imgs/disco2.png", lyrics: [] },
    { title: "Extraños", src: "songs/Extraños.mp3", cover: "imgs/disco2.png", lyrics: [] },
    { title: "Falling", src: "songs/Falling.mp3", cover: "imgs/disco2.png", lyrics: [] },
    { title: "I miss you", src: "songs/I miss you.mp3", cover: "imgs/disco2.png", lyrics: [] },
    { title: "Motorola", src: "songs/Motorola.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "My time", src: "songs/My time.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "No lies", src: "songs/No lies.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "Promesa", src: "songs/Promesa.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "Right now", src: "songs/Right now.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "Amame", src: "songs/amame.mp3", cover: "imgs/ComeTrue.png", lyrics: [] }
];

let songIndex = 0;

const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.querySelector(".progress");
const currentContainer = document.querySelector(".current");
const durationContainer = document.querySelector(".duration");
const volumeSlider = document.querySelector(".volume");
const muteBtn = document.querySelector(".mute");
const coverImg = document.getElementById("cover-img");
const songTitle = document.getElementById("song-title");
const downloadLink = document.getElementById("download");
const lyricsContent = document.getElementById("lyrics-content");

loadSong(songs[songIndex]);

function loadSong(song) {
    songTitle.innerText = song.title;
    audio.src = song.src;
    coverImg.src = song.cover;
    downloadLink.href = song.src;
    loadLyrics(song.lyrics);
}

function playSong() {
    audio.play();
    playBtn.textContent = "⏸";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶";
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
    currentContainer.innerText = formatTime(currentTime);
    durationContainer.innerText = formatTime(duration);
    syncLyrics(currentTime);
}

function setProgress() {
    const width = this.value;
    const duration = audio.duration;
    audio.currentTime = (width / 100) * duration;
}

function setVolume() {
    audio.volume = this.value;
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function loadLyrics(lyrics) {
    lyricsContent.innerHTML = "";
    if (!lyrics || lyrics.length === 0) {
        lyricsContent.innerHTML = "<p>No lyrics available for these songs.</p>";
        return;
    }
    lyrics.forEach((line, index) => {
        const p = document.createElement("p");
        p.innerText = line.text;
        p.setAttribute("data-time", line.time);
        p.id = `line-${index}`;
        lyricsContent.appendChild(p);
    });
}

function syncLyrics(currentTime) {
    const lyrics = songs[songIndex].lyrics;
    if (!lyrics || lyrics.length === 0) return;
    let currentLineIndex = -1;
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            currentLineIndex = i;
        } else {
            break;
        }
    }
    const allLines = lyricsContent.querySelectorAll("p");
    allLines.forEach(line => line.classList.remove("highlight"));
    if (currentLineIndex !== -1) {
        const activeLine = document.getElementById(`line-${currentLineIndex}`);
        if (activeLine) {
            activeLine.classList.add("highlight");
            const lyricsContainer = document.getElementById("lyrics-container");
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = activeLine.getBoundingClientRect();
            if (lineRect.top < containerRect.top || lineRect.bottom > containerRect.bottom) {
                activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }
}

playBtn.addEventListener("click", () => {
    const isPlaying = playBtn.textContent === "⏸";
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);
progress.addEventListener("input", setProgress);
volumeSlider.addEventListener("input", setVolume);
muteBtn.addEventListener("click", toggleMute);

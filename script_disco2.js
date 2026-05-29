const songs = [
    { title: "Addicted", src: "songs/Addicted.mp3", cover: "imgs/AddictedPortada.png", lyrics: [] },
    { title: "Come true", src: "songs/Come true.mp3", cover: "imgs/ComeTrue.png", lyrics: [] },
    { title: "Peligrosa", src: "songs/Delaossa Cantando.mp3", cover: "imgs/PeligrosaPortada.png", lyrics: [] },
    { title: "Desbarato", src: "songs/Desbarato.mp3", cover: "imgs/DesbaratoPortada.png", lyrics: [] },
    { title: "Extraños", src: "songs/Extraños.mp3", cover: "imgs/ExtranosPortada.png", lyrics: [] },
    { title: "Falling", src: "songs/Falling.mp3", cover: "imgs/FallingPortada.png", lyrics: [] },
    { title: "I miss you", src: "songs/I miss you.mp3", cover: "imgs/ImissyouPortada.png", lyrics: [] },
    { title: "Motorola", src: "songs/Motorola.mp3", cover: "imgs/MotorolaPortada.png", lyrics: [] },
    { title: "My time", src: "songs/My time.mp3", cover: "imgs/MytimePortada.png", lyrics: [] },
    { title: "No lies", src: "songs/No lies.mp3", cover: "imgs/NoliesPortada.png", lyrics: [] },
    { title: "Promesa", src: "songs/Promesa.mp3", cover: "imgs/PromesaPortada.png", lyrics: [] },
    { title: "Right now", src: "songs/Right now.mp3", cover: "imgs/RightnowPortada.png", lyrics: [] },
    { title: "Amame", src: "songs/amame.mp3", cover: "imgs/AmamePortada.png", lyrics: [] }
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
const tracklistContainer = document.getElementById("tracklist");
const playerContainer = document.getElementById("player-container");
let expandedIndex = null;

if (typeof globalPlayer !== "undefined") {
    globalPlayer.registerSongs("disco2", songs);
    if (globalPlayer.currentDisco === "disco2" && globalPlayer.currentSongIndex !== null) {
        songIndex = globalPlayer.currentSongIndex;
    }
}

loadSong(songs[songIndex]);
renderTracklist();

function loadSong(song) {
    songTitle.innerText = song.title;
    if (typeof globalPlayer === "undefined") {
        audio.src = song.src;
    }
    coverImg.src = song.cover;
    downloadLink.href = song.src;
    loadLyrics(song.lyrics);
}

function playSong(startTime = audio.currentTime || 0) {
    if (typeof globalPlayer !== "undefined") {
        globalPlayer.playSong("disco2", songIndex, startTime);
    } else {
        audio.currentTime = startTime;
        audio.play();
    }
    playBtn.textContent = "⏸";
}

function pauseSong() {
    if (typeof globalPlayer !== "undefined") {
        globalPlayer.pause();
    } else {
        audio.pause();
    }
    playBtn.textContent = "▶";
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong(0);
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong(0);
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
    if (!audio.duration) return;
    const duration = audio.duration;
    const progressValue = parseFloat(progress.value) || 0;
    audio.currentTime = (progressValue / 100) * duration;
}

function setVolume() {
    const volumeValue = parseFloat(volumeSlider.value) || 1;
    audio.volume = Math.max(0, Math.min(1, volumeValue));
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

function renderTracklist() {
    if (!tracklistContainer) return;
    tracklistContainer.innerHTML = "";

    songs.forEach((song, index) => {
        const trackItem = document.createElement("article");
        trackItem.className = "track-item";
        if (index === songIndex) trackItem.classList.add("active");
        if (index === expandedIndex) trackItem.classList.add("expanded");
        trackItem.dataset.index = index;

        const trackRow = document.createElement("div");
        trackRow.className = "track-row";
        trackRow.innerHTML = `
            <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
            <div class="track-art"><img src="${song.cover}" alt="${song.title}"></div>
            <div class="track-info">
                <h3>${song.title}</h3>
                <p>${song.lyrics && song.lyrics.length ? `${song.lyrics.length} líneas` : "Letra no disponible"}</p>
            </div>
        `;
        trackItem.appendChild(trackRow);

        const detailsPanel = document.createElement("div");
        detailsPanel.className = "track-details";
        if (index === expandedIndex) {
            detailsPanel.style.maxHeight = "1200px";
            detailsPanel.style.opacity = "1";
        }

        trackItem.appendChild(detailsPanel);
        tracklistContainer.appendChild(trackItem);
    });
}

function updatePlayerDisplay() {
    if (playerContainer && songIndex >= 0) {
        playerContainer.style.display = "flex";
    } else if (playerContainer) {
        playerContainer.style.display = "none";
    }
}



function selectTrack(index, openPanel = true) {
    const isCurrentGlobalTrack = typeof globalPlayer !== "undefined"
        && globalPlayer.currentDisco === "disco2"
        && globalPlayer.currentSongIndex === index;

    songIndex = index;
    loadSong(songs[songIndex]);
    playSong(isCurrentGlobalTrack ? audio.currentTime || 0 : 0);
    expandedIndex = openPanel ? index : null;
    renderTracklist();
    updatePlayerDisplay();
    const player = document.getElementById("player-container");
    if (player) {
        player.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

if (tracklistContainer) {
    tracklistContainer.addEventListener("click", (e) => {
        const clickedItem = e.target.closest(".track-item");
        if (!clickedItem) return;

        const clickedIndex = Number(clickedItem.dataset.index);

        selectTrack(clickedIndex, true);
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

// Add event listeners with delegation to handle DOM reorganization
document.addEventListener("click", (e) => {
    // Play button
    if (e.target.classList.contains("play")) {
        e.preventDefault();
        e.stopPropagation();
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    }
    // Prev button
    if (e.target.id === "prev" || e.target.closest("#prev")) {
        e.preventDefault();
        e.stopPropagation();
        prevSong();
    }
    // Next button
    if (e.target.id === "next" || e.target.closest("#next")) {
        e.preventDefault();
        e.stopPropagation();
        nextSong();
    }
    // Mute button
    if (e.target.classList.contains("mute")) {
        e.preventDefault();
        e.stopPropagation();
        toggleMute();
    }
});

audio.addEventListener("timeupdate", updateProgress);
if (typeof globalPlayer === "undefined") {
    audio.addEventListener("ended", handleTrackEnd);
}
audio.addEventListener("play", () => {
    playBtn.textContent = "⏸";
});
audio.addEventListener("pause", () => {
    playBtn.textContent = "▶";
});
progress.addEventListener("change", setProgress);
volumeSlider.addEventListener("change", setVolume);

document.addEventListener("global-player-track-change", (event) => {
    if (event.detail.disco !== "disco2") return;
    songIndex = event.detail.songIndex;
    loadSong(songs[songIndex]);
    renderTracklist();
    updatePlayerDisplay();
});

function handleTrackEnd() {
    const nextIndex = (songIndex + 1) % songs.length;
    selectTrack(nextIndex, false);
    renderTracklist();
    updatePlayerDisplay();
}

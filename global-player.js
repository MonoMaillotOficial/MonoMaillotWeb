const GLOBAL_PLAYER_STORAGE_KEY = "monoMaillotPlayerState";

const DISCO_LABELS = {
    disco1: "Bendito talento",
    disco2: "2do disco",
    disco3: "APS"
};

class GlobalPlayer {
    constructor() {
        this.audio = document.getElementById("audio") || this.createAudio();
        this.allSongs = {};
        this.currentDisco = null;
        this.currentSongIndex = null;
        this.restoreTime = 0;
        this.restorePlay = false;
        this.restoreTried = false;

        this.createToastUI();
        this.restoreToastState();
        this.readState();
        this.attachEvents();
        this.restoreSavedSong();
    }

    createAudio() {
        const audio = document.createElement("audio");
        audio.id = "global-audio";
        audio.preload = "metadata";
        document.body.appendChild(audio);
        return audio;
    }

    createToastUI() {
        if (document.getElementById("global-player-toast")) return;

        document.body.insertAdjacentHTML("beforeend", `
            <aside id="global-player-toast" class="global-player-toast hidden" aria-live="polite">
                <button id="toast-toggle" class="toast-toggle" type="button" title="Colapsar/Expandir" aria-label="Colapsar/Expandir">▼</button>
                <div class="toast-cover">
                    <img id="toast-cover-img" src="imgs/Logo.png" alt="">
                </div>
                <div class="toast-info">
                    <span class="toast-kicker" id="toast-disco">Mono Maillot</span>
                    <strong id="toast-title">Sin cancion</strong>
                    <span id="toast-time">0:00 / 0:00</span>
                </div>
                <div class="toast-controls">
                    <button id="toast-prev" class="toast-btn" type="button" title="Anterior" aria-label="Anterior">⏮</button>
                    <button id="toast-play" class="toast-btn toast-play" type="button" title="Reproducir" aria-label="Reproducir">▶</button>
                    <button id="toast-next" class="toast-btn" type="button" title="Siguiente" aria-label="Siguiente">⏭</button>
                    <button id="toast-close" class="toast-btn" type="button" title="Cerrar reproductor" aria-label="Cerrar reproductor">×</button>
                </div>
                <input id="toast-progress" class="toast-progress" type="range" min="0" max="100" value="0" aria-label="Progreso">
            </aside>
        `);
    }

    attachEvents() {
        document.getElementById("toast-toggle")?.addEventListener("click", () => this.toggleToastCollapse());
        document.getElementById("toast-play")?.addEventListener("click", () => this.togglePlayPause());
        document.getElementById("toast-next")?.addEventListener("click", () => this.nextSong());
        document.getElementById("toast-prev")?.addEventListener("click", () => this.prevSong());
        document.getElementById("toast-close")?.addEventListener("click", () => this.stopAndHide());
        document.getElementById("toast-progress")?.addEventListener("input", (event) => {
            if (!this.audio.duration) return;
            this.audio.currentTime = (Number(event.target.value) / 100) * this.audio.duration;
        });

        this.audio.addEventListener("loadedmetadata", () => {
            if (this.restoreTime && this.audio.duration) {
                this.audio.currentTime = Math.min(this.restoreTime, this.audio.duration - 1);
                this.restoreTime = 0;
            }
            this.updateToast();
        });

        this.audio.addEventListener("timeupdate", () => {
            this.updateToast();
            this.saveState();
        });
        this.audio.addEventListener("play", () => {
            this.updateToast();
            this.saveState();
        });
        this.audio.addEventListener("pause", () => {
            this.updateToast();
            this.saveState();
        });
        this.audio.addEventListener("ended", () => this.nextSong());
        document.addEventListener("keydown", (event) => this.handleKeyboardShortcut(event));
        window.addEventListener("beforeunload", () => this.saveState());
    }

    handleKeyboardShortcut(event) {
        if (event.code !== "Space" || !this.audio.src) return;

        const activeTag = document.activeElement?.tagName?.toLowerCase();
        const isTypingTarget = ["input", "textarea", "select", "button"].includes(activeTag);
        if (isTypingTarget || document.activeElement?.isContentEditable) return;

        event.preventDefault();
        this.togglePlayPause();
    }

    registerSongs(disco, songsArray) {
        this.allSongs[disco] = songsArray;
        this.restoreSavedSong();
    }

    playSong(disco, songIndex, startTime = 0) {
        const song = this.allSongs[disco]?.[songIndex];
        if (!song) return;

        const sameSong = this.currentDisco === disco && this.currentSongIndex === songIndex;
        this.currentDisco = disco;
        this.currentSongIndex = songIndex;

        if (!sameSong) {
            this.audio.src = song.src;
        }

        if (Number.isFinite(startTime) && startTime >= 0) {
            this.restoreTime = startTime;
            if (this.audio.readyState > 0 && this.audio.duration) {
                this.audio.currentTime = Math.min(startTime, this.audio.duration - 1);
                this.restoreTime = 0;
            }
        }

        this.showToast();
        this.updateToast();
        this.audio.play().catch(() => {
            this.updateToast();
            this.saveState();
        });
    }

    pause() {
        this.audio.pause();
    }

    togglePlayPause() {
        if (!this.audio.src) return;
        if (this.audio.paused) {
            this.audio.play().catch(() => this.updateToast());
        } else {
            this.pause();
        }
    }

    nextSong() {
        const songs = this.allSongs[this.currentDisco];
        if (!songs?.length || this.currentSongIndex === null) return;
        this.playSong(this.currentDisco, (this.currentSongIndex + 1) % songs.length);
        this.emitTrackChange();
    }

    prevSong() {
        const songs = this.allSongs[this.currentDisco];
        if (!songs?.length || this.currentSongIndex === null) return;
        this.playSong(this.currentDisco, (this.currentSongIndex - 1 + songs.length) % songs.length);
        this.emitTrackChange();
    }

    emitTrackChange() {
        document.dispatchEvent(new CustomEvent("global-player-track-change", { detail: this.getState() }));
    }

    stopAndHide() {
        this.pause();
        this.hideToast();
        localStorage.removeItem(GLOBAL_PLAYER_STORAGE_KEY);
    }

    toggleToastCollapse() {
        const toast = document.getElementById("global-player-toast");
        const toggleBtn = document.getElementById("toast-toggle");
        if (!toast || !toggleBtn) return;

        const isCollapsed = toast.classList.toggle("collapsed");
        toggleBtn.textContent = isCollapsed ? "◀" : "▶";
        localStorage.setItem("toastCollapsed", isCollapsed.toString());
    }

    restoreToastState() {
        const isCollapsed = localStorage.getItem("toastCollapsed") === "true";
        const toast = document.getElementById("global-player-toast");
        const toggleBtn = document.getElementById("toast-toggle");
        
        if (isCollapsed && toast && toggleBtn) {
            toast.classList.add("collapsed");
            toggleBtn.textContent = "◀";
        } else if (toggleBtn) {
            toggleBtn.textContent = "▶";
        }
    }

    showToast() {
        document.getElementById("global-player-toast")?.classList.remove("hidden");
        this.restoreToastState();
    }

    hideToast() {
        document.getElementById("global-player-toast")?.classList.add("hidden");
    }

    updateToast() {
        const song = this.getCurrentSong();
        if (!song) return;

        document.getElementById("toast-title").textContent = song.title;
        document.getElementById("toast-disco").textContent = DISCO_LABELS[this.currentDisco] || this.currentDisco;
        document.getElementById("toast-cover-img").src = song.cover;

        const playButton = document.getElementById("toast-play");
        if (playButton) {
            playButton.textContent = this.audio.paused ? "▶" : "⏸";
            playButton.title = this.audio.paused ? "Continuar" : "Pausar";
            playButton.setAttribute("aria-label", playButton.title);
        }

        const progress = document.getElementById("toast-progress");
        if (progress && this.audio.duration) {
            progress.value = String((this.audio.currentTime / this.audio.duration) * 100);
        }

        const time = document.getElementById("toast-time");
        if (time) {
            time.textContent = `${this.formatTime(this.audio.currentTime)} / ${this.formatTime(this.audio.duration || 0)}`;
        }
    }

    saveState() {
        const song = this.getCurrentSong();
        if (!song) return;

        localStorage.setItem(GLOBAL_PLAYER_STORAGE_KEY, JSON.stringify({
            disco: this.currentDisco,
            songIndex: this.currentSongIndex,
            currentTime: this.audio.currentTime || 0,
            isPlaying: !this.audio.paused,
            song,
            songs: this.allSongs[this.currentDisco] || [song]
        }));
    }

    readState() {
        try {
            const data = JSON.parse(localStorage.getItem(GLOBAL_PLAYER_STORAGE_KEY));
            if (!data?.song) return;
            this.currentDisco = data.disco;
            this.currentSongIndex = data.songIndex;
            this.restoreTime = data.currentTime || 0;
            this.restorePlay = Boolean(data.isPlaying);
            this.allSongs[this.currentDisco] = data.songs || [];
            this.allSongs[this.currentDisco][this.currentSongIndex] = data.song;
        } catch {
            localStorage.removeItem(GLOBAL_PLAYER_STORAGE_KEY);
        }
    }

    restoreSavedSong() {
        if (!this.currentDisco || this.currentSongIndex === null) return;
        const song = this.getCurrentSong();
        if (!song) return;

        if (!this.audio.src) {
            this.audio.src = song.src;
        }

        this.showToast();
        this.updateToast();

        if (this.restorePlay && !this.restoreTried) {
            this.restoreTried = true;
            this.audio.play().catch(() => {
                this.updateToast();
                this.saveState();
            });
        }
    }

    getCurrentSong() {
        return this.allSongs[this.currentDisco]?.[this.currentSongIndex] || null;
    }

    getState() {
        return {
            disco: this.currentDisco,
            songIndex: this.currentSongIndex,
            isPlaying: !this.audio.paused,
            currentTime: this.audio.currentTime || 0
        };
    }

    formatTime(time) {
        if (!Number.isFinite(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = String(Math.floor(time % 60)).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }
}

const globalPlayer = new GlobalPlayer();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mono Maillot</title>
    <link rel="stylesheet" href="../css/estilos/style.css">
    <script src="../js/script.js" defer></script>
</head>
<body>
    <!-- Imágenes en las esquinas -->
    <img src="../../public/imgs/Abelcok.png" class="corner-img top-left" alt="Abelcok">
    <img src="../../public/imgs/Farlopa.png" class="corner-img top-right" alt="Farlopa">
    <img src="../../public/imgs/Raulitas.png" class="corner-img bottom-left" alt="Raulitas">
    <img src="../../public/imgs/young.png" class="corner-img bottom-right" alt="Young">

    <div class="container">
        <header>
             <img src="../../public/imgs/Logo.png"  class="image" alt="Mono Maillot">
        </header>
        <section id="player-container">
            <div class="player">
                <div class="cover">
                    <div class="mm"><img id="cover-img" src="" alt="Cover"></div>
                </div>
                <h2 id="song-title">Song Title</h2>
                <div class="controls">
                    <button id="prev" class="nav-btn">⏮</button>
                    <button class="play">▶</button>
                    <button id="next" class="nav-btn">⏭</button>
                </div>
                <div class="time-control">
                    <span class="current">0:00</span>
                    <input type="range" class="progress" value="0">
                    <span class="duration">0:00</span>
                </div>
                <div class="volume-control">
                    <button class="mute">🔊</button>
                    <input type="range" class="volume" min="0" max="1" step="0.01" value="1">
                </div>
                <a id="download" href="#" download>⬇ Descargar</a>
            </div>
            <div id="lyrics-container">
                <div id="lyrics-content">
                    <!-- Lyrics will be injected here -->
                    <p>Selecciona una canción para ver la letra.</p>
                </div>
            </div>
        </section>

        <audio id="audio">
            <source src="" type="audio/mpeg">
        </audio>

         
        <footer>
                <p>© 2026 Mono Maillot. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
const songs = [
    {
        title: "FFH",
        src: "songs/FFH.mp3",
        cover: "imgs/FFHPortada.png",
        lyrics: [
            { time: 13, text: "Five fucking hours in the stars(in the stars)" },
            { time: 16, text: "five fucking hours in the stars(in the stars)" },
            { time: 19, text: "you try to play with me but nah(but nah)" },
            { time: 22, text: "im going to fuck you in doggistyle(style)" },
            { time: 26, text: "Te creías el rey del rap" },
            { time: 28, text: "tu baby la tengo guarda" },
            { time: 30, text: "tu papis me van a escuchar" },
            { time: 31, text: "tu te crees alguien pero na" },
            { time: 33, text: "Tu vives en una película" },
            { time: 34, text: "es lalaland" },
            { time: 35, text: "y ahora pa pa no ratata" },
            { time: 37, text: "dos disparos nada más" },
            { time: 39, text: "porque en ra-tas" },
            { time: 41, text: "no hay que gastar" },
            { time: 42, text: "tu quieres fluir" },
            { time: 44, text: "pues seminal" },
            { time: 46, text: "Five fucking hours in the stars(in the stars)" },
            { time: 49, text: "five fucking hours in the stars(in the stars)" },
            { time: 53, text: "you try to play with me but nah(but nah)" },
            { time: 57, text: "im going to fuck you in doggistyle(style)" },
            { time: 60, text: "Wanna fuuck" },
            { time: 61, text: "baby you're Mona Lisaaa" },
            { time: 63, text: "a ti te quiero pintar" },
            { time: 65, text: "esto no va ha acabar" },
            { time: 67, text: "tu quieres mas ron pero te toca mamar" },
            { time: 73, text: "Five fucking hours in the stars(in the stars)" },
            { time: 76, text: "five fucking hours in the stars(in the stars)" },
            { time: 79, text: "you try to play with me but nah(but nah)" },
            { time: 81, text: "im going to f*ck you in doggistyle(style)" },
            { time: 86, text: "Tu ya estuviste en dagestan" },
            { time: 89, text: "cinco meses reformando" },
            { time: 90, text: "pero sin mejorar" },
            { time: 92, text: "tu baby esta llamando" },
            { time: 93, text: "no lo voy a colgar" },
            { time: 94, text: "tus padres preguntando" },
            { time: 96, text: "si podemos colaborar" },
            { time:98, text: "tu perdiste los comandos" },
            { time: 99, text: "ahora te toca picar" },
            { time: 101, text: "yo he vido desde abajo" },
            { time: 103, text: "y ahora nos llaman papas" },
            { time: 106, text: "Five fucking hours in the stars(in the stars)" },
            { time: 109, text: "five fucking hours in the stars(in the stars)" },
            { time: 112, text: "you try to play with me but nah(but nah)" },
            { time: 115, text: "im going to fuck you in doggistyle(style)" },
            { time: 119, text: "Tu tuviste algo pero ya no eres nada" },
            { time: 122, text: "me llamas llorando por la madrugada" },
            { time: 126, text: "trataste de hundir un barco que volaba" },
            { time: 129, text: "ahora te toca ir cerrando las heridas que no sana" },
            { time: 132, text: "Five fucking hours in the stars(in the stars)" },
            { time: 135, text: "five fucking hours in the stars(in the stars)" },
            { time: 139, text: "you try to play with me but nah(but nah)" },
            { time: 143, text: "im going to f*ck you in doggi style(style)" },
        ]
    },
    {
        title: "Insano",
        src: "songs/Insano.mp3",
        cover: "imgs/InsanoPortada.png",
        lyrics: [
            { time: 9, text: "Y me he cansado" },
            { time: 11, text: "toca apostar todo en una mano" },
            { time: 14, text: "si tu me llama entonces le llegamos" },
            { time: 16, text: "saca la reglas,vamos a medirno el n*bo" },
            { time: 19, text: "y ya se que somos más de tres" },
            { time: 22, text: "tengo al Oscar, al raúl y al Noliel" },
            { time: 23, text: "llamame mas tarde que ahora me toca comer" },
            { time: 25, text: "tu novia me ha llamado y se lo voy a coger" },
            { time: 31, text: "Es que soy un cabron" },
            { time: 32, text: "y que lo digas" },
            { time: 33, text: "pa igualarme tienes que escribir par de barritas" },
            { time: 36, text: "te metiste pa por lo menos hacer una buena linea" },
            { time: 39, text: "Que dios me los bendiga" },
            { time: 42, text: "Por que llego con carbón" },
            { time: 43, text: "pa hacerme una cachimba" },
            { time: 44, text: "la cocinó,esta lleva sorpresita" },
            { time: 47, text: "le metió un polen que venía de siria" },
            { time: 50, text: "explosión, por suerte tengo baliza" },
            { time: 53, text: "Dando mas vueltas que valkiria" },
            { time: 55, text: "yo no rompo muro" },
            { time: 56, text: "yo rompo par de culos" },
            { time: 57, text: "que me dicen papi tu eres un chulo" },
            { time: 59, text: "suena patada de canguro" },
            { time: 61, text: "lo cambio a extremoduro" },
            { time: 62, text: "pongo a Melendi pero cuando fumaba duro" },
            { time: 64, text: "En españa un cani en argentina un turro" },
            { time: 67, text: "mi ambición es por testarudo" },
            { time: 69, text: "a mis padres un avion" },
            { time: 70, text: "para que vean el mundo" },
            { time: 71, text: "y que vean a su hijo con orgullo" },
            { time: 74, text: "Yo no escribo esta canción para hacerme el chulo" },
            { time: 77, text: "me hago el chulo porque escribi esta cancion en un segundo" },
            { time: 79, text: "las lágrimas de Abuela cuando me vea cruzar el mundo" },
            { time: 82, text: "eso no lo pagas con ningún presunto" },
            { time: 85, text: "No necesito joyas, ni una Mansion" },
            { time: 88, text: "solo necesito tener cerca al que siempre me rodeo" },
            { time: 91, text: "empezamos la canción como una destrucción" },
            { time: 94, text: "el tiempo reconstruye porque lo escribo yo" },
            { time: 97, text: "Y esta es tu última misión" },
            { time: 99, text: "escribe un tema que levante una nación" },
            { time: 102, text: "yo escribí un álbum que creo una religion" },
            { time: 104, text: "escuchan mis versos formando en el escuadrón" },
            { time: 108, text: "no te rindas nunca mira donde estoy" },
            { time: 111, text: "Y mira donde estoy" },
            { time: 113, text: "con mi convoy" },
            { time: 115, text: "esta canción no es apta para toys" },
            { time: 117, text: "yo evoluciono como los kois" },
            { time: 119, text: "te saco un album, diamond boys" },
            { time: 124, text: "Y se acicala" },
            { time: 126, text: "la baby parece chewbacca" },
            { time: 128, text: "metió un grito y no estamos en narnia" },
            { time: 131, text: "esto es una guerra de las galaxias" },
            { time: 133, text: "así que antes de acabar dime como te llamas" },
            { time: 138, text: "tu tienes un flow que acapara" },
            { time: 140, text: "salimos en revistas de la caras" },
            { time: 143, text: "y como si nada" },
            { time: 145, text: "te preparaste para una lluvia dorada" },
            { time: 148, text: "tenía ganas de dejar la yeguada" },
            { time: 150, text: "tu miraste al frente parece una cabra" },
            { time: 153, text: "estamos fuertes ya sonamos en Alaska" }
        ]
    },
       {
    title: "MASA",
    src: "songs/MASA.mp3",
    cover: "imgs/MasaPortada.png",
    lyrics: [
        // INTRO
        { time: 2, text: "Yeah," },
        { time: 6, text: "2006 en la cartera," },
        { time: 8, text: "Maillot sonando, noche sincera," },
        { time: 11, text: "Mono Maillot…" },

        // VERSO 1
        { time: 14, text: "En la cartera un condón caducado desde 2006," },
        { time: 17, text: "espero que salga antes que el GTA 6." },
        { time: 20, text: "Conocí a una chica, me dijo: ¿qué es lo que hacéis?," },
        { time: 24, text: "me puse tan nervioso que me tuve que correr otra vez." },

        { time: 27, text: "Con el fondo de pantalla de Lana Del Rey," },
        { time: 29, text: "yo con un vídeo de Lana sonando en el MP3." },
        { time: 32, text: "Y es que no te lo vas a creer," },
        { time: 33, text: "Mono Maillot rompiendo la industria otra vez." },

        { time: 34, text: "Con los panas de fiesta en Conil," },
        { time: 36, text: "con nosotros la movie no va a morir." },
        { time: 38, text: "Ojeras marcadas, no puedo dormir," },
        { time: 40, text: "la noche me llama, me toca fluir." },
        { time: 41, text: "En un beat que empieza lento como el visir," },
        { time: 43, text: "cuando sube el bajo ya no quiero huir." },

        // CORO
        { time: 44, text: "Llevando las penas pa’ casa," },
        { time: 48, text: "pero esta noche todo se pasa." },
        { time: 51, text: "Mono Maillot todo lo arrasa," },
        { time: 54, text: "humo en el aire, luces que abrazan." },

        { time: 57, text: "Que prendan la American zaza," },
        { time: 59, text: "con los panas chill en la terraza." },
        { time: 64, text: "Si el mundo pesa, se deshace," },
        { time: 67, text: "cuando suena el bajo todo encaja." },

        // VERSO 2
        { time: 76, text: "Botellas vacías, promesas rotas," },
        { time: 78, text: "risas que tapan las noches locas." },
        { time: 80, text: "Ella me mira, se muerde la boca," },
        { time: 81, text: "dice que le gusta cómo esto provoca." },

        { time: 83, text: "No creo en el tiempo ni en los relojes," },
        { time: 85, text: "vivimos despacio, matando dolores." },
        { time: 86, text: "Fotos borrosas, mil corazones," },
        { time: 88, text: "historias que mueren al salir del coche." },

        { time: 89, text: "Yo no presumo, yo solo lo cuento," },
        { time: 91, text: "todo lo bueno nace del intento." },
        { time: 93, text: "Si caigo al suelo, vuelvo contento," },
        { time: 95, text: "porque de aquí sale todo lo que siento." },

        // CORO 2
        { time: 97, text: "Llevando las penas pa’ casa," },
        { time: 99, text: "pero esta noche todo se pasa." },
        { time: 103, text: "Mono Maillot todo lo arrasa," },
        { time: 107, text: "humo en el aire, luces que abrazan." },

        { time: 111, text: "Que prendan la American zaza," },
        { time: 113, text: "con los panas chill en la terraza." },
        { time: 117, text: "Si el mundo pesa, no pasa nada," },
        { time: 121, text: "cuando suena el bajo todo encaja." },

        // PUENTE
        { time: 126, text: "Y si mañana todo se acaba," },
        { time: 129, text: "que nos pillen bailando en la nada." },
        { time: 132, text: "Con Maillot sonando de madrugada," },
        { time: 135, text: "la vida duele menos si no piensas nada." },     

        { time: 136, text: "No busco respuestas ni fama prestada," },
        { time: 140, text: "solo otra noche que no pida nada." },
        { time: 144, text: "Si el alma tiembla, se calma, se pasa," },
        { time: 148, text: "Mono Maillot cerrando la plaza." },

        // CORO FINAL
        { time: 152, text: "Llevando las penas pa’ casa," },
        { time: 154, text: "pero esta noche todo se pasa." },
        { time: 156, text: "Mono Maillot todo lo arrasa," },
        { time: 160, text: "esto no muere, solo se transforma." },

        { time: 164, text: "Que prendan la American zaza," },
        { time: 166, text: "con los panas viendo cómo amanece." },
        { time: 170, text: "Si el tiempo corre, que no nos alcance," },
        { time: 173, text: "vivimos ahora, que luego se desvanece." }

    ]
       },
    {
        title: "Noche loca",
        src: "songs/Noche loca.mp3",
        cover: "imgs/NocheLocaPortada.png",  
        lyrics: [
            { time: 11, text: "Tú y yo en el backseat" },
            { time: 13, text: "ojalá se vuelva a repetir" },
            { time: 16, text: "hoy toca desmentir" },
            { time: 19, text: "todo lo que algún día se dijo de mí" },
            { time: 22, text: "Mares ficticios en los que me ahogo" },
            { time: 25, text: "siempre salgo a flote, de cualquier modo" },
            { time: 29, text: "yo no mido mucho pero lo veo todo" },
            { time: 32, text: "baby, tú me tienes loco" },
            { time: 36, text: "El click-clack de cada tecla al pulsar" },
            { time: 40, text: "un palo más que se va a sacar" },
            { time: 43, text: "y tú no lo vas a olvidar" },
            { time: 45, text: "nos hace falta una canción pa’ despegar" },
            { time: 48, text: "Con la segunda el cielo llegamos a tocar" },
            { time: 52, text: "miradas que no saben disimular" },
            { time: 55, text: "todo arde cuando te acercas más" },
            { time: 58, text: "sé que esta historia no quiere final" },
            { time: 62, text: "Noche loca" },
            { time: 65, text: "siente cuando te toca" },
            { time: 67, text: "la baby me llama, sola se aloca" },
            { time: 70, text: "tengo la trama, tú tienes la mota" },
            { time: 75, text: "Más eléctrico que Enel" },
            { time: 78, text: "es que no puede ser" },
            { time: 82, text: "débil a la goma, pues toma" },
            { time: 84, text: "sé que soy tu debilidad" },
            { time: 89, text: "Todavía me puedo acordar" },
            { time: 91, text: "de esas noches sin hora ni lugar" },
            { time: 94, text: "de una mamatropolis de las que tú sabes dar" },
            { time: 97, text: "dejando marcas que no se pueden borrar" },
            { time: 101, text: "Luces rojas, verdes, azul neón" },
            { time: 104, text: "perdidos siguiendo el ritmo del corazón" },
            { time: 107, text: "dicen mi nombre pero sin razón" },
            { time: 110, text: "solo tú sabes quién soy yo" },
            { time: 113, text: "Y aunque mañana todo se apague" },
            { time: 116, text: "sé que esta vibra no se nos cae" },
            { time: 119, text: "si me pierdo, baby, tú me traes" },
            { time: 122, text: "somos pecado que nadie frena ya" },
            { time: 127, text: "Noche loca" },
            { time: 129, text: "siente cuando te toca" },
            { time: 132, text: "la baby me llama, sola se aloca" },
            { time: 135, text: "piel con piel, la noche provoca" },
            { time: 138, text: "Más eléctrico que Enel" },
            { time: 142, text: "es que no puede ser" },
            { time: 147, text: "si tú me miras así de nuevo" },
            { time: 151, text: "sé que volvemos a caer" },
            { time: 158, text: "Tú y yo en el backseat…" },
            { time: 163, text: "ojalá se vuelva a repetir" }
        ]
    },
    {
        title: "Not mine",
        src: "songs/Not mine.mp3",
        cover: "imgs/NotMinePortada.png",
        lyrics: [
            { time: 7, text: "Not mine, not mine" },
            { time: 8, text: "veo una piba digo this is mine" },
            { time: 10, text: "tu olor combina con mis Off-White" },
            { time: 12, text: "estamos en otra liga desde la high school" },
            { time: 14, text: "you wanna prove it" },
            { time: 16, text: "maybe sometime you lose it" },
            { time: 17, text: "baby como tú no hay" },
            { time: 20, text: "tú no entiendes los vibes" },
            { time: 22, text: "Tú mueves ese culo muy yummy" },
            { time: 24, text: "yo te enseño como Nanami" },
            { time: 26, text: "tú lo que quieres es lo fácil" },
            { time: 27, text: "pero eso ya no" },
            { time: 30, text: "Entro rápido, me llaman rayo" },
            { time: 32, text: "quieren verlo de cerca, pero estallo" },
            { time: 34, text: "quieren una ofrenda, que se la dé yo" },
            { time: 35, text: "los puse en cuarentena cuando el tema salió" },
            { time: 36, text: "Yo no soy tu papi, pero papi me suelen llamar" },
            { time: 39, text: "toma papel y lápiz que te lo voy a explicar" },
            { time: 43, text: "tú me llamaste pa’ un rapi, pero tengo que cantar" },
            { time: 46, text: "tú lo quieres explicit y así te lo voy a dar" },
            { time: 51, text: "A 120 en la autovía, no puedo pasar" },
            { time: 55, text: "le meto el pingo a tu amiga, ella lo quería disfrutar" },
            { time: 58, text: "se sumó toda la familia, esto es una gira mundial" },
            { time: 62, text: "quieren vestirse con las mías, pero antes no querían estar" },
            { time: 65, text: "Ponle una sangría al pana, se va a deshidratar" },
            { time: 70, text: "tú quisiste la vacía, a mí no me lo tienes que contar" },
            { time: 73, text: "Rata, empieza a sonar" },
            { time: 75, text: "el rifle dispara, es talibán" },
            { time: 76, text: "quieren correr, pero no podrán" },
            { time: 77, text: "quieren beber, yo pongo la casa" },
            { time: 80, text: "Not mine, not mine" },
            { time: 81, text: "veo una piba digo this is mine" },
            { time: 83, text: "tu olor combina con mis Off-White" },
            { time: 85, text: "estamos en otra liga desde la high school" },
            { time: 88, text: "you wanna prove it" },
            { time: 89, text: "maybe sometime you lose it" },
            { time: 90, text: "baby como tú no hay" },
            { time: 93, text: "tú no entiendes los vibes" },
            { time: 95, text: "Tío, tío, siento el frío" },
            { time: 97, text: "todos quieren de lo mío" },
            { time: 98, text: "con vuestras pibas hago el trío" },
            { time: 100, text: "si se suman yo no he sido" },
            { time: 102, text: "I can, I can" },
            { time: 104, text: "tú eres una mosca, yo un pekinés" },
            { time: 106, text: "touché, touché" },
            { time: 107, text: "suena la esquina con Calvin Klein" },
            { time: 109, text: "Carmen, Carmen" },
            { time: 111, text: "pone su toto como pastel" },
            { time: 116, text: "Not mine, not mine" },
            { time: 117, text: "veo una piba digo this is mine" },
            { time: 119, text: "tu olor combina con mis Off-White" },
            { time: 121, text: "estamos en otra liga desde la high school" },
            { time: 124, text: "you wanna prove it" },
            { time: 125, text: "maybe sometime you lose it" },
            { time: 127, text: "baby como tú no hay" },
            { time: 128, text: "tú no entiendes los vibes" },
            { time: 136, text: "pero la miro y digo mine…" },
            { time: 143, text: "pero la miro y digo mine…" }
        ]
    },
    {
        title: "Dioses del reggaeton",
        src: "songs/dioses del reggaeton.mp3",
        cover: "imgs/PortadaDioses.png",
        lyrics: [
            { time: 0, text: "El rayo ya ca-yó" },
            { time: 3, text: "Las nubes que traen la tormenta lle-go" },
            { time: 6, text: "No hablo de Inazuma, hablo de Mono Mai-llot" },
            { time: 9, text: "Con la fuerza de un dios, yeah, yeah..." },
            { time: 14, text: "Tu chica por reyes alguno de los míos pidió" },
            { time: 17, text: "Subimos tanto que se asus-to" },
            { time: 19, text: "La industria no se prepara-ó" },
            { time: 21, text: "Estamos arriba, rompimos to’" },
            { time: 23, text: "Y llegaron los dioses del reggaetón" },
            { time: 25, text: "Reggaetón o trap, lo mismo nos dió" },
            { time: 27, text: "Tenemos tanta fuerza que nos comparan con Bai Long" },
            { time: 30, text: "Hermanito, pa’ ganarnos tienes que pedirle un favor a Shen Long" },
            { time: 34, text: "Y si un friki puede subir" },
            { time: 36, text: "Un friki se viste de gala por ti" },
            { time: 38, text: "Un friki te tiene bailando en el beat" },
            { time: 40, text: "Te hace mover aunque no quieras, sí" },
            { time: 42, text: "Pero qué, pero qué quieres" },
            { time: 43, text: "La escena en mis manos, tú tiembla si vienes" },
            { time: 45, text: "Las botas me pongo pa’ entrar al barro" },
            { time: 47, text: "De la nada subí y no paro" },
            { time: 50, text: "Yo no necesito una varita mágica" },
            { time: 52, text: "Solo mi voz y mi lírica trágica" },
            { time: 54, text: "Flow de videojuego, mi estética" },
            { time: 56, text: "Cada tema una obra mítica" },
            { time: 58, text: "Desde el sótano hasta el cielo" },
            { time: 59, text: "Sudor, fuego y terciopelo" },
            { time: 61, text: "Si el trueno suena es porque vuelo" },
            { time: 63, text: "Mono Maillot rompe el suelo" },
            { time: 65, text: "De Sevilla a Dublín retumbó" },
            { time: 67, text: "El beat suena y el piso tembló" },
            { time: 69, text: "Los dioses bajaron, el juego cambió" },
            { time: 70, text: "El rayo cayó y el mundo miró" },
            { time: 72, text: "Somos los dioses del reggaetón" },
            { time: 74, text: "No hay truco, solo inspiración" },
            { time: 76, text: "Del anime al trap, la conexión" },
            { time: 78, text: "Mono Maillot, revolución" }
        ]
    },
    {
        title: "Moñota",
        src: "songs/moñota.mp3",
        cover: "imgs/MoñotaPortada.png",      
        lyrics: [
            { time: 10, text: "Quiero una moñota que combine con mi outfit" },
            { time: 13, text: "medio venezolana que me habla como Gonzy" },
            { time: 16, text: "si eres pre 2000 entonces tírame al twenty" },
            { time: 19, text: "me borré Twitter porque parecía Only" },
            { time: 21, text: "Tiene el toto rosa, no lo creo hasta el prove it" },
            { time: 24, text: "esta mierda está seca, pega como Luffy" },
            { time: 26, text: "tiraste del prepucio, dicen gomu no mi" },
            { time: 30, text: "pelo naranjita y ladrona como Nami" },
            { time: 32, text: "no sabías dónde y te montaste en mi Pagani" },
            { time: 43, text: "Mami, súbete encima de mí" },
            { time: 46, text: "que esta noche no tiene fin" },
            { time: 55, text: "dice que se quiere venir" },
            { time: 57, text: "desde que me vio subir" },
            { time: 64, text: "Botella, humo y sudor" },
            { time: 67, text: "me pide que le dé calor" },
            { time: 70, text: "se envició de mi voz" },
            { time: 73, text: "ahora quiere más de los dos" },
            { time: 77, text: "Manda fotos privas con la prima en la cama" },
            { time: 79, text: "quieren que Noli y Abel le den rama" },
            { time: 82, text: "decía que era real pero toa estaba pintada" },
            { time: 84, text: "muñequitas como tú nunca me pusieron trabas" },
            { time: 88, text: "Decía que era lanzada" },
            { time: 90, text: "le fui a saludar, se quedó paralizada" },
            { time: 93, text: "dijo que no era real y que la levantara" },
            { time: 95, text: "nos sacamos un vídeo viral y solo era la entrada" },
            { time: 99, text: "Mami, súbete encima de mí" },
            { time: 101, text: "que esta noche no tiene fin" },
            { time: 109, text: "dice que se quiere venir" },
            { time: 112, text: "desde que me vio subir" },
            { time: 119, text: "Botella, humo y sudor" },
            { time: 122, text: "me pide que le dé calor" },
            { time: 125, text: "se envició de mi voz" },
            { time: 128, text: "ahora quiere más de los dos" },
            { time: 132, text: "Un beso pa mamá que está en la casa" },
            { time: 134, text: "viendo cómo su hijo ahora llena la plaza" },
            { time: 137, text: "antes dudaban, ahora ninguno rechaza" },
            { time: 139, text: "tiré el pan al aire y la falsa lo caza" },
            { time: 141, text: "Me pedía amor, pero no estoy en eso" },
            { time: 144, text: "corazón frío, congelado en el proceso" },
            { time: 148, text: "un polvo y me fui, tenía otro ingreso" },
            { time: 150, text: "vida rápida, no hay tiempo pa receso" },
            { time: 154, text: "Ya pedí el Rappi, la baby quiere el quicky" },
            { time: 158, text: "dice que conmigo se siente lucky" },
            { time: 160, text: "cara de santa pero es freaky" },
            { time: 162, text: "cuando la castigo se pone sticky" }
        ]
    }
];

let songIndex = 0;

// DOM Elements
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

// Initialize Player
loadSong(songs[songIndex]);

// Functions
function loadSong(song) {
    songTitle.innerText = song.title;
    audio.src = song.src;
    coverImg.src = song.cover;
    downloadLink.href = song.src;
    
    // Load lyrics
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

// Lyrics Logic
function loadLyrics(lyrics) {
    lyricsContent.innerHTML = "";
    if (!lyrics || lyrics.length === 0) {
        lyricsContent.innerHTML = "<p>No lyrics available.</p>";
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
    if (!lyrics) return;
    
    // Find current line
    let currentLineIndex = -1;
    
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            currentLineIndex = i;
        } else {
            break;
        }
    }
    
    // Highlight logic
    const allLines = lyricsContent.querySelectorAll("p");
    allLines.forEach(line => line.classList.remove("highlight"));
    
    if (currentLineIndex !== -1) {
        const activeLine = document.getElementById(`line-${currentLineIndex}`);
        if (activeLine) {
            activeLine.classList.add("highlight");
            
            // Solo hacer scroll si la línea no está visible
            const lyricsContainer = document.getElementById("lyrics-container");
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = activeLine.getBoundingClientRect();

            if (lineRect.top < containerRect.top || lineRect.bottom > containerRect.bottom) {
                activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }
}

// Event Listeners
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

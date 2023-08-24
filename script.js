let score0 = document.getElementById("currentScoreHtml--0");
let score1 = document.getElementById("currentScoreHtml--1");
let highScore0 = document.getElementById("highScoreHtml--0");
let highScore1 = document.getElementById("highScoreHtml--1");
let btnDado = document.getElementById("rollBtnHtml");
let dadoFisico = document.getElementById("figuraDado");
let dadoFisicoContainer = document.getElementById("dadoId");
let player1Container = document.getElementById("playerContainer--0");
let player2Container = document.getElementById("playerContainer--1");
let btnHold = document.getElementById("holdHtml");
let btnNewGame = document.getElementById("newBtnHtml");
let scores, currentScore, activePlayer, playing;

iniciarJuego(player1Container, player2Container, score0, score1, highScore0, highScore1);

btnNewGame.addEventListener("click", ()=>iniciarJuego (player1Container, player2Container, score0, score1, highScore0, highScore1));

function iniciarJuego(player1Container, player2Container, score0, score1, highScore0, highScore1) {

    

    //Valores iniciales
    score0.textContent = 0;
    score1.textContent = 0;
    highScore0.textContent = 0;
    highScore1.textContent = 0;
    playing = true;

    player1Container.classList.remove("player-ganador");
    player2Container.classList.remove("player-ganador");
    player1Container.classList.add("player-container-current");

    /* highScore0=0;
    highScore1=0; */

    scores = [0, 0]; // Aqui se guardarán los scores de los jugadores
    currentScore = 0;
    activePlayer = 0; //Estamos manejando un sistema donde player 0 es jugador 1 y player 1 es jugador 2


    //Lanzamiento del dado
    btnDado.addEventListener("click", lanzarDado)

    btnHold.addEventListener("click", hold)
}

function lanzarDado() {
    if (playing) {
        let resultadoDado = Math.trunc(Math.random() * 6) + 1;
        //Mostrar figura del dado
        dadoFisico.classList.remove("oculto")
        dadoFisico.src = `./imagenes/dice-${resultadoDado}.png`;
        /* Mediante .src se puede modificar la ruta de la imagen, lo cual 
        hace que la imagen a mostrar sea dinamica, es decir, que se pueda modificar el 
        nombre de la imagen a mostrar */

        if (resultadoDado !== 1) {
            currentScore += resultadoDado;

            document.getElementById(`currentScoreHtml--${activePlayer}`).textContent = currentScore;
            /* Tal como se hace con el dado, se usan temple strings  para que se edite el currentScore
            de manera dinamica de acuerdo a que jugador este jugando */
        } else {

            cambiarJugador()
        }
    }
};

function hold() {
    if (playing) {
        scores[activePlayer] += currentScore; //scores es un array, y active player marcará si juega player 1(0) o player 2(1)

        document.getElementById(`highScoreHtml--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            document.getElementById(`playerContainer--${activePlayer}`).classList.add("player-ganador");
            document.getElementById(`playerContainer--${activePlayer}`).classList.remove("player-container-current");
            dadoFisicoContainer.classList.add("oculto")
        } else {
            cambiarJugador()
        }
    }

}

function cambiarJugador() {
    document.getElementById(`currentScoreHtml--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    // Cambio el color del jugador activo
    player1Container.classList.toggle("player-container-current");
    player2Container.classList.toggle("player-container-current");
}
// SI el numero del dado es igual a 1, el jugador pierde puntos y el turno pasa al otro







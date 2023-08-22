
// Lanzar dado

/* let botonRollDice=document.getElementById("rollBtnHtml");
botonRollDice.addEventListener("click", acumularPuntos);
let numeroAlAzar=0 */
/* function lanzarDado(){
    numeroAlAzar=Math.trunc(Math.random()*6)+1;
    
    
    return numeroAlAzar;
}
 */
// Acumular puntos


/* let dadoAcumulado=0
function acumularPuntos(){
   

    let currentScore= document.getElementById("currentScoreHtml");

    let valorDado= lanzarDado();

    dadoAcumulado= dadoAcumulado+ valorDado;
    
    currentScore.textContent=dadoAcumulado;
    if(dadoAcumulado>21){
        alert("perdiste");
        currentScore.textContent="21+";
    }
    
    return dadoAcumulado;

}

// Guardar resultado

let botonHold= document.getElementById("holdHtml");
botonHold.addEventListener("click", hold)


function hold (){
    let highscore= document.getElementById("highscoreHtml");
    

    let jugador1Html=document.getElementById("player1Container");
    jugador1Html.classList.toggle("player-container-current")

    let jugador2Html=document.getElementById("player2Container");
    jugador2Html.classList.add("player-container-current");

    

    highscore.textContent=dadoAcumulado;


    
} */



////////////////////////////////////


/* let playing



let numeroAlAzar = 0

let currentPlayer= "playerOne"
let dadoAcumuladoPlayer1=0
let dadoAcumuladoPlayer2=0 */


/* if(currentPlayer==="playerOne"){
    player1()
}
else{
    player2()
} */


/* function player1() {
   

    let namePlayer= "playerOne";
    let botonRollDice = document.getElementById("rollBtnHtml");
    botonRollDice.addEventListener("click", acumularPuntos);

    let botonHold = document.getElementById("holdHtml");
    botonHold.addEventListener("click", ()=> hold (namePlayer))

    dadoAcumuladoPlayer1=0
    
} */

// Acumular puntos
/* function acumularPuntos() {

    if (currentPlayer === "playerOne") {
        let currentScore = document.getElementById("currentScoreHtml");

        let valorDado = lanzarDado();

        dadoAcumuladoPlayer1 = dadoAcumuladoPlayer1 + valorDado;

        currentScore.textContent = dadoAcumuladoPlayer1;
        if (dadoAcumuladoPlayer1 > 21) {
            alert("perdiste");
            currentScore.textContent = "21+";
        }

       
    } else {
        let currentScore = document.getElementById("currentScoreHtml2");

        let valorDado = lanzarDado();

        dadoAcumuladoPlayer2 = dadoAcumuladoPlayer2 + valorDado;

        currentScore.textContent = dadoAcumuladoPlayer2;
        if (dadoAcumuladoPlayer2 > 21) {
            alert("perdiste");
            currentScore.textContent = "21+";
        }

    }
} */




let dadoAcumulado = 0



/* function player2() {
    let namePlayer= "playerTwo"

    currentPlayer="playerTwo"

    let botonRollDice = document.getElementById("rollBtnHtml");
    botonRollDice.addEventListener("click", acumularPuntos );
  
    let botonHold = document.getElementById("holdHtml");
    botonHold.addEventListener("click", ()=> hold (namePlayer))

    dadoAcumuladoPlayer2=0
} */



// Lanzar dado



/* function lanzarDado() {
    numeroAlAzar = Math.trunc(Math.random() * 6) + 1;

   
    return numeroAlAzar;
} */




// Guardar resultado




/* function hold(namePlayer) {
    
    if(namePlayer==="playerOne"){

        let highscore = document.getElementById("highscoreHtml");
       
    
        let jugador1Html = document.getElementById("player1Container");
        jugador1Html.classList.toggle("player-container-current")
    
        let jugador2Html = document.getElementById("player2Container");
        jugador2Html.classList.add("player-container-current");
    
    
    
        highscore.textContent = dadoAcumuladoPlayer1;
        currentPlayer="playerTwo"
        player2()
    
        
    }
    else{
        let highscore = document.getElementById("highscoreHtml2");
    
    
        let jugador1Html = document.getElementById("player1Container");
        jugador1Html.classList.toggle("player-container-current")
    
        let jugador2Html = document.getElementById("player2Container");
        jugador2Html.classList.add("player-container-current");
    
    
    
        highscore.textContent = dadoAcumuladoPlayer2;
    
        
    }
    
    
    



} */


// capturo elementos del html
let score0=document.getElementById("currentScoreHtml--0");
let score1=document.getElementById("currentScoreHtml--1");
let highScore0= document.getElementById("highScoreHtml--0");
let highScore1= document.getElementById("highScoreHtml--1");
let btnDado=document.getElementById("rollBtnHtml");
let dadoFisico= document.getElementById("figuraDado");
let dadoFisicoContainer= document.getElementById("dadoId");
let player1Container= document.getElementById("playerContainer--0");
let player2Container= document.getElementById("playerContainer--1");
let btnHold= document.getElementById("holdHtml");

//Valores iniciales
score0.textContent=0;
score1.textContent=0;
let playing=true;
/* highScore0=0;
highScore1=0; */

let scores= [0,0]; // Aqui se guardarán los scores de los jugadores
let currentScore=0;
let activePlayer=0; //Estamos manejando un sistema donde player 0 es jugador 1 y player 1 es jugador 2


//Lanzamiento del dado
btnDado.addEventListener("click", function(){
    if(playing){
        let resultadoDado=Math.trunc(Math.random()*6)+1;
        //Mostrar figura del dado
        dadoFisico.classList.remove("oculto")
        dadoFisico.src = `./imagenes/dice-${resultadoDado}.png`; 
        /* Mediante .src se puede modificar la ruta de la imagen, lo cual 
        hace que la imagen a mostrar sea dinamica, es decir, que se pueda modificar el 
        nombre de la imagen a mostrar */
    
        if(resultadoDado!==1){
            currentScore+=resultadoDado;
            
            document.getElementById(`currentScoreHtml--${activePlayer}`).textContent=currentScore; 
            /* Tal como se hace con el dado, se usan temple strings  para que se edite el currentScore
            de manera dinamica de acuerdo a que jugador este jugando */
        } else {
                
            cambiarJugador()
        }
    }
    
    
});

btnHold.addEventListener("click", hold)

function hold (){
    if(playing){
        scores[activePlayer]+=currentScore; //scores es un array, y active player marcará si juega player 1(0) o player 2(1)

        document.getElementById(`highScoreHtml--${activePlayer}`).textContent=scores[activePlayer];
    
        if(scores[activePlayer]>=20){
            playing=false;
            document.getElementById(`playerContainer--${activePlayer}`).classList.add("player-ganador");
            document.getElementById(`playerContainer--${activePlayer}`).classList.remove("player-container-current");
            dadoFisicoContainer.classList.add("oculto")
        } else{
            cambiarJugador()
        }
    }
    
}

function cambiarJugador(){
    document.getElementById(`currentScoreHtml--${activePlayer}`).textContent=0;
    currentScore=0;
    if(activePlayer===0){
        activePlayer=1;
    } else{
        activePlayer=0;
    }
// Cambio el color del jugador activo
player1Container.classList.toggle("player-container-current");
player2Container.classList.toggle("player-container-current"); 
}
// SI el numero del dado es igual a 1, el jugador pierde puntos y el turno pasa al otro







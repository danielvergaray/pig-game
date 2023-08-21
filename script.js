
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


let playing



let numeroAlAzar = 0

let currentPlayer= "playerOne"
let dadoAcumuladoPlayer1=0
let dadoAcumuladoPlayer2=0


if(currentPlayer==="playerOne"){
    player1()
}
else{
    player2()
}


function player1() {
    /* playing= true */

    /* currentPlayer="playerOne" */

    let namePlayer= "playerOne";
    let botonRollDice = document.getElementById("rollBtnHtml");
    botonRollDice.addEventListener("click", acumularPuntos);

    let botonHold = document.getElementById("holdHtml");
    botonHold.addEventListener("click", ()=> hold (namePlayer))

    dadoAcumuladoPlayer1=0
    
}

// Acumular puntos
function acumularPuntos() {

    if (currentPlayer === "playerOne") {
        let currentScore = document.getElementById("currentScoreHtml");

        let valorDado = lanzarDado();

        dadoAcumuladoPlayer1 = dadoAcumuladoPlayer1 + valorDado;

        currentScore.textContent = dadoAcumuladoPlayer1;
        if (dadoAcumuladoPlayer1 > 21) {
            alert("perdiste");
            currentScore.textContent = "21+";
        }

       /*  if (currentPlayer === "playerOne") {
            currentPlayer = "playerTwo";
        } */
    } else {
        let currentScore = document.getElementById("currentScoreHtml2");

        let valorDado = lanzarDado();

        dadoAcumuladoPlayer2 = dadoAcumuladoPlayer2 + valorDado;

        currentScore.textContent = dadoAcumuladoPlayer2;
        if (dadoAcumuladoPlayer2 > 21) {
            alert("perdiste");
            currentScore.textContent = "21+";
        }

       /*  if (currentPlayer === "playerTwo") {
            currentPlayer = "playerOne";
        } */
    }
}




let dadoAcumulado = 0



function player2() {
    let namePlayer= "playerTwo"

    currentPlayer="playerTwo"

    let botonRollDice = document.getElementById("rollBtnHtml");
    botonRollDice.addEventListener("click", acumularPuntos );
    /* console.log("player 2") */
    let botonHold = document.getElementById("holdHtml");
    botonHold.addEventListener("click", ()=> hold (namePlayer))

    dadoAcumuladoPlayer2=0
}



// Lanzar dado



function lanzarDado() {
    numeroAlAzar = Math.trunc(Math.random() * 6) + 1;

    /* acumularPuntos(); */
    return numeroAlAzar;
}




// Guardar resultado




function hold(namePlayer) {
    
    if(namePlayer==="playerOne"){

        let highscore = document.getElementById("highscoreHtml");
        /* let dadoAcumulado=acumularPuntos(); */
    
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
        /* let dadoAcumulado=acumularPuntos(); */
    
        let jugador1Html = document.getElementById("player1Container");
        jugador1Html.classList.toggle("player-container-current")
    
        let jugador2Html = document.getElementById("player2Container");
        jugador2Html.classList.add("player-container-current");
    
    
    
        highscore.textContent = dadoAcumuladoPlayer2;
    
        
    }
    
    
    



}

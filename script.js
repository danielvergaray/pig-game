
// Lanzar dado

let botonRollDice=document.getElementById("rollBtnHtml");
botonRollDice.addEventListener("click", acumularPuntos);

function lanzarDado(){
    let numeroAlAzar=Math.trunc(Math.random()*6)+1;
    console.log(numeroAlAzar)
    /* acumularPuntos(); */
    return numeroAlAzar;
}

// Acumular puntos


let dadoAcumulado=0
function acumularPuntos(){
   

    
   
    let currentScore= document.getElementById("currentScoreHtml");
   

    let valorDado= lanzarDado();
    dadoAcumulado= dadoAcumulado+ valorDado;
    
    currentScore.textContent=dadoAcumulado;

    if(dadoAcumulado>21){
        alert("perdiste");
        currentScore.textContent="21+";
    }
}


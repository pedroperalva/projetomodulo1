personagemChaves ();

function personagemChaves (){

    var escolha = prompt ("1- Correr até a porta e sair da casa? \n 2- Ir até o quarto e trancar a porta?");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>Você corre até o quarto, entra, fecha a porta, e a tranca! O silêncio perdura...\n "Será que ele foi embora?"\n
        Quando você começa a se acalmar, escuta um grito: CHIQUINHAAAAAAAAA!!!\nNeste momento o Jason da uma facada na
        trinca e abre a porta!               
        </p>
        <ul>
        <li>1- Passar por baixo das pernas do Jason?</li>
        <li>2- Pular por cima do Jason?</li>
        </ul>
        <a href="../chiquinha fase 3/chiquinha3.html">Responder</a>
        </div>`)
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>Você corre até a porta, mas era arriscado demais e o Jason te alcança primeiro!</p>
        <p>VOCÊ MORREU, GAME OVER!</p>
        <a href="../index.html" class="escolha">Recomeçar jogo</a>
        </div>`)
    }
    else{
        alert ("escolha indevida, responda com 1 ou 2");
        personagemChaves ();
        
    }
    return escolha;
}
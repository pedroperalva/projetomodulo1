personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1- Bater no Kiko? \n2- Deixar o Kiko escapar? ");

    if (escolha == 2){

        document.write(`
        <div class="texto"> 
        <p>
        Você resolve deixar o Kiko escapar dessa vez, a idade bateu! Voltando para pegar o seu jornal e continuar
        lendo, você percebe que há alguém ali sentado lendo o seu jornal! Imediatamente fica irritado e vai tirar 
        satisfação, encosta em seu ombro e vê que quem estava lendo seu jornal era o Jason!
        </p>
        <ul>
        <li>1- Correr para fora da vila?</li>
        <li>2- Correr para dentro de casa?</li>
        </ul>
        <a href="../madruga fase 3/madruga3.html">Responder</a>
        </div>`)
        break;
    }

    else if (escolha == 1){
        document.write(`<div class="texto">
        <p>Você bate no Kiko, e ele grita, "MAMÃAAAAAE"! Dona Florinda aparece e te acerta um tapão na cara!</p>
        <p>VOCÊ MORREU, GAME OVER!</p>
        <a href="../index.html" class="escolha">Recomeçar jogo</a>
        </div>`)
        break;
    }
    else{
        alert ("escolha indevida, responda com 1 ou 2");
        
    }
}
}
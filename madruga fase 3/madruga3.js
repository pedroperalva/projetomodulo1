personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1- Correr para fora da vila?\n2- Correr para dentro de casa?");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>Você corre para dentro de casa, mas o que fazer? Como escapar? O desespero bate, você olha para um lado, para o outro,
        parece não ter salvação! Então que Jason aparece em sua porta, levanta o facão e grita: Você é meu Madruga!
        </p>
        <ul>
        <li>1- Pular a janela?</li>
        <li>2- Pagar o aluguel?</li>
        </ul>
        <a href="../madruga fase 4/madruga4.html">Responder</a>
        </div>`)
        break;
    }

    else if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Você sai da vila assustado e da de cara com o Sr. Barriga</p>
        <p>VOCÊ PAGOU O ALUGUEL, GAME OVER!</p>
        <a href="../index.html" class="escolha">Recomeçar jogo</a>
        </div>`)
        break;
    }
    else{
        alert ("escolha indevida, responda com 1 ou 2");

    }
}
}
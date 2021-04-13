personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1- Acertar o Jason com a vassoura?\n2- Perguntar: Qual é o animal que é dentuço e que come o dia inteiro?");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>O Jason responde: O coelho?\nChiquinha: Que te bate com o joelho! E acerta uma joelhada
        em cheio no Jason que se sente envergonhado por ter sido trollado por uma garotinha, e grita: NÃO ACREDITO! VOU EMBORA!
        </p>
        <p>Você zerou o jogo, parabéns!</p>
        <a href="../index.html">Jogar de novo</a>
        </div>`)
        break;
    }

    else if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Você pega a vassoura, acerta a cabeça do Jason, e ele nem se mexe!</p>
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
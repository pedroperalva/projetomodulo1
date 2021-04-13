personagemChaves ();

function personagemChaves (){

    while(true){

    var escolha = prompt ("1- Passar por baixo das pernas do Jason?\n2- Pular por cima do Jason?");

    if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Você corre, e com o impulso e os joelhos no chão desliza por baixo do Jason, que tenta mas não consegue te segurar!\n
        Passando por ele, você vai em direção a porta e percebe que o Jason havia trancado a porta e está sem a chave! A janela também está
        fechada!\nSem saber mais o que fazer você se vira e vê o Jason parado a sua frente com um olhar sanguinário!
        
        </p>
        <ul>
        <li>1- Acertar o Jason com a vassoura?</li>
        <li>2- Perguntar: Qual é o animal que é dentuço e que come o dia inteiro?</li>
        </ul>
        <a href="../chiquinha fase 4/chiquinha4.html">Responder</a>
        </div>`)
        break;
    }

    else if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>Você tenta pular o Jason, e ele te pega!</p>
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
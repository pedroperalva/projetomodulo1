personagemChaves ();

function personagemChaves (){

    var escolha = prompt ("1- Pular a janela?\n2- Pagar o aluguel?");

    if (escolha == 1){

        document.write(`
        <div class="zerou">
        <p>Você pula a janela, engana o Jason e foge! Se o Sr. Barriga não consegue te pegar, que dirá o Jason!
        </p>
        <p>Você zerou o, jogo parabéns!</p>

        <a href="../index.html">Jogar de novo</a>
        </div>`)
    }

    else if (escolha == 2){

    document.write(`
    <div class="texto">
    <p>Você paga o aluguel! Que vergonha, o Sr. Madruga que conhecemos jamais faria isso!</p>
    <p>VOCÊ PAGOU O ALUGUEL, GAME OVER!</p>
    <a href="../index.html" class="escolha">Recomeçar jogo</a>
    </div>`)
    }
    else{
        alert ("escolha indevida, tente outra vez!");
        personagemChaves ();
        
    }
    return escolha;
}
personagemChaves ();

function personagemChaves (){

    while(true){

        var escolha = prompt ("1- Dar seu sanduíche de presunto para o Jason?\n2- Dar uma facada no coração do Jason?");

    if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Você dá seu sanduíche de presunto para o Jason, que estava faminto e devora tudo com uma mordida! Porém 
        o Jason tem alergia a presunto, se sente sufocado, ajoelha no chão, e morre!</p>
        <p>Você zerou o jogo, parabéns!</p>

        <a href="../index.html">Jogar de novo</a>
        </div>`)
        break;
    }

    else if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>Você acerta uma facada no coração do Jason, mas o Jason não tem coração e arranca sua cabeça!</p>
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
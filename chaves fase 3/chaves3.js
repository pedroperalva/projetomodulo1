personagemChaves ();

function personagemChaves (){

    while(true){

        var escolha = prompt ("1- Perguntar se o Jason quer brincar?\n2- Sair correndo dali?");

    if (escolha == 2){

        document.write(`
        <div class="texto">
        <p>Você começa a correr desesperadamente para a saida da vila e tropeça em um balde d'água (tinha que ser a Dona Florinda)
        , olha para trás e vê o Jason vindo em sua direção, levanta rapidamente e continua a correr! Ao chegar no portão você se depara
         com o portão trancado e percebe que terá de enfrentar o Jason! O que você fará?
        </p>
        <ul>
        <li>1- Dar seu sanduíche de presunto para o Jason?</li>
        <li>2- Dar uma facada no coração do Jason?</li>
        </ul>
        <a href="../chaves fase 4/chaves4.html">Responder</a>
        </div>`)
        break;
    }

    else if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Você brinca com o Jason, e acaba sem um braço!</p>
        <p>VOCÊ MORREU, GAME OVER!</p>
        <a href="../index.html" class="escolha">Recomeçar jogo</a>
        </div>`)
        break;
    }
    else {
        alert ("escolha indevida, responda com 1 ou 2");     
    }

    }

}
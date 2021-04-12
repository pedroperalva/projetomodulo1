personagemChaves ();

function personagemChaves (){

    var escolha = prompt ("1-Bisbilhotar na janela da Bruxa do 71? \n 2-Abrir a porta da casa da Bruxa do 71?");

    if (escolha == 1){

        document.write(`
        <div class="texto">
        <p>Está tudo turvo, você vê uma fumaça verde, e escuta um grito muito alto: SATANÁÁÁÁÁÁÁÁS! Você cai para trás e 
        depois do susto, você resolve ir até os fundos da vila, ver se tem mais alguém acordado para contar com 
        muito medo sobre o que viu na casa da Bruxa do 71. Chegando nos fundos da vila você encontra o kiko de costas
        , se mexendo de forma estranha, tremendo um pouco. Você encosta a mão no ombro dele e quando percebe ele está 
        segurando um facão. Logo ele se vira para você e perceber que é o Jason vestido de kiko! O que você vai fazer?</p>
        <ul>
        <li>1- Perguntar se o Jason quer brincar?</li>
        <li>2- Sair correndo dali?</li>
        </ul>
        <a href="../chaves fase 3/chaves3.html">Responder</a>
        </div>`)
    }

    else if (escolha == 2){
        document.write(`<div class="texto">
        <p>Você abre a porta e a bruxa do 71 joga um feitiço em você!</p>
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
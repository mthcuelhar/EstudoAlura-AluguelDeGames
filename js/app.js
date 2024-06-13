// Jogo 1
// alterarStatusMonopoly()
// id game-1

// Jogo 2
// alterarStatusTicket()
// id game-2

// Jogo 3
// alterarStatusTakenoko()
// id game-3

let contagemAluguel = 1

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemGame = gameClicado.querySelector('.dashboard__item__img');
    let botaoGame = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
           
        if (imagemGame.classList.contains('dashboard__item__img--rented')){
        
            if (confirm(`Voce tem certeza que deseja devolver o jogo ${nomeJogo.textContent} ?`)){
            imagemGame.classList.remove('dashboard__item__img--rented');
            botaoGame.classList.remove('dashboard__item__button--return');
            botaoGame.textContent = 'Alugar';
            contagemAluguel--
            console.log("Jogos alugados ate o momento = " + contagemAluguel);
            }
        }   
        else {
            imagemGame.classList.add('dashboard__item__img--rented');
            botaoGame.classList.add('dashboard__item__button--return');
            botaoGame.textContent = 'Devolver';
            contagemAluguel++
            console.log("Jogos alugados ate o momento = " + contagemAluguel);
        }
}


let qtde = 0;
const cards = [
    'back1', 'back1',
    'back2', 'back2',
    'back3', 'back3',
    'back4', 'back4',
    'back5', 'back5',
    'back6', 'back6',
    'back7', 'back7'

];



while(true){
        qtde = +prompt("Com quantas cartas deseja jogar? (Digite somente números pares de 4 a 14)");
    
        if(qtde<4 || qtde>14 || qtde%2 !==0)
        alert("Número inválido");
            else break;
    }


const cartas = document.querySelector('.cartas');

let primeiroCard = '';
let segundoCard = '';

function revelaCard ({ target })  {
    if(target.parentNode.className.includes('revela-card')){
        return;
    }

    if(primeiroCard === ''){
        target.parentNode.classList.add('revela-card');
        primeiroCard = target.parentNode;
    } else if(segundoCard === ''){
        target.parentNode.classList.add('revela-card');
        segundoCard = target.parentNode;
    }

    
}

function criandoCartas(duplicaCards){
    const card= document.createElement("div"); 
    const front= document.createElement("div");
    const back= document.createElement("div");
   
    card.classList.add("card");
    front.classList.add("face", "front");
    back.classList.add("face", "back");

    front.style.backgroundImage =`url(./img/${duplicaCards[i]}.gif)`;    
    card.appendChild(front);
    card.appendChild(back);

    cartas.appendChild(card);

    card.addEventListener('click', revelaCard);
    return cartas;
    
}

let i=0;

const  duplicaCards= [];

function iniciandoJogo(){
   
    while(qtde>i){
        duplicaCards.push(cards[i]);
        criandoCartas(duplicaCards);
        i++;
    } 
    duplicaCards.sort(embaralhar);
    
    console.log(duplicaCards);
}

function embaralhar(){
    return Math.random() - 0.5;
}

iniciandoJogo();





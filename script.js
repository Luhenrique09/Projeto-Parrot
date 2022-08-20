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
let i=0;
let=j=0;
const  duplicaCards= [];
let primeiroCard = '';
let segundoCard = '';

function iniciandoJogo(){
    while(true){
        qtde = +prompt("Com quantas cartas deseja jogar? (Digite somente números pares de 4 a 14)");
    
        if(qtde<4 || qtde>14 || qtde%2 !==0)
        alert("Número inválido");
            else break;
    }

    while(qtde>i){
        duplicaCards.push(cards[i]);
        i++; 
    } 

    duplicaCards.sort(embaralhar);
   
    while(qtde>j){
        criandoCartas(duplicaCards);
        j++;
    }
}

function embaralhar(){
    return Math.random() - 0.5;
}

function criandoCartas(cards){
    
    const card= document.createElement("div"); 
    const front= document.createElement("div");
    const back= document.createElement("div");
   
    card.classList.add("card");
    front.classList.add("face", "front");
    back.classList.add("face", "back");
    
    front.style.backgroundImage =`url(./img/${cards[j]}.gif)`;    
    card.appendChild(front);
    card.appendChild(back);

    cartas.appendChild(card);

    card.addEventListener('click', revelaCard);

    card.setAttribute('data-character', cards[j]);

    return cartas;
    
}

const cartas = document.querySelector('.cartas');

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

    checkCartas();

}

function checkFinal(){
    const cardVirado = document.querySelectorAll('.okay');

    if (cardVirado.length===qtde){
        alert(`Você ganhou em ${k} jogadas!`);
    }
}

let k=1;
function checkCartas(){
    const primeiroid = primeiroCard.getAttribute('data-character');
    const segundoid = segundoCard.getAttribute('data-character');

    if(primeiroid === segundoid){
        primeiroCard.classList.add('okay');
        segundoCard.classList.add('okay');
        primeiroCard = '';
        segundoCard = '';
        
        checkFinal();
        
    } else if(primeiroid!==segundoid){
        setTimeout(comparar, 500);
    }
    k++;
}

function comparar(){
    primeiroCard.classList.remove('revela-card');
    segundoCard.classList.remove('revela-card');

    primeiroCard = '';
    segundoCard = '';
    }

iniciandoJogo();






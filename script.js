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
        duplicaCards.push(cards[i], cards[i]);
        
        i++;
        criandoCartas();
    } 
    duplicaCards.sort(embaralhar);
    
}



function embaralhar(){
    return Math.random() - 0.5;
}

function criandoCartas(){
    
    const card= document.createElement("div"); 
    const front= document.createElement("div");
    const back= document.createElement("div");
   
    card.classList.add("card");
    front.classList.add("face", "front");
    back.classList.add("face", "back");
    
    front.style.backgroundImage =`url(./img/back${i}.gif)`;    
    card.appendChild(front);
    card.appendChild(back);

    cartas.appendChild(card);

    card.addEventListener('click', revelaCard);

    card.setAttribute('data-character', i);

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

function checkCartas(){
    const primeiroid = primeiroCard.getAttribute('data-character');
    const segundoid = segundoCard.getAttribute('data-character');

    if(primeiroid !== segundoid){
        setTimeout(comparar, 500);
    } 
}

function comparar(){
    primeiroCard.classList.remove('revela-card');
    segundoCard.classList.remove('revela-card');

    primeiroCard = '';
    segundoCard = '';
    }
iniciandoJogo();






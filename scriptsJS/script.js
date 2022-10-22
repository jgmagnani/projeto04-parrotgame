
let qtdCards = Number(prompt("Quantas cartas desejas jogar? Valores entre 4 e 14 (somente par)"));
const gifs = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif']

console.log(gifs)
//Verifica quantidade de cartas dentro dos requisitos (Entre 4 e 14 apenas par)
while ( qtdCards > 14 || qtdCards < 4 || qtdCards % 2 !== 0){    
    if ( qtdCards % 2 !== 0 && Number(qtdCards)){
        alert("O número é impar");
    }    
    qtdCards = prompt("Insira um valor entre 4 e 14 (apenas par)");
}

console.log(qtdCards)


// coloca as cartas na tela
const elemento = document.querySelector('ul');
let addLi = []

for (let index = 0; index < qtdCards; index++) {     
    console.log(elemento)
    elemento.innerHTML += `<li onclick="virarCarta(this)"><img src="imagens/back.png" alt="CARD"></li>`;    

}


function virarCarta(elemento){    
    elemento.classList.toggle('sideCard');
    const arrunma = elemento;
    
    arrunma.innerHTML = `<li><img src="imagens/metalparrot.gif" alt="CARD"></li>`
}
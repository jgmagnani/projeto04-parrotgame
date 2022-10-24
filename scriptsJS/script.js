let jogadas = 0;
let qtdCards = Number(prompt("Quantas cartas desejas jogar? Valores entre 4 e 14 (somente par)"));
let cartas = []
const gifs = [
    'bobrossparrot.gif','bobrossparrot.gif',
    'explodyparrot.gif', 'explodyparrot.gif',
    'fiestaparrot.gif', 'fiestaparrot.gif',
    'metalparrot.gif', 'metalparrot.gif',
    'revertitparrot.gif', 'revertitparrot.gif',
    'tripletsparrot.gif', 'tripletsparrot.gif',
    'unicornparrot.gif', 'unicornparrot.gif']


//Verifica quantidade de cartas dentro dos requisitos (Entre 4 e 14 apenas par)


   
while ( qtdCards > 14 || qtdCards < 4 || qtdCards % 2 !== 0){    
    if ( qtdCards % 2 !== 0 && Number(qtdCards)){
        alert("O número é impar");
    }    
    qtdCards = prompt("Insira um valor entre 4 e 14 (apenas par)");

}


let tempoAtual = document.querySelector(".timer");
let tempooo = tempoAtual.innerHTML


const tempoRolando = setInterval(cronometro, 1000);

function cronometro(){
    tempoAtual.innerHTML ++;
}

// coloca as cartas em um array

let addLi = []

for (let index = 0; index < qtdCards; index++) {     
    
    addLi.push( `
    <div onclick="virarCarta(this)" class="cards">
        <div class="frente lista">
            <img src="imagens/back.png" alt="CARD">
        </div>
        <div class="tras lista">
            <img src="imagens/${gifs[index]}" alt="CARD">
        </div>
    </div>
    `);   
    
}
//faz o sort das cartas na tela...
addLi.sort(comparar)
//coloca as cartas na tela
const criaCarta = document.querySelector('.cartas');

for (let index = 0; index < addLi.length; index++) {
    criaCarta.innerHTML += addLi[index]          
}

//Função criada no click da carta para virar ela

function virarCarta(elemento){   
    
    if ( elemento.classList.contains("sideCard")){
        return
    }

    elemento.classList.add("sideCard");
    cartas.push(elemento);
    
    jogadas++;
    
    if (cartas.length == 2) {
        if (cartas[0].innerHTML !== cartas[1].innerHTML) {
            setTimeout(desvirar, 1000, cartas[0], cartas[1])
        }        
        cartas = []     
    }
    if(document.querySelectorAll(".sideCard").length == qtdCards){
        setTimeout(acabou,500)
    }
}

function desvirar(carta1, carta2){
   
    carta1.classList.remove("sideCard")
    carta2.classList.remove("sideCard")
   
}

function comparar() {
    return Math.random() - 0.5;
}

function acabou() { 
    PararCronometro();
    alert(`Você ganhou em ${jogadas} jogadas e ${tempoAtual.innerHTML} segundos!`)
    let jogarNovamente = prompt('Deseja jogar novamenete? apenas sim ou não')
    
    
    while (jogarNovamente !== "sim") {             
        if (jogarNovamente === 'não') {
            break
        }
        jogarNovamente = prompt('Responda penas com sim ou não')
    }

    if (jogarNovamente === "sim") {
        location.reload()
    }

}

function PararCronometro(){
    clearInterval(tempoRolando);
}
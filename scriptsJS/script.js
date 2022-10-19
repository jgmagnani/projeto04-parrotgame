let qtdCards = Number(prompt("Quantas cartas desejas jogar? Valores entre 4 e 14 (somente par)"));

while ( qtdCards > 14 || qtdCards < 4){
    qtdCards = prompt("Insira um valor entre 4 e 14 (apenas par)")
    if ( qtdCards % 2 !== 0){
        alert("O número é impar")
    }
    
}
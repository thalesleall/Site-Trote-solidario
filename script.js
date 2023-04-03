function trocaSwitch() {
    /* quando a função for executada */
    /* alert('Vamos trocar o switch'); */

    /* vamos recuperar a página HTML aqui no JavaScript */
    /* a variável html vai representar todo o documento */
    let html = document.documentElement;
    /* vamos verificar se no documento HTML tem a classe light 
    será que a lista de classes do documento contém light */
    if (html.classList.contains('light')) {
        /* como tem a class light, vamos retirar */
        html.classList.remove('light');
    }
    else {
          /* como não tem a class light, vamos adicionar */
        html.classList.add('light');
    }

}


function condicional(){
    //recupera dados
    let kits = Number(document.getElementById("kits").value)
    let kits2 = Number(document.getElementById("qtdePadrao").value)
    let soKit = Number(document.getElementById("qtdeKit").value)
    let lata = Number(document.getElementById("qtdeLata").value)
    let arroz5 = Number(document.getElementById("qtdeArroz5").value)
    let arroz1 = Number(document.getElementById("qtdeArroz1").value)
    let feijao2 = Number(document.getElementById("qtdeFeijao2").value)
    let feijao1 = Number(document.getElementById("qtdeFeijao1").value)
    let macarrao = Number(document.getElementById("qtdeMacarrao").value)
    let oleo = Number(document.getElementById("qtdeOleo").value)
    var checkbox = document.querySelector('#yes');

    //calculadora
    let pontos 
    if(kits >= 80)[
        pontos = 5000
    ]
    else if ((kits < 80) && (kits >= 64)) {
        pontos = 4000
    }
    else if ((kits < 64) && (kits >= 40)) {
        pontos = 2500
    }
    else if ((kits < 40) && (kits >= 16)) {
        pontos = 1000
    }
    else if ((kits < 40) && (kits >= 0)) {
        pontos = 0
    }
    
    else {
        pontos = -1 
    }
    
    //mostrar resultado

    if(checkbox.hasAttribute("disabled")){
        pontos = pontos + (kits2 * 50) + (soKit * 25) + (lata * 10) + (arroz5 * 5) + (arroz1) + (feijao2 * 2) + (feijao1) + (macarrao * 0.5) + (oleo)
    }
    else [
        pontos = pontos
    ]


    if (pontos == -1){
        document.getElementById("pontos").innerHTML = "Impossivel Calcular"
    }
    else {
        document.getElementById("pontos").innerHTML = "A pontuação da equipe é " + pontos
    }
}


var checkbox = document.querySelector('#yes');
var adicional = document.querySelector('.adds');
checkbox.addEventListener('click', function(){
    if(checkbox.hasAttribute("disabled")){
        checkbox.removeAttribute("disabled", "disabled")
    }
    else{
        checkbox.setAttribute("disabled", "disabled")
    }
    
    if(adicional.style.display === 'block'){
        adicional .style.display = 'none';

    }
    else{
        adicional.style.display = 'block';
    }
});

// procure e selecione o elemento com a classe card-destino
//e guard em uma variável chamada primeiroCard
let primeiroCard = document.querySelector(".card-destino");

// procure e selecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");

//procure e selecione o parágrafp com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade")

/* Monitore o clique no botão de curiosidade e, quando acontecer o clique , verifique se a curiosidade está oculta.
se estiver, faça ficar visível, mude o aria-expanded para true e troque o texto do botão para "ocultar curiosidade".
*/
botaoCuriosidade.addEventListener("click", function(){
     
    // se curiosidade estiver oculto (hidden)
    if(curiosidade.hidden){
        // faça-o aparecer
        curiosidade.hidden = false
    
        // Mude o atributo airia-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true");
   
        // Troque o texto do botão para Ocultar curiosidade
        botaoCuriosidade.textContent = "Ocultar curiosidade";
     } else {
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute('aria-expanded', "false")
        botaoCuriosidade.textContent = "ver curiosidade";
    }


});
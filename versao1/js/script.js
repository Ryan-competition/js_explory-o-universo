let cards = document.querySelectorAll(".card-destino");


/* Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos) */
cards.forEach(function (card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        }else{
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidades";
        }
    }); // fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function (){
        // Aplicar/remover a classe 'favorita'
       // Classe foi aplicada? true
       // Classe foi removida? true
       
        let favoritado = card.classList.toggle('favoritado');

        // Atualizar o estado do botão (arla-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado)
    
        // Atulizar o texto do botão (☆ Favorito ou ★ Favorita)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado"
        } else {
            botaoFavorito.textContent = "☆ Favorito"
        }
    
    
    })// fechamento do botao favorito

});// Fechamento do forEach


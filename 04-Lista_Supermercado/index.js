let itens = []

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]')
    var precoProduto = document.querySelector('input[name=price]')
itens.push({
    nome: nomeProduto.value,
    valor: precoProduto.value
})
let listaProdutos = document.querySelector('.lista-produto')
let soma = 0
listaProdutos.innerHTML=""
itens.map(function(val){
    soma+=parseFloat(val.valor)/*parseInt*/
    listaProdutos.innerHTML+=`
    <div class="lista-produto-single">
        <h3>${val.nome}</h3>
        <span>R$ ${val.valor}</span>
    </div>`
})
    soma = soma.toFixed(2)
    nomeProduto.value = ""
    precoProduto.value = ""
    let elementoSoma = document.querySelector('.soma-produto h2')
    elementoSoma.innerHTML = 'R$' + soma
})

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    itens = []
    document.querySelector('.lista-produto').innerHTML = ""
    document.querySelector('.soma-produto h2').innerHTML = "R$00,00"
})








/*          
            */
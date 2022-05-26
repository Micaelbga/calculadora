let botoes = document.querySelectorAll('.botao')


botoes.forEach(botao =>{
    botao.addEventListener('mouseover', function (){
        botao.style.opacity = '60%';
    })
})

botoes.forEach(botao =>{
    botao.addEventListener('mouseout', function (){
        botao.style.opacity = '100%';
    })
})



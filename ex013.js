function carregar(){
let agora = new Date()
let horaAtual = agora.getHours()
let minutoAtual = agora.getMinutes()
let a = window.document
let titulo1 = a.querySelector('#titulo1')
let titulo2 = a.querySelector('#titulo2')
let imagem = a.querySelector('#imagem')
let body = a.querySelector('body')

titulo1.innerText = `Agora são exatamente ${horaAtual}:${minutoAtual}`
if(horaAtual <5 || horaAtual >= 18){
    titulo2.innerText = 'Boa Noite'
    body.style = 'background-color: gray;'
    imagem.src= 'imagens/noite.jpg' 
}else if(horaAtual < 12){
    titulo2.innerText = 'Bom Dia'
    body.style = 'background-color: antiquewhite;'
    imagem.src= 'imagens/dia.jpg' 
} else if(horaAtual>=12){
    titulo2.innerText = 'Boa Tarde'
    body.style = 'background-color: orange;'
    imagem.src= 'imagens/tarde.jpg' 
}
}

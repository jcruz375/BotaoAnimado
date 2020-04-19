var i = 0
function animadoBotão(){
    bootbotao = setTimeout("animadoBotão()", 3000)
    i = i + 1
    if (i == 4)	{
        i = 1
    };
    if(i == 1){
        document.form_botao.animado.value = "GOOGLE"
    }
    if(i == 2){
        document.form_botao.animado.value = "BING"
    }
    if(i == 3){
        document.form_botao.animado.value = "Linkedin"
    }

}

function link(){
    if (botao == 1)
        {location.href="http://www.google.com.br"}
    if (botao == 2)
        {location.href="http://br.bing.com"}
    if (botao == 3)
        {location.href="https://www.linkedin.com/in/jo%C3%A3o-vitor-oliveira-cruz-252596191/"}
}

setTimeout("animadoBotão()", 1)

//var botão = document.getElementById('button')

//botão.onclick = link()
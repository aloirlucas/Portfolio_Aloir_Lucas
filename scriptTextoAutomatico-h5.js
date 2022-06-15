const elemento = document.getElementById('text-automatico') /*vai receber o id que ta la no h2 no html*/
const texto = 'Trabalho como freelancer' /*O texto que sera digitado*/
const interval = 100; /*de quanto em quanto tempo vai executar uma letra, 300 milisegundos*/

function showText (elemento, texto, interval){
    const letras = texto.split("").reverse()
    const digitador = setInterval(()=>{

        if(!letras.length){
            return clearInterval(digitador)
        }
        const proxima = letras.pop()

        elemento.innerHTML += proxima

    }, interval)
}

showText (elemento, texto, interval)
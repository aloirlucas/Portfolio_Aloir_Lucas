function abrirMenu(){

    let barraMenuAberto = document.getElementById('barra-menu') /*essa variavel recebe o id do barra menu*/

    if(barraMenuAberto.style.width == '0px'){  /*Quandio clicar, se o menu estiver 0px, ele vai pra 180px, se não ele vai pra zero*/
        barraMenuAberto.style.width = '180px'
    } else{
        barraMenuAberto.style.width = '0px'
    }
};
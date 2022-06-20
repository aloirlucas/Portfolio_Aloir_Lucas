let barraMenuAberto = document.getElementById('barra-menu') /*essa variavel recebe o id do barra menu*/


function abrirMenu(){

    
    if(barraMenuAberto.style.width == '0px'){  /*Quandio clicar, se o menu estiver 0px, ele vai pra 180px, se não ele vai pra zero*/
        barraMenuAberto.style.width = '135px'
    } else{
        barraMenuAberto.style.width = '0px'
    }
};

function esconderMenu(){
    let esconderMenu = document.getElementById('linksMenu')
    if(barraMenuAberto.style.width == '135px'){
        barraMenuAberto.style.width = '0px';
    }
}

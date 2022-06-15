document.addEventListener('DOMContentLoaded', ()=>{
    new TypeIt(".animacao", {
        speed: 200,        
        loop: true
    })
    .type('Web', {delay: 500}).delete(3)
    .type('ReactNative', {delay: 900}).delete(11)
    .type('Front-end', {delay: 900}).delete(9)
    .go()
})
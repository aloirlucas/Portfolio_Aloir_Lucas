document.addEventListener('DOMContentLoaded', ()=>{
    new TypeIt(".animacao", {
        speed: 200,        
        loop: true
    })
    .type('WEB', {delay: 700}).delete(3)
    .type('REACT NATIVE', {delay: 900}).delete(12)
    .type('FRONT-END', {delay: 900}).delete(9)
    .go()
})
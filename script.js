$(document).ready(function(){
   console.log($('#div1').html('Eu moro em Beverly Hills'))
})

$(document).ready(function(){

    $.each($('.interesse:checked'), (indice, valor) => {
        console.log(indice, valor)
    })

})
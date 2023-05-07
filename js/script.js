$(function(){
    var menu = $('nav.menu-mobile img');
    
    menu.click(function(){
        var elemento = $('nav.menu-mobile ul');
        if(elemento.is(':visible') == false){
            elemento.fadeIn()
        }else{
            elemento.fadeOut()
        }
    })
})
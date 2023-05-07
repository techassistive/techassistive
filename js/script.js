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



    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
    
        $('html,body').animate({'scrollTop':offSetTop});
    
        return false;
    })
})
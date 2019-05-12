$(document).ready( function(){

    var items = $('.bgmenu__decor');
    var allParents=$('.bgmenu_obj');

    items.click( function (e) {
        e.preventDefault();

        var $this=$(this);
        var thisparent=$this.parent('.bgmenu_obj');
        var thischild=thisparent.children('.bgmenu__desc');

       

        if (thischild.hasClass('active_bg')) 
        
            {thischild.removeClass('active_bg');}
            else
            {
                $('.bgmenu_obj').children('.bgmenu__desc').removeClass('active_bg');
                thischild.toggleClass('active_bg');
            }
            
            

    })
})
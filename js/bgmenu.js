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

$(document).ready(function () {

    var items = $('.team__title'); 
    var $allParrents = $('.team__item'); 
  
    items.click(function (e) { 
      e.preventDefault(); 
      var $this = $(this); 
      var $parrent = $this.closest('.team__item');
  
      if ($parrent.hasClass('team__item_active')){ 
        $parrent.removeClass('team__item_active'); 
      } else {
        $allParrents.removeClass('team__item_active'); 
        $parrent.addClass('team__item_active'); 
      }
  
    });
  });
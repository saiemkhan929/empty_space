
jQuery(document).ready(function($){

    function empty_space(){

      $('.empty_space').each(function(index, el) {

        var desktop = $(this).attr('data-desktop');
        var tab = (null != $(this).attr('data-tab')) ? $(this).attr('data-tab') : desktop;
        var mobile = (null != $(this).attr('data-mobile')) ? $(this).attr('data-mobile') : desktop;

        var screen = $(window).width();

        if(screen > 1000){
          $(this).css('height', desktop);
        }else if(screen > 650 && screen < 1000){
          $(this).css('height', tab);
        }else if(screen < 650 ){
          $(this).css('height', mobile);
        // map setting here
        }


      });

    }

     // call function initially
      empty_space();

      $(window).resize(function(){
        empty_space();
      });


});


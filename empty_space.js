
jQuery(document).ready(function($){

    function empty_space(){

      $('.empty_space').each(function(index, el) {

        var dekstop = $(this).attr('data-dekstop');
        var tab = (null != $(this).attr('data-tab')) ? $(this).attr('data-tab') : dekstop;
        var mobile = (null != $(this).attr('data-mobile')) ? $(this).attr('data-mobile') : dekstop;

        console.log(dekstop+' '+tab+' '+mobile);

        var screen = $(window).width();

        if(screen > 1000){
          $(this).css('height', dekstop);
        }else if(screen > 650 && screen < 1000){
          $(this).css('height', tab);
        }else if(screen < 650 ){
          $(this).css('height', mobile);
        // map setting here

                $('.navbar .dropdown i').click(function(event) {
                    /* Act on the event */
                    event.preventDefault();



                  if($(this).parents('.dropdown').children('.dropdown-menu').css('display') == 'block'){

                  $(this).parents('.dropdown').children('.dropdown-menu').css('display','none');
                  alert('');

                  }else{

                    $(this).parents('.dropdown').children('.dropdown-menu').css('display','block');


                  }


                  });

        }


      });

    }

     // call function initially
      empty_space();

      $(window).resize(function(){
        empty_space();
      });


});


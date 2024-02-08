;(function($){

      /*=== Load jQuery when window fully loaded =====================*/
      $(window).on('load', function(){


        /*
        $('.default').flexslider({
          animation: 'slide',
          directionNav: false
        });

        $('.flexslider.type2').flexslider({
          animation: 'slide',
          controlNav: false
        });
        */

        /*$('.postimg-wrapper a.pop-modal').magnificPopup({
          type: 'image',
          gallery: {
          enabled: true
          }
        });*/

        /*=== Preloader ===========================================*/
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.

        /*====== mobile menus -=================== */
        $(window).resize(function() {
          bodywidth();
        });
        $(window).load(function() {
          bodywidth();
        });


        $(".mProductMenu i").click(function() {
          $("body").toggleClass("open_n_menu");
          $(".mobile_menu_overlay").fadeToggle(600);
        });

        $(".mobile_menu_overlay, .pMenuClose").click(function() {
          $("body").removeClass("open_n_menu");
          $(".mobile_menu_overlay").fadeOut(600);
        });

        $(".mRelatedMenu i").click(function() {
          $(".mRelatedMenuPanel").addClass("open");
          $("html").css("overflow","hidden");
        });

        $(".rMenuClose").click(function() {
          $(".mRelatedMenuPanel").removeClass("open");
          $("html").css("overflow","");
        });

        function bodywidth() {
          if($(window).width() > 979 ) {
            $("body").removeClass("open_n_menu");
              $(".mobile_menu_overlay").fadeOut(600);
          }
        }

      });

})(jQuery);

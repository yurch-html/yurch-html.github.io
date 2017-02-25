$(document).ready(function() {
    $('.menu_main_on_of').click(function() {
        $('.menu_main').toggleClass('red');

        $('header').toggleClass('n_header');
    });


    $('header, .slide_menu a, article, footer').click(function() {
        $('.red').removeClass('red');
        $('.n_header').removeClass('n_header');
    });
    
    
    $('header, .slide_mobil a, article, footer').click(function() {
        $('.mobile_scroll').removeClass('mobile_scroll');
       
    });

    

    $('.top_bottom').click(function() {
        $('.menu_mobile').toggleClass('mobile_scroll');
  
    });

    $('.left_div').hover(function() {
        $('.button').toggleClass('left');


    });
    $('.right_div, .right_div+span').hover(function() {
        $('.button').toggleClass('right');
       

    });


    $('.social_tw').click(function() {
        $(this).find('.twitter').toggleClass('twit_d');
    });
    $('header, .menu_p_b, .front_mobile_b').click(function() {
        $('.twitter').removeClass('twit_d');
    });


     $('.prod_a').click(function() {
$('.prod_a').addClass('prod_a_line');
        $('.margin_plus').addClass('margin_plus_none');
         $('.margin_minus').removeClass('margin_minus_none');
         $('.prod_b').removeClass('prod_b_line');
         $('.prod_q').removeClass('prod_q_line');
    });
      $('.prod_b').click(function() {
          $('.prod_b').addClass('prod_b_line');
        $('.margin_minus').addClass('margin_minus_none');
           $('.margin_plus').removeClass('margin_plus_none');
          $('.prod_a').removeClass('prod_a_line');
          $('.prod_q').removeClass('prod_q_line');
    });
    $('.prod_q').click(function() {
        $('.margin_minus, .margin_plus').removeClass('margin_minus_none margin_plus_none');
     $('.prod_q').addClass('prod_q_line');
        $('.prod_b').removeClass('prod_b_line');
        $('.prod_a').removeClass('prod_a_line');
   }); 
    
    
    
    

});

var menu_selector = ".menu_aside";

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function() {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function() {
    jQuery("a").click(function() {

        var elementClick = jQuery(this).attr("href");
        var destination = jQuery(elementClick).offset().top;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 500);


        return false;


    });
    $(document).on("scroll", onScroll);

    $("a[href^=#]").click(function(e) {
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function() {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });

    });

});
$(document).ready(function(){


     /* When Scroll Change Header Background */
     $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 10){
            $('header').addClass('sticky');
            $('.info').hide();
            $('header .logo img').css('margin-left','0px');
        }
        
        else{
            $('header').removeClass('sticky');
            $('.info').show();
            $('header .logo img').css('margin-left','30px');
        }

    });



    /* CountTo Plugin */  
    $(window).scroll(function(){
        var count =  $(this).scrollTop();
        if( count > 1720 ){
            $('.timer').countTo();
        } 
    });  


   /* icon of navbar Links slidToggle When Click On It */
    $('i.icon').click(function(){
        $('.nav-list').slideDown();
        $(this).hide();
        $('i.icon2').show();
    });

    $('i.icon2').click(function(){
        $('.nav-list').slideUp();
        $(this).hide();
        $('i.icon').show();
    });


    /* icon Search slidToggle When Click On It */

    $('.search').click(function(){
        $('.search-inp').slideToggle();
        $('.search-inp-icon').slideToggle();
        $('.search-inp').css("display","block");
        $('.search-inp-icon').css("display","block");
       
    });



    /* icon Plus & minus slidToggle When Click On It */

    $('.plus-icon').click(function(){
        $('li.dropdown:hover > .dropdown-menu').slideDown();
        $('li.dropdown:hover > .dropdown-menu').css("display","block");
        $(this).hide();
        $('.minus-icon').show();
    });

    $('.minus-icon').click(function(){
        $('li.dropdown:hover > .dropdown-menu').slideUp();
        $('li.dropdown:hover > .dropdown-menu').css("display","block");
        $(this).hide();
        $('.plus-icon').show();
    });



     /* When Scroll change Opacity of section Welcome-Area */
     $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 180){
            $('.welcome-area .business h1').css({
                "opacity" : "0.1",
                "transition" : "4s ease"
            });
            }
       
        else{
            $('.welcome-area .business h1').css({
                "opacity":"0",
                "transition" : "1s ease"
            });
        }

    });



     // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href. 
    $('#videoLink').magnificPopup({
        type:'inline',
        midClick: true
        })
    

    // change visability when mouseenter & mouseleave on div   

    $('#one').mouseenter(function(){
        $('.one').css({
            "opacity" : "1",
            "transition" : "0.5s ease",
            "animation" : "bounceIn 2s"
        });
       
    });
 
    $('#one').mouseleave(function(){
        $('.one').css({
            "opacity" : "0",
            "transition" : "0.5s ease"
        });
       
    });

    /*************************** */

    $('#two').mouseenter(function(){
      
        $('.two').css({
            "opacity" : "1",
            "transition" : "0.5s ease",
            "animation" : "bounceIn 2s"
        });
    });
 
    $('#two').mouseleave(function(){
      
        $('.two').css({
            "opacity" : "0",
            "transition" : "0.5s ease"
        });
    });

    /************************** */
    $('#three').mouseenter(function(){
      
        $('.three').css({
            "opacity" : "1",
            "transition" : "0.5s ease",
            "animation" : "bounceIn 2s"
        });
    });
 
    $('#three').mouseleave(function(){
      
        $('.three').css({
            "opacity" : "0",
            "transition" : "0.5s ease"
        });
    });
    /*************************** */
    $('#four').mouseenter(function(){
      
        $('.four').css({
            "opacity" : "1",
            "transition" : "0.5s ease",
            "animation" : "bounceIn 2s"
        });
    });
 
    $('#four').mouseleave(function(){
      
        $('.four').css({
            "opacity" : "0",
            "transition" : "0.5s ease"
        });
    });
    /****************************** */
    $('#five').mouseenter(function(){
      
        $('.five').css({
            "opacity" : "1",
            "transition" : "0.5s ease",
            "animation" : "bounceIn 2s"
        });
    });
 
    $('#five').mouseleave(function(){
      
        $('.five').css({
            "opacity" : "0",
            "transition" : "0.5s ease"
        });
    });
    /***************************** */
    $('#six').mouseenter(function(){
      
        $('.six').css({
            "opacity" : "1",
            "transition" : "0.5s ease",
            "animation" : "bounceIn 2s"
        });
    });
 
    $('#six').mouseleave(function(){
      
        $('.six').css({
            "opacity" : "0",
            "transition" : "0.5s ease"
        });
    });



    /* owl Carousel (Team Section) */

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });


   

    // Scroll top
    var scrollButton = $(".scroll_top");
    $(window).scroll(function(){
        $(this).scrollTop() > 700 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop : 0},2000);
    });
  

   

 
});   



$(document).ready(function(){
    //show navbar-display and over-lay-login and body overflowY scroll hidden when click bars
$(".fa-bars").click(function(){
    $(".list-display").css({
        display:"block",
    });
    $("body").css({
        overflowY:"hidden",
    });
    $(".navbar-display").animate({
        right:"0",
    },500);
    $(".over-lay-login").show(0);
    $(".list-tasnifat-dis").css({
        display:"none",
    });
    $(".tasnifat-disblay").click(function(){
        $(".list-display").css({
            display:"none",
        },500);
        $(".list-tasnifat-dis").css({
            display:"block",
        },500); 
    });
    $(".back-tasnifat").click(function(){
        $(".list-display").css({
            display:"block",
        },500);
        $(".list-tasnifat-dis").css({
            display:"none",
        },500); 
    });


    $(".list-money-dis").css({
        display:"none",
    });
    $(".money-disblay").click(function(){
        $(".list-display").css({
            display:"none",
        },500);
        $(".list-money-dis").css({
            display:"block",
        },500); 
    });
    $(".back-money").click(function(){
        $(".list-display").css({
            display:"block",
        },500);
        $(".list-money-dis").css({
            display:"none",
        },500); 
    });
});
    //hide navbar-display and over-lay-login and body overflowY scroll when click over-lay-login
$(".over-lay-login").click(function(){
    $("body").css({
        overflowY:"scroll",
    });
    $(".navbar-display").animate({
        right:"-220px",
    },500);
    $(".over-lay-login").hide(0);
});
    //show login-display and over-lay-login and body overflowY scroll hidden when click login-hed
$(".login-hed").click(function(){
    $(".login-display").show(500);
    $(".over-lay-login").show(0);
});
  //show login-display and over-lay-login and body overflowY scroll hidden when click login-hed
$(".login-footer").click(function(){
    $(".login-display").show(500);
    $(".over-lay-login").show(0);
});
    //hide login-display and over-lay-login and body overflowY scroll when click over-lay-login
$(".over-lay-login").click(function(){
    $(".login-display").hide(500);
    $(".over-lay-login").hide(0);
});
    //show login-display and over-lay-login and body overflowY scroll hidden when click btns-dis-login
$(".btns-dis-login").click(function(){
    $(".over-lay-login").show(0)
    $(".login-display").show(500);
    $(".navbar-display").animate({
        right:"-220px",
    },1000);
    $("body").css({
        overflowY:"scroll",
    });
});
   //hide login-display and body overflowY scroll and over-lay-login and body overflowY scroll when click over-lay-login
$(".over-lay-login").click(function(){
    $(".over-lay-login").hide(0)
    $(".login-display").hide(500);
});
  //hide login-display and body overflowY scroll and over-lay-login and body overflowY scroll when click fa-times
$(".fa-times").click(function(){
    $(".over-lay-login").hide(0)
    $(".login-display").hide(500);
});
 //show box-search and overflowY scroll hidden and over-lay-login when click inline-media
$(".inline-media").click(function(){
    $(".box-search").show(500);
    $(".over-lay-login").show(0);
});
 //hide box-search and overflowY scroll and over-lay-login when click over-lay-login
$(".over-lay-login").click(function(){
    $(".over-lay-login").hide()
    $(".box-search").hide(500);
});
 //hide box-search and overflowY scroll  and over-lay-login when click close-box-search
$(".close-box-search").click(function(){
    $(".over-lay-login").hide(0)
    $(".box-search").hide(500);
});
 //hide box-search and overflowY scroll and over-lay-login when click btn-close
$(".btn-close").click(function(){
    $(".over-lay-login").hide(0)
    $(".box-search").hide(0);
});

 //toggle money-type when click money-links
$(".money-links").click(function(){
    $(".money-type").toggle(0);
    $(".tasnifat-box").hide(0);
});

 //toggle tasnifat-box when click tasnifat-btn

$(".tasnifat-btn").click(function(){
    $(".tasnifat-box").slideToggle(0);
    $(".money-type").hide(0);
});
 //toggle tasnifat-box when click tasnifat-footer

// change background color for nav-hed
$(window).on("scroll",function(){
if ($(window).scrollTop() >= 100) {
    $("header").addClass("navbar-fixed");
} else {
    $("header").removeClass("navbar-fixed");
    
}
$(".more-buy-coruses").click(function(){
    $(".boxes1").css({
        display:"flex",
    },700);
    $(".boxes2").hide(0);
    $(".boxes3").hide(0);
});
$(".last-buy-coruses").click(function(){
    $(".boxes1").hide(0);
    $(".boxes2").css({
        display:"flex",
    },700);
    $(".boxes3").hide(0);
});
$(".offer-buy-coruses").click(function(){
    $(".boxes1").hide(0);
    $(".boxes2").hide(0);
    $(".boxes3").css({
        display:"flex",
    },700);
});
});

// Start dark mode
$(".fa-moon-o").click(function(){
$("div.moon-night i").toggleClass("fa-moon-orange"); //change icone color

$("body").toggleClass("bck-color-black"); //add class bck-color-black (dark-mode) to body
$("header.nav-hed").toggleClass("border-dark-mode"); //add class bck-color-black (dark-mode) to body
$(".tasnifat-box").toggleClass("bck-color-lblack");
$(".tasnifat-box").toggleClass("color-white");

$(".money-type").toggleClass("bck-color-lblack");
$(".money-type").toggleClass("color-white");



$(".custom-shape-divider-bottom-1663939572 path").toggleClass("bck-fill"); //add class bck-fill(dark-mode) to path
$("path").toggleClass("bck-color-black"); //add class bck-fill(dark-mode) to path

$("section.Aboutus-sec").toggleClass("bck-color-black"); //add class bck-color-black (dark-mode) to section.Aboutus-sec
$("section.Aboutus-sec").toggleClass("boxes-dark-mode"); //add class color-white (dark-mode) to section.Aboutus-sec

$("section.courses-sec").toggleClass("bck-color-black"); //add class bck-color-black (dark-mode) to section.courses-sec
$("section.courses-sec").toggleClass("color-white"); //add class color-white (dark-mode) to section.courses-sec

$(".navbar-display").toggleClass("bck-color-black"); //add class bck-color-black (dark-mode) to section.navbar-display
$(".navbar-display").toggleClass("color-white"); //add class color-white (dark-mode) to section.navbar-display

$("section.buy-sec").toggleClass("bck-color-black"); //add class bck-color-black (dark-mode) to section.buy-sec
$("section.buy-sec").toggleClass("boxes-dark-mode"); //add class color-white (dark-mode) to section.buy-sec
$("section.buy-sec").toggleClass("color-white"); //add class color-white (dark-mode) to section.buy-sec
$("section.buy-sec").toggleClass("border-white");//add class border-white (dark-mode) to section.buy-sec

$("section.subscribe-sec").toggleClass("bck-color-black"); //add class bck-color-black (dark-mode) to section.subscribe-sec
$("section.subscribe-sec").toggleClass("color-white"); //add class color-white (dark-mode) to section.subscribe-sec
$("section.subscribe-sec").toggleClass("border-white");//add class border-white (dark-mode) to section.subscribe-sec

$("footer.contactus-sec").toggleClass("bck-color-black");//add class bck-color-black (dark-mode) to section.contactus-sec
$("section.login-display").toggleClass("dark-box-login");

$("section.login-page-sec").toggleClass("color-white");
});
// End dark mode

});
$(window).on("load",function(){      //when load this website
    $("html, body").animate({ scrollTop: 0 });
    $(".contentl").fadeOut(3000,function(){
        $(this).parent().fadeOut(100,function(){
            $(this).remove();
        })
    })
    });
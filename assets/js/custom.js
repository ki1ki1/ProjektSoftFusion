$(document).ready(function(){
    $(".mobile__hamburger").click(function(){
        $("nav .menu__center").toggle("fast");
        $("nav .menu__right").toggle("fast");
    });
    $(".header__button").click(function(){
        $(".header__button").removeClass("active");
        $(this).addClass("active");
    });
});
    

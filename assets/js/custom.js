$(document).ready(function(){
    let status = 1;
    $(".mobile__hamburger").click(function(){
        $("nav .menu__center").toggle("fast");
        $("nav .menu__right").toggle("fast");
    });
});
    

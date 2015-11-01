$(document).ready(function(){
    $("a").click(function(){
        $(this).addClass("backgroundChange");
    });
    $("h2:first").click(function(){
        $(this).hide();
    });
});

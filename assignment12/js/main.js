$(document).ready(function() {

// displays correct recipe
    $("#link1").click(function() {
        $("#appleSauce").show("slow");
        $('.recipe:not(#appleSauce)').hide();
    });
    $("#link2").click(function() {
        $("#muffins").show("slow");
        $('.recipe:not(#muffins)').hide();
    });
    $("#link3").click(function() {
        $("#brine").show("slow");
        $('.recipe:not(#brine)').hide();
    });
    $("#link4").click(function() {
        $("#chili").show("slow");
        $('.recipe:not(#chili)').hide();
    });
    $("#link5").click(function() {
        $("#pork").show("slow");
        $('.recipe:not(#pork)').hide();
    });
    $("#link6").click(function() {
        $("#mojito").show("slow");
        $('.recipe:not(#mojito)').hide();
    });
    $("#link7").click(function() {
        $("#veganSoup").show("slow");
        $('.recipe:not(#veganSoup)').hide();
    });

// Makes title larger (and moves it) upon clicking
    $( "#title" ).click(function() {
        $( "#title" )
          .animate({
            fontSize: "52px",
            left: "50px",
          }, 1500, "swing" )
    });
});

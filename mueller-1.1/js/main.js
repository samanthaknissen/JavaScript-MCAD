$(document).ready(function() {

  //carousel
  $("#owl-demo").owlCarousel({
      navigation : true, // Show next and prev buttons
      navigationText : ["prev","next"],
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay: true,
      singleItem:true
  });

  //changes h2 to a new color when hovering

  $("h2").hover(function(){
    $(this).css("color", "#008080")
  });

  //toggle About Me section

  $( ".c-1 ul" ).hide();
  $( ".c-1 h3" ).click(function() {
  $( ".c-1 ul" ).slideToggle( "fast" );
});

  $( ".c-2 ul" ).hide();
  $( ".c-2 h3" ).click(function() {
  $( ".c-2 ul" ).slideToggle( "fast" );
  });

  $( ".c-3 ul" ).hide();
  $( ".c-3 h3" ).click(function() {
  $( ".c-3 ul" ).slideToggle( "fast" );
  });

  $( ".c-4 ul" ).hide();
  $( ".c-4 h3" ).click(function() {
  $( ".c-4 ul" ).slideToggle( "fast" );
  });

});

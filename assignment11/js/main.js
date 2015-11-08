$("document").ready(function (){
  // adds icon image to menu itmes
  $('div#menu ul li a').prepend('<img id="icon" src="icon.png">');
  // Clicking on the H1 element in the header changes the background color of the header DIV
  $("#header h1").click(function(){
    $("#header").toggleClass("colorChange");
  });
  // Change the text color of the first LI element in one of the sub-lists in the sidebar
  $('#sidebar_content_1 ul li:first-child a').css("color", "blue");
  // Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
  $('#sidebar_content_1 ul li:even a').css("padding-left", "5px");
  // Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify
  $("div#content h2").click(function(){
    $("div#content").html("Thanks for clicking.");
  });
  // Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it
  $("#sidebar_content_1 h2").click(function(){
    $("li#sidebar_content_1 ul").slideToggle( "slow" );
  });
});

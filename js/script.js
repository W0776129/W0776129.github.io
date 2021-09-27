// WEB303 Assignment 2
// Nikhil Patel



$('#vprospect').click(function(){
  $("#solution").load("prospect.html");
  $("#solution").animate({height: "300px"});
});

$( "#vconvert" ).click(function() {
  $("#solution").load("convert.html");
});

$( "#vretain" ).click(function() {
  $("#solution").load("retain.html");
});

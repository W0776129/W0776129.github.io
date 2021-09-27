// WEB303 Assignment 2
// Nikhil Patel



$('#vprospect').click(function(){
  $("#solution").load("prospect.html");
  $("#solution").animate({ border:" 5px ";
  background-color: lightblue;
  text-align: center;});
});

$( "#vconvert" ).click(function() {
  $("#solution").load("convert.html");
});

$( "#vretain" ).click(function() {
  $("#solution").load("retain.html");
});

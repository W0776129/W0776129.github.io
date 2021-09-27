// WEB303 Assignment 2
// Nikhil Patel



$('#vprospect').click(function(){
  $("#solution").load("prospect.html");
  $("#solution").animate({left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'});
});

$( "#vconvert" ).click(function() {
  $("#solution").load("convert.html");
});

$( "#vretain" ).click(function() {
  $("#solution").load("retain.html");
});

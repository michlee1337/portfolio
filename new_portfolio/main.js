$( document ).ready(function() {
  document.getElementById('hello-btn').addEventListener('click',function(){
    $( "#hello-btn" ).fadeOut("slow");
    $( "#main-content" ).delay( 800 ).fadeIn("slow");
    $( "#main-text" ).delay( 800 ).fadeIn("slow");
    $( "#hand" ).delay( 1200 ).fadeIn("slow");
    $( "#work-block" ).delay( 2000 ).fadeIn("slow");
    $( "#about-block" ).delay( 2500 ).fadeIn("slow");
    $( "#contact-block" ).delay( 3000 ).fadeIn("slow");
    //document.getElementById('line-1').classList.remove("fade");
    //document.getElementById('cta').classList.add("fade");
    //document.getElementById('down').classList.remove("fade");
  });
});

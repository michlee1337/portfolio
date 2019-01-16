//GSAP 1.8.0
var box2 = $("#clip2"),

clipTween2 = TweenLite.from(box2, 1, {clip:"rect(100px 0px 100px 0px)", paused:true});

box2.parent().mouseenter(function() {
    clipTween2.play();
    });  


box2.parent().mouseleave(function() {
   clipTween2.reverse();  
    });
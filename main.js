window.onload = function(){
  //drawing
  var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false,
  });
};

var myObject = {
  prop1: 0,
  prop2: '0%'
}
var JSobjectProp = anime({
  targets: myObject,
  prop1: 50,
  prop2: '100%',
  easing: 'linear',
  round: 1,
  update: function() {
    var el = document.querySelector('#JSobjectProp pre');
    el.innerHTML = JSON.stringify(myObject);
  }
});

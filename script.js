$(".bg").interactive_bg({
   strength: 25,
   scale: 1.05,
   animationSpeed: "100ms",
   contain: true,
   wrapContent: false
 });

$(document).ready(function(){
    $(".bg").interactive_bg(); // function call
});
 
  // change background size on window resize
  $(window).resize(function() {
      $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      })
   })


$(document).ready(function(){
  $("#test").scroll(function(){
    console.log("TEST");
    if(document.getElementById("test").scrollTop > 0)
    {
      $(".navbar").css("height", "10vh");
    }
    else {
      $(".navbar").css("height", "100vh");
    }
  })
});

//http://stackoverflow.com/questions/18880159/use-jquery-to-check-mousewheel-event-without-scrollbar
/*  if (document.addEventListener) {
      document.addEventListener("mousewheel", MouseWheelHandler(), false);
      document.addEventListener("DOMMouseScroll", MouseWheelHandler(), false);
  } else {
      sq.attachEvent("onmousewheel", MouseWheelHandler());
  }

  function MouseWheelHandler() {
      return function (e) {
          // cross-browser wheel delta
          var e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

          //scrolling down?
          if (delta < 0) {
            if(document.getElementById("test").scrollTop == 0)
            {
              $(".navbar").css("height", "100px");
            }
          }

          //scrolling up?
          else {
            if(document.getElementById("test").scrollTop == 0)
            {
              $(".navbar").css("height", "100vh");
            }
          }
          return false;
      }
  }
*/

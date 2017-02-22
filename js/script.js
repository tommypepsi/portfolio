$(document).ready(function(){
var timeout;
var wasTop = true;
  $("#content").scroll(function(){
    var scrollTop = $("#content").scrollTop();
    var scrollHeight = document.getElementById("content").scrollHeight - document.getElementById("content").clientHeight;

    if(1 == scrollTop / scrollHeight) {
      wasTop = true;
      $(".navbar").css("height", "100vh");
      clearTimeout(timeout);
      $("#secondaryLanguages").css("display", "inline-block");

      timeout = setTimeout(function(){
        $("#secondaryLanguages").css("opacity", "1");
      }, 500);
    }
    else if(document.getElementById("content").scrollTop > 0 && wasTop)
    {
      wasTop = false;
      $(".navbar").css("height", "10vh");
      $("#secondaryLanguages").css("opacity", "0");
      timeout = setTimeout(function(){
        $("#secondaryLanguages").css("display", "none");
      }, 1000);
    }
    else if(document.getElementById("content").scrollTop == 0){
      wasTop = true;

      clearTimeout(timeout)

      $(".navbar").css("height", "100vh");
      $("#secondaryLanguages").css("display", "inline-block");
      timeout = setTimeout(function(){
        $("#secondaryLanguages").css("opacity", "1");
      }, 500);
    }
  })
});

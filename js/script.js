$(document).ready(function(){

  //smooth scroll to
  $('.navbar a').click(function() {
    var id = $(this).attr('href');
    $('#content').animate({ scrollTop: $('#content').scrollTop() + $(id).offset().top }, 1000);
    // Prevent default behavior of link
    return false;
  });

var timeout;
var timeout2;
var wasTop = true;
  $("#content").scroll(function(){
    var scrollTop = $("#content").scrollTop();
    var scrollHeight = document.getElementById("content").scrollHeight - document.getElementById("content").clientHeight;

    //If at bottom
    if(1 == scrollTop / scrollHeight) {
      wasTop = true;

      $("#navbar").removeClass("justify-content-center");
      $("form").css("top", "50%");
      $("#nav").addClass("align-self-md-start");
      $("#brand").addClass("align-self-md-start");
      $(".navbar").css("height", "100vh");

      clearTimeout(timeout);
      clearTimeout(timeout2);

      $("#secondaryLanguages").css("display", "inline-block");

      timeout = setTimeout(function(){
        $("#secondaryLanguages").css("opacity", "1");
      }, 500);

      //change the style of the form is screen is too small
      if($(window).height() < 610)
      {
        $("form").removeClass("form");
        $("form").css("top",  "160px");
      }
    }
    //if in middle
    else if(document.getElementById("content").scrollTop > 0 && wasTop)
    {
      wasTop = false;

      clearTimeout(timeout);
      clearTimeout(timeout2);

      $("#navbar").removeClass("justify-content-center");
      $("form").css("top", "150%");
      $(".navbar").css("height", "100px");
      $("#secondaryLanguages").css("opacity", "0");
      timeout = setTimeout(function(){
        $(".navbar-brand").css("margin-bottom", "10px");
        $("#secondaryLanguages").css("display", "none");
      }, 1000);

      timeout2 = setTimeout(function(){
        $("#nav").removeClass("align-self-start");
        $("#brand").removeClass("align-self-start");
      }, 2000);
    }
    //if at top
    else if(document.getElementById("content").scrollTop == 0){
      wasTop = true;

      $("#navbar").addClass("justify-content-center");
      $("#nav").removeClass("align-self-md-start");
      $("#brand").removeClass("align-self-md-start");

      clearTimeout(timeout);

      $(".navbar").css("height", "100vh");
      $("#secondaryLanguages").css("display", "inline-block");
      timeout = setTimeout(function(){
        $("#secondaryLanguages").css("opacity", "1");
      }, 500);
    }

    //change active nav in sections
    if(1 == scrollTop / scrollHeight)
    {
      $("#toAbout").removeClass("active");
      $("#toContact").addClass("active");
      $("#toProjects").removeClass("active");
    }
    else if(0 >= $("#projects").offset().top &&
        1 !== scrollTop / scrollHeight)
    {
      $("#toAbout").removeClass("active");
      $("#toContact").removeClass("active");
      $("#toProjects").addClass("active");
    }
    else if($("#about").offset().top < 0)
    {
      $("#toAbout").addClass("active");
      $("#toContact").removeClass("active");
      $("#toProjects").removeClass("active");
    }
    else {
      $("#toAbout").removeClass("active");
      $("#toContact").removeClass("active");
      $("#toProjects").removeClass("active");
    }
  })


});

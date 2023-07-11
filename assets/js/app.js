$(document).ready(function(){

  $(".arrow").click(function(){
    $(this).toggleClass("active");
    $(".back").toggleClass("active");
  });

  $(".ingredients").click(function(){
    $(this).addClass("active");
    $(".instructions").removeClass("active");
    $("instructions").addClass("hide");
    $("ingredients").addClass("show");
  });

  $(".instructions").click(function(){
    $(this).addClass("active");
    $(".ingredients").removeClass("active");
    $("ingredients").removeClass("show");
    $("instructions").addClass("show");
  });

});
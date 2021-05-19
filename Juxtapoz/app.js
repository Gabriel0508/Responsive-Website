
/*Side-bar*/
$(".side-menu").on("click", function(){
  $(".side-bar").fadeIn("slow");
});
$(".close-menu").on("click", function(){
    $(".side-bar").fadeOut("slow");
  });


 /*Search-bar*/
  $(".search").on("click", function(){
    $("#search-btn").slideDown("slow");
    $(".search").hide();
    $(".close-search").show();

  });

  $(".close-search").on("click", function(){
    $("#search-btn").slideUp("slow");
    $(".search").show();
    $(".close-search").hide();
  });


  
  /*Change Nav-Style*/
let prevScrollpos = window.pageYOffset;
$(window).on("scroll", function(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    $(".navbar").css("height", "8vh")
    $(".nav-container").css("height", "8vh");
    $(".big-title").css("fontSize", "2rem");
    $(".sm-title").css("fontSize", ".5rem");
    $(".nav-container").css("justify-content", "space-between");

  }else{
    $(".navbar").css("height","24vh")
    $(".navbar").css("background","none")
    $(".nav-container").css("height", "24vh");
    $(".nav-container").css("justify-content", "space-around");
    $(".big-title").css("fontSize"," 6rem");
    $(".sm-title").css("fontSize", "2rem");
  };
});





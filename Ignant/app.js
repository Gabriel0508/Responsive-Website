
/*Animation*/

$(".open-menu").on('click', function(){
    $(".home").hide();
    $("#links").slideUp("slow");
    $(".home-hide").show();
    $(this).css("display", "none");   
    $(".close-menu").css("display", "flex");  
});
$(".close-menu").on('click', function(){
    $(".home").show();
    $("#links").slideDown("slow");
    $(".home-hide").hide();
    $(".open-menu").css("display", "flex");   
    $(this).css("display", "none");  
});
 

    /*Change nav-style on scroll*/
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".navbar").style.height = "6vh";
    document.querySelector(".nav-container").style.height = "6vh";
  } else {
    document.querySelector(".navbar").style.hight = "8vh";
    document.querySelector(".nav-container").style.height = "8vh";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("links").style.top = "40px";
  } else {
    document.getElementById("links").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/* 
ScrollOut({
  targets : '.title'
})
*/
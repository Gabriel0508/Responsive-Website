$(".menu").on("click", function() {
    $(".close").show();
    $(".menu").hide();
    $(".navbar").hide();
    $(".hide-page").show();
});

$(".close").on("click", function() {
    $(".menu").show();
    $(".navbar").show();
    $(".hide-page").hide();
});

/*Nav-hide*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-110px";
    document.querySelector(".navbar").style.fontSize = "2rem";
  }
  prevScrollpos = currentScrollPos;
}



  /*Change Nav-Style*/
  /*
  let prevScrollpos = window.pageYOffset;
  $(window).on("scroll", function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      $(".navbar").css("height", "8vh")
      $(".nav-container").css("height", "8vh");
    
    }else{
      $(".navbar").css("height","10vh")
      $(".nav-container").css("height", "10vh");
  
    };
  });
  
  */


//Carousel

let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 5000);


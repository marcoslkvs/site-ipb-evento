$('.slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

$(".effect-scroll").on("click",function(event)
{
	event.preventDefault();
  var id = $(this).attr("href");
  $("html,body").animate(
  {
    scrollTop: $(id).offset().top - $("nav").height()
  }, 1500);
})

$(".button-collapse").sideNav();

$(window).scroll(function()
{
  checkMenuVisibility();
});

function checkMenuVisibility()
{
  var position_scroll = $(window).scrollTop();
  if(position_scroll >= 150)
  {
    $("#nav").fadeIn();
    $("#btn-up-page-box").fadeIn();
  }
  else{
    $("#nav").fadeOut();
    $("#btn-up-page-box").fadeOut();
  }
}

$(document).ready(function()
{
  $("#nav").hide();
})
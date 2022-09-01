$(function () {
    $(".d1-btn").click(function () {
        $(".d1-content").fadeToggle(500);
        $(".d1-btn img").toggleClass("rotated");
    });
    $(".d2-btn").click(function () {
        $(".d2-content").fadeToggle(500);
        $(".d2-btn img").toggleClass("rotated");
    });
    $("#close").click(function () {
        $(".links").fadeOut(500);
     });
     $("#open").click(function () {
        $(".links").fadeIn(500);
     });
  
});
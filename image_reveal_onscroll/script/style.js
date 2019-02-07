$(document).ready(function() {
  $(window).scroll(function() {
    var scrollops = $(window).scrollTop();
    $('.bg').css({
      height: +scrollops + 'px'
    });
  });
});

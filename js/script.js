$(function () {
  // swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
    },
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ハンバーガーメニュー
  const header = $("#js-header");
  const hamburger = $("#js-hamburger");
  $('#js-hamburger').on('click', function () {
    $('body').toggleClass('is-open');
  });


  // トップへ戻る
  const pagetop = $('#js-page-top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

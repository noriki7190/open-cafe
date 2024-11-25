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

  // ハンバーガーボタンの表示
  const mainMenu = document.querySelector("#js-main-menu");
  const hamburger = document.querySelector("#js-hamburger");
  const overlay = document.querySelector("#js-overlay");
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        hamburger.classList.remove('is-show');
        console.log('isIntersecting');
      } else {
        hamburger.classList.add('is-show');
        console.log('isNotIntersecting');
      }
    }
  }, options);
  observer.observe(mainMenu);

  // ハンバーガーメニューの開閉
  // hamburger.on('click', function () {
  //   $('body').toggleClass('is-open');
  // });
  hamburger.addEventListener("click", function () {
    document.body.classList.toggle("is-open");
  });
  overlay.addEventListener("click", function () {
    document.body.classList.remove("is-open");
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

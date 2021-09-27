export let mySwiper = new Swiper(".swiper-container", {
  //ループ機能
  loop: true,
  //縦方向にスライド
  // direction: "vertical",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 5000
  }
});

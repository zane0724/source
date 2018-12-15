window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    loop:true,
    autoplay:2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable:true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
  setInterval("mySwiper.slidePrev()", 2000);   
}

  
/*
 * 动态加载slider
 */
define(function(require, exports, module) {
    var swiper = new Swiper('.swiper-container', {
        //pagination: '.swiper-pagination',
        nextButton: '.J_mod-next',
        prevButton: '.J_mod-prev',
        slidesPerView: 5,
        centeredSlides: true,
        paginationClickable: true
        //spaceBetween: 30,
    });
	module.exports = swiper;
});
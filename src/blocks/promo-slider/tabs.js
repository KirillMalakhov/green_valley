$( document ).ready(function() {
        var linkHref;
        $('.promo-slider__tabs-item a').on('click', function(event){
          event.preventDefault();
          $(this).closest('.promo-slider-tabs').find('.promo-slider__tabs-item.promo-slider__tabs-item--active').removeClass('promo-slider__tabs-item--active')
          $(this).closest('.promo-slider__tabs-item').addClass('promo-slider__tabs-item--active');

          $(this).closest('.promo-slider-tabs').find('.promo-slider__tabs-item.promo-slider__tabs-item--active').removeClass('promo-slider__tabs-item--active');
          linkHref = $(this).attr('href');
          $(linkHref).addClass('promo-slider__tabs-item--active');
        });
  });
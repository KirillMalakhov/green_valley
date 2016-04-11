var linkHref;
$('.tabs-link a').on('click', function(event){
  event.preventDefault();
  $(this).closest('.tabs').find('.tabs-link.active').removeClass('active')
  $(this).closest('.tabs-link').addClass('active');
  
  $(this).closest('.tabs').find('.tab-item.active').removeClass('active');
  linkHref = $(this).attr('href');
  $(linkHref).addClass('active');
});
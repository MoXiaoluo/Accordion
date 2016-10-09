$(function(){
  $('.accordion-header').on('click',function(){
    $('.accordion-body').addClass('hidden');
    $(this).next().removeClass('hidden');
  })
})

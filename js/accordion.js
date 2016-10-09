$(function(){
  $('.accordion-header').on('click',function(){

    $(".accordion-body").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
    // if(!$(this).next().hasClass('hidden')){
    //   $(this).next().addClass('hidden');
    // }else{
    //   $('.accordion-body').addClass('hidden');
    //   $(this).next().removeClass('hidden');
    // }
  })
})

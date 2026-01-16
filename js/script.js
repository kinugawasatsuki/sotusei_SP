


$(function () {

  $('.filter-btn[data-filter="all"]').addClass('btn-on');


  $('.filter-btn').on('click', function () {
    const filter = $(this).data('filter');

    // active切り替え
    $('.filter-btn').removeClass('btn-on');
    $(this).addClass('btn-on');

    // 表示切り替え
    if (filter === 'all') {
      $('.chara-block li').show();
    } else {
      $('.chara-block li').hide();
      $('.chara-block li[data-category="' + filter + '"]').show();
    }
  });

  $('.rotate').on('click', function () {
    $('.chara-image').toggleClass('rotate-on');
    console.log('aaa');
  });


});
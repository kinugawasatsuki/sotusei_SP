


$(function () {

  if ($('.main-wrapper').length) {


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



  }

});

$(function () {

  if ($('.chara-wrapper').length) {

    const urlParams = new URLSearchParams(window.location.search);
    const chara = urlParams.get('chara');
    const data = chara_prof[chara];

    console.log("chara:", chara);
    console.log("data:", data);

    console.log("data.image:", data.image);
    console.log("data.image02:", data.image02);

    console.log(chara_prof["アンジェリカ"]);






    $('.chara-image').html(`
      <img class="c-img c-main" src="${data.image}">
      <img class="c-img c-hover" src="${data.image02}">`);
    $('.name').text(data.name);
    $('.major').text(data.major)
      .addClass(data.className);
    $('.food-a').text(data.food);
    $('.want-a').text(data.want);
    $('.music-a').html(`
      <p>${data.music}</p>
      ${data.iframe}
      <p>${data.music_text}</p>`);
    $('.kd-a').text(data.kd);
    $('.free-a').text(data.free);





    $('.rotate').on('click', function () {
      $('.chara-image').toggleClass('rotate-on');
      console.log('aaa');
    });


  }

});